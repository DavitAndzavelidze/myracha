"use client";

import { FC } from "react";

import { Room } from "@/models/room";
import Image from "next/image";
import Link from "next/link";

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = (props) => {
  const { featuredRoom } = props;

  return (
    <section className="flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto">
      <div className="md:grid gap-8 grid-cols-1 mx-auto">
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          {featuredRoom.coverImage ? (
            <Image
              src={featuredRoom.coverImage.asset.url}
              alt={featuredRoom.name}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full" />
          )}
        </div>
        <div className="grid grid-cols-2 gap-8 h-48">
          {featuredRoom.images.slice(1, 3).map((image) => (
            <div key={image._key} className="rounded-2xl overflow-hidden">
              {image.asset?.url ? (
                <Image
                  src={image.asset.url}
                  alt={image.alt || `Room image ${image._key}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="md:py-10 md:w-1/2 text-left">
        <h3 className="font-heading mb-6">{featuredRoom.name}</h3>

        <p className="font-normal">{featuredRoom.description}</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mt-5">
          <div className="flex mb-3 md:mb-0">
            <div className="flex gap-3 flex-col items-center justify-center mr-4">
              <p className="md:font-bold flex font-medium text-lg xl:text-5xl">
                ₾ {featuredRoom.price}
              </p>
            </div>
          </div>

          <Link
            href={`/rooms/${featuredRoom.slug.current}`}
            className="h-fit text-center btn-primary shadow-md px-3 py-2 lg:py-4 lg:px-6 rounded-2xl font-bold lg:text-xl"
          >
            დეტალურად
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
