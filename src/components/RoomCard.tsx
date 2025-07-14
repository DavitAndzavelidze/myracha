import { Room } from "@/models/room";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import BookRoomCta from "./BookRoomCta";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, name, price, type, description, discount, slug },
  } = props;
  return (
    <div className="rounded-xl w-72 mb-10 mt-10 mx-auto md:mx-0 overflow-hidden text-black dark:text-white">
      <div className="h-60 overflow-hidden">
        {coverImage?.asset.url ? (
          <Image
            src={coverImage.asset.url}
            alt={name}
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
      </div>

      <div className="p-4 dark:bg-[#0A1A2F]">
        <div className="flex justify-between text-xl font-semibold">
          <p className="truncate max-w-[50%]">{name}</p>
          <BookRoomCta discount={discount} price={price} />
        </div>
        <p className="pt-2 text-xs">{type}</p>
        <div className="pt-3 pb-6 min-h-[3.5rem]">
          <p className="line-clamp-2 text-sm">{description}</p>
        </div>

        <Link
          href={`/rooms/${slug.current}`}
          className="btn-primary dark:bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold"
        >
          დეტალურად
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
