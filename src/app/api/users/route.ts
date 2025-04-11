import {
  checkReviewExists,
  createReview,
  getUserData,
  updateReview,
} from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Authentication Required" },
        { status: 401 } // 401 is more appropriate for auth failures
      );
    }

    const userId = session.user.id;
    const data = await getUserData(userId);

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error in GET /api/users:", error);
    return NextResponse.json(
      { error: error.message || "Unable to fetch user data" },
      { status: error.status || 500 } // Default to 500 for server errors
    );
  }
}

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentication Required", { status: 500 });
  }

  const { roomId, reviewText, ratingValue } = await req.json();

  if (!roomId || !reviewText || !ratingValue) {
    return new NextResponse("All fields are required", { status: 400 });
  }

  const userId = session.user.id;

  try {
    const alreadyExists = await checkReviewExists(userId, roomId);

    let data;

    if (alreadyExists) {
      data = await updateReview({
        reviewId: alreadyExists._id,
        reviewText,
        userRating: ratingValue,
      });
    } else {
      data = await createReview({
        hotelRoomId: roomId,
        reviewText,
        userId,
        userRating: ratingValue,
      });
    }

    return NextResponse.json(data, { status: 200, statusText: "Successful" });
  } catch (error: any) {
    console.log("Error Updating", error);
    return new NextResponse("Unable to create review", { status: 400 });
  }
}
