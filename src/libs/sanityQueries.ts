import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0]{ 
  _id, 
  description, 
  discount, 
  images[] {
      _key,
      asset -> {
          url
      },
      alt
  }, 
  isFeatured, 
  name, 
  price, 
  slug,
  coverImage {
      asset -> {
          url
      },
      alt
  }
}`;

export const getRoomsQuery = groq`*[_type == "hotelRoom"] {
  _id,
  coverImage {
      asset -> {
          url
      },
      alt
  },
  description,
  isFeatured,
  name,
  price,
  discount, 
  slug,
  type
}`;

export const getRoom = groq`*[_type == "hotelRoom" && slug.current == $slug][0] {
  _id,
  coverImage {
      asset -> {
          url
      },
      alt
  },
  description,
  images[] {
      _key,
      asset -> {
          url
      },
      alt
  },
  isFeatured,
  name,
  numberOfBeds,
  offeredAmenities,
  price,
  discount, 
  slug,
  type
}`;

export const getUserBookingsQuery = groq`*[_type == 'booking' && user._ref == $userId] {
 _id,
 hotelRoom -> {
         _id,
         name,
         slug,
         price
      },
  }`;

export const getUserDataQuery = groq`*[_type == 'user' && _id == $userId][0] {
    _id,
    name,
    email,
    isAdmin,
    about,
    _createdAt,
    image,
  }`;

export const getRoomReviewsQuery = groq`*[_type == "review" && hotelRoom._ref == $roomId] {
    _createdAt,
    _id,
    text,
    user -> {
        name
    },
    userRating
}`;
