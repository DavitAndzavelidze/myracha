import { Room } from "@/models/room";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, name, price, type, description, slug },
  } = props;
  return (
    <div className="rounded-xl w-72 mb-10 mt-10 mx-auto md:mx-0 overflow-hidden text-black">
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

      <div className="p-4 bg-white">
        <div className="flex justify-between text-xl font-semibold">
          <p>{name}</p>
          <p>₾{price}</p>
        </div>
        <p className="pt-2 text-xs">{type}</p>
        <div className="pt-3 pb-6 h-[3.5rem] overflow-hidden relative">
          <p className="pt-3 pb-6 absolute inset-0 truncate">{description}</p>
        </div>

        <Link
          href={`/rooms/${slug.current}`}
          className="bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:bg-primary/90 transition-all duration-300"
        >
          დეტალურად
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
