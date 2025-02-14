'use client'
import { useState } from "react";
import { BarChart, Award, FileText } from "lucide-react"; // Using Lucide icons
import Link from "next/link";


const Sidebar = () => {
  const [active, setActive] = useState("Skill Test");

  const menuItems = [
    { name: "Dashboard", icon: <BarChart size={20} />, link: "/" },
    { name: "Skill Test", icon: <Award size={20} />, link: "/skill-test" },
    { name: "Internship", icon: <FileText size={20} />, link: "/internship" },
  ];

  return (
    <div className="w-60 h-screen bg-white border-r flex flex-col p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <div
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer
                ${active === item.name ? "bg-gray-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-50"}
                `}
                onClick={() => setActive(item.name)}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
