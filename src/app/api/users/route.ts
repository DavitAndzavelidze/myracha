import { getUserData } from "@/libs/apis";
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
