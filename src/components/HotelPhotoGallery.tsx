"use client";

import { FC, useState } from "react";
import { Image as ImageType } from "@/models/room";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const maximumVisiblePhotos = 5;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 relative gap-5 px-3">
        <div className="h-[540px] relative rounded-2xl overflow-hidden">
          <div className="hidden md:flex justify-center items-center w-full h-full">
            <Image
              src={photos[0].asset.url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img scale-animation cursor-pointer"
              width={800}
              height={800}
              onClick={openModal.bind(this, 0)}
            />
          </div>
          <div className="md:hidden flex justify-center items-center w-full h-full">
            <Image
              src={photos[currentPhotoIndex].asset.url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img"
              width={800}
              height={800}
              onClick={openModal.bind(this, 0)}
            />
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center">
          <div className="flex space-x-2">
            <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
            <FaArrowRight className="cursor-pointer" onClick={handleNext} />
          </div>
          <span>
            {currentPhotoIndex + 1} / {photos.length}
          </span>
        </div>
        <div className="hidden md:grid grid-cols-2 h-full gap-5">
          {displayPhotos.map((photos, index) => (
            <div
              key={index}
              className="cursor-pointer h-64 rounded-2xl overflow-hidden"
            >
              <Image
                src={photos.asset.url}
                width={150}
                height={150}
                alt={`Room Photo ${index + 2}`}
                className="img scale-animation"
              />
            </div>
          ))}
          {remainingPhotosCount > 0 && (
            <div
              className="cursor-pointer relative h-64 rounded-2xl overflow-hidden"
              onClick={openModal.bind(this, maximumVisiblePhotos)}
            >
              <Image
                src={photos[maximumVisiblePhotos - 1].asset.url}
                width={150}
                height={150}
                alt={`Room Photo ${maximumVisiblePhotos}`}
                className="img"
              />
              <div className="absolute cursor-pointer text-white inset-0 flex justify-center bg-[rgba(0,0,0,0.5)] items-center text-2xl">
                + {remainingPhotosCount}
              </div>
            </div>
          )}
        </div>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
            <div className="h-[75vh] w-[320px] md:w-[700px] relative">
              <Image
                src={photos[currentPhotoIndex].asset.url}
                alt={`Room Photo ${currentPhotoIndex + 1}`}
                width={800}
                height={800}
                className="img"
              />
              <div className="flex justify-between items-center py-3">
                <div className="flex space-x-2 items-center text-white">
                  <FaArrowLeft
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                  <FaArrowRight
                    className="cursor-pointer"
                    onClick={handleNext}
                  />
                </div>
                <span className="text-white text-sm">
                  {currentPhotoIndex + 1} / {photos.length}
                </span>
              </div>
              <button
                className="absolute top-0 right-0 translate-x-[-8px] translate-y-[6px] md:top-0 md:right-0 md:translate-x-8 md:-translate-y-6 text-white text-lg"
                onClick={closeModal}
              >
                <MdCancel className="font-medium text-2xl text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelPhotoGallery;
