import axios from "axios";
import { FC } from "react";
import useSWR from "swr";

import { Review } from "@/models/review";
import Rating from "./Raiting";

const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };

  const {
    data: roomReviews,
    error,
    isLoading,
  } = useSWR("/api/room-reviews", fetchRoomReviews, {
    // Optional: Add SWR configuration
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  console.log(roomReviews);
  // Proper loading state
  if (isLoading) return <div>Loading reviews...</div>;

  // Error handling (don't throw, render error UI instead)
  if (error) return <div>Error loading reviews: {error.message}</div>;

  // Handle empty data state
  if (!roomReviews) return <div>No reviews found</div>;

  console.log(roomReviews); // Now safe to log

  return (
    <>
      {roomReviews &&
        roomReviews.map((review) => (
          <div
            className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"
            key={review._id}
          >
            <div className="font-semibold mb-2 flex">
              <p>{review.user.name}</p>
              <div className="ml-4 flex items-center text-tertiary-light text-lg">
                <Rating rating={review.userRating} />
              </div>
            </div>

            <p>{review.text}</p>
          </div>
        ))}
    </>
  );
};

export default RoomReview;
