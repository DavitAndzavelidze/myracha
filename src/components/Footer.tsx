import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
              <Link href="/">
                <p className="ml-2 cursor-pointer">მთავარი</p>
              </Link>
            </div>
            <div className="flex items-center">
              <FaHotel />
              <Link href="/rooms">
                <p className="ml-2 cursor-pointer">სასტუმროები</p>
              </Link>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <Link href="/contact">
                <p className="ml-2 cursor-pointer">კონტაქტი</p>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <p className="border-b-2 border-green-500 py-2">
              სოციალური ქსელები
            </p>
            <div className="flex items-center py-4">
              <FaFacebook />
              <Link
                href={"https://www.facebook.com/IMOGZAURE.MYRACHA.GE"}
                target="_blank"
              >
                <p className="ml-2 cursor-pointer">Facebook</p>
              </Link>
            </div>
            <div className="flex items-center">
              <FaInstagram />
              <Link
                href={"https://www.instagram.com/myracha.ge/"}
                target="_blank"
              >
                <p className="ml-2 cursor-pointer">Instagram</p>
              </Link>
            </div>
            <div className="flex items-center pt-4">
              <FaTiktok />
              <Link
                href={"https://www.tiktok.com/@imogzaurerachashi"}
                target="_blank"
              >
                <p className="ml-2 cursor-pointer">Tiktok</p>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <p className="border-b-2 border-green-500 py-2">საკონტაქტო</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <Link
                href={"https://maps.app.goo.gl/cXVz2DNeYRBNrz7a9"}
                target="_blank"
              >
                <p className="ml-2 cursor-pointer">რაჭა</p>
              </Link>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2 cursor-pointer">000-000-000</p>
            </div>
            <div className="flex items-center pt-4">
              <MdEmail />
              <Link href="mailto:info.myracha@gmail.com">
                <p className="ml-2 cursor-pointer">info.myracha@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500/50  dark:bg-gray-900 dark:text-gray-100 h-10 md:h-[40px] mt-16 w-full bottom-0 left-0 flex justify-center items-center text-[10px] md:text-sm text-gray-800">
        <p>Copyright &#169; 2025 myracha.ge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
