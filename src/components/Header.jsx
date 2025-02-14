"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu
import User from "../assets/user_logo.png";
import what from "../assets/whatbytes.png";

const Header = ({ username = "Dharani S" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between md:justify-between p-4 bg-white dark:bg-gray-800 shadow-md relative">
      {/* Mobile View: Logo Centered */}
      <div className="md:hidden flex-1 flex justify-center">
        <Image src={what} alt="WhatBytes Logo" width={160} height={30} className="w-auto h-8" />
      </div>

      {/* Desktop View: Logo on Left */}
      <div className="hidden md:flex items-center">
        <Image src={what} alt="WhatBytes Logo" width={160} height={30} className="w-auto h-8" />
      </div>

      {/* Desktop Profile Section */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2 border border-gray-800 rounded-lg px-3 py-1 shadow-sm bg-white">
          <Image src={User} alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="text-gray-900 dark:text-white">{username}</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-900 dark:text-white absolute left-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Profile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-48 flex flex-col space-y-3 md:hidden">
          <div className="flex items-center space-x-2 border border-gray-800 rounded-lg px-3 py-1 bg-white dark:bg-gray-700">
            <Image src={User} alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="text-gray-900 dark:text-white">{username}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
