"use client";
import { useState } from "react";
import { BarChart, Award, FileText, Menu, X } from "lucide-react"; // Lucide icons
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("Skill Test");
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  const menuItems = [
    { name: "Dashboard", icon: <BarChart size={20} />, link: "/" },
    { name: "Skill Test", icon: <Award size={20} />, link: "/skill-test" },
    { name: "Internship", icon: <FileText size={20} />, link: "/internship" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-60 bg-white border-r shadow-md p-4
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={() => {
                  setActive(item.name);
                  setIsOpen(false); // Close sidebar on mobile
                }}
              >
                <div
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer
                  ${
                    active === item.name
                      ? "bg-gray-100 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile (Closes Sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
