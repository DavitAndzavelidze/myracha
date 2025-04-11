"use client";

import { FC } from "react";

type Props = {
  price: number;
  discount: number;
};

const BookRoomCta: FC<Props> = (props) => {
  const { price, discount } = props;
  const discountPrice = price - (price / 100) * discount;
  return (
    <div className="px-7 py-6 text-center">
      <h3>
        <span
          className={`${discount ? "text-gray-400 line-through" : ""} font-bold text-xl`}
        >
          ₾ {price}
        </span>
        {discount ? (
          <span className="font-bold text-xl">
            <span className="text-tertiary-dark ml-3">₾ {discountPrice}</span>
          </span>
        ) : (
          ""
        )}
      </h3>

      {/* <button
        disabled={isBooked}
        className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isBooked ? "Booked" : "Book Now"}
      </button> */}
    </div>
  );
};

export default BookRoomCta;
