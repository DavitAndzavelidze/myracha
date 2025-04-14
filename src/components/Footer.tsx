import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import {
  FaHome,
  FaHotel,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p className="border-b-2 border-green-500 py-2">ნავიგაცია</p>
            <div className="flex items-center py-4">
              <FaHome />
              <p className="ml-2 cursor-pointer">მთავარი</p>
            </div>
            <div className="flex items-center">
              <FaHotel />
              <p className="ml-2 cursor-pointer">სასტუმროები</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2 cursor-pointer">კონტაქტი</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="border-b-2 border-green-500 py-2">გამოგვყევი</p>
            <div className="flex items-center py-4">
              <FaFacebook />
              <p className="ml-2 cursor-pointer">Facebook</p>
            </div>
            <div className="flex items-center">
              <FaInstagram />
              <p className="ml-2 cursor-pointer">Instagram</p>
            </div>
            <div className="flex items-center pt-4">
              <FaTiktok />
              <p className="ml-2 cursor-pointer">Tiktok</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="border-b-2 border-green-500 py-2">კონტაქტი</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2 cursor-pointer">codewithDavit</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2 cursor-pointer">000-000-000</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2 cursor-pointer">codewithDavit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500/50  dark:bg-gray-900 dark:text-gray-100 h-10 md:h-[40px] mt-16 w-full bottom-0 left-0 flex justify-center items-center text-sm text-gray-800">
        <p>Copyright &#169; 2025 myracha.ge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
