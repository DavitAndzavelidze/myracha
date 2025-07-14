"use client";

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import HotelPhotoGallery from "@/components/HotelPhotoGallery";
import React from "react";
import BookRoomCta from "@/components/BookRoomCta";
import Icon from "@/components/Icon";

const RoomDetails = (props: { params: Promise<{ slug: string }> }) => {
  const params = React.use(props.params);
  const { slug } = params;

  const fetchRoom = async () => getRoom(slug);
  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);
  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  if (!room) return <LoadingSpinner />;

  // Define static amenities with specific icons
  const staticAmenities = [
    { name: "თეთრეული", icon: "gi-towel" },
    { name: "პირსახოცი", icon: "gi-towel" },
    { name: "სარეცხის მანქანა", icon: "gi-washing-machine" },
    { name: "თმის საშრობი", icon: "pi-hair-dryer" },
    { name: "გათბობა", icon: "lu-heater" },
  ];

  return (
    <div className="py-6">
      <HotelPhotoGallery photos={room.images} />
      <div className="container mx-auto mt-20">
        <div className="md:grid md:grid-cols-12 gap-10 px-3">
          <div className="md:col-span-8 md:w-full">
            <div>
              <h2 className="font-bold text-left text-lg md:text-2xl">
                {room.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1 my-11">
                {room.offeredAmenities.map((amenity) => (
                  <div
                    key={amenity._key}
                    className="bg-[#eff0f2] md:py-4 md:rounded-lg dark:bg-gray-800 p-2 rounded-sm text-xs text-center"
                  >
                    <Icon
                      name={amenity.icon ? amenity.icon : `${amenity.icon}`}
                      className="md:text-2xl text-3xl mx-auto"
                    />
                    <p className="text-xs md:text-base pt-3">
                      {amenity.amenity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-4">აღწერა</h2>
                <p>{room.description}</p>
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-4">სერვისები</h2>
                <div className="grid grid-cols-2">
                  {room.offeredAmenities.map((amenity) => (
                    <div
                      key={amenity._key}
                      className="flex items-center md:my-0 my-1"
                    >
                      <Icon
                        name={amenity.icon ? amenity.icon : `${amenity.icon}`}
                        className="text-base"
                      />
                      <p className="text-xs md:text-base ml-2">
                        {amenity.amenity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">დამატებით</h2>
                <div className="grid grid-cols-2">
                  {staticAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center my-1 md:my-0">
                      <Icon name={amenity.icon} className="text-base" />
                      <p className="ml-2 md:text-base text-xs">
                        {amenity.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 rounded ring ring-blue-500/50 dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto">
            <BookRoomCta discount={room.discount} price={room.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
