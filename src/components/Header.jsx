'use client'
// import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import User from '../assets/user_logo.png'
import what from '../assets/whatbytes.png'

const Header = ({ username = "Dharani S" }) => {
  return (
    <div className="flex justify-between p-4 bg-white dark:bg-gray-800 shadow-md">

      <div className="flex flex-row">
      <Image src={what} alt="WhatBytes Logo" width={180} height={30} />
      
      </div>
    


      <div className="flex items-center space-x-4">

       <div className="flex items-center space-x-2 border border-gray-800 rounded-lg px-3 py-1 shadow-sm bg-white">
       <Image src={User} alt="Profile" className="w-8 h-8 rounded-full" />
       <span>{username}</span>
       </div>
        
      </div>
    </div>
  );
};

export default Header;