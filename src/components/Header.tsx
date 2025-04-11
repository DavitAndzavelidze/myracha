"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "@/context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newDarkTheme = !darkTheme;
    setDarkTheme(newDarkTheme);
    localStorage.setItem("hotel-theme", newDarkTheme ? "true" : "false");
  };

  const navLinks = [
    { href: "/", label: "მთავარი" },
    { href: "/rooms", label: "სასტუმროები" },
    { href: "/contact", label: "კონტაქტი" },
  ];

  return (
    <header
      className={`py-10 px-4 sm:px-6 lg:px-8  ${darkTheme ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/images/logo.png"
              alt="Hotel Logo"
              width={50}
              height={50}
              className="h-10 w-10"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={` px-3 py-2 text-xl hover:bg-tertiary-light duration-300 transition-all p-2 rounded-xl`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User and Theme Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label={
              darkTheme ? "Switch to light mode" : "Switch to dark mode"
            }
            className={`p-2 rounded-full ${darkTheme ? "text-yellow-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200"} transition-colors duration-300`}
          >
            {darkTheme ? (
              <MdOutlineLightMode size={24} />
            ) : (
              <MdDarkMode size={24} />
            )}
          </button>

          {session?.user ? (
            <Link
              href={`/users/${session.user.id}`}
              className="flex items-center"
            >
              {session.user.image ? (
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User profile"}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <FaUserCircle
                  className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-600"} hover:text-blue-500 transition-colors duration-300`}
                />
              )}
            </Link>
          ) : (
            <Link href="/auth" className="flex items-center">
              <FaUserCircle
                className={`text-3xl ${darkTheme ? "text-gray-300" : "text-gray-600"} hover:text-blue-500 transition-colors duration-300`}
              />
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes
                className={`text-2xl ${darkTheme ? "text-white" : "text-gray-800"}`}
              />
            ) : (
              <FaBars
                className={`text-2xl ${darkTheme ? "text-white" : "text-gray-800"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
            <ul className="px-2 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${darkTheme ? "text-white hover:bg-gray-800" : "text-gray-800 hover:bg-gray-200"} block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
