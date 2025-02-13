'use client'
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ username = "Dharani S" }) => {
  return (
    <div className="flex justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-2xl font-bold">WhatBytes</h2>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <span>{username}</span>
        {/* <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" /> */}
      </div>
    </div>
  );
};

export default Header;