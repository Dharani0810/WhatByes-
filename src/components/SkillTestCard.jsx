"use client";
import React, { useState } from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";
import Image from "next/image";
import HTML from '../assets/html_icon.png';
import UpdateScoreModel from "./UpdateScoreModel"; // Import the modal component

const SkillTestCard = ({ updateQuickStatistics }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    correctAnswers: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (updatedData) => {
    updateQuickStatistics(updatedData); // Pass updated data to parent
    setFormData(updatedData); // Update form data
    closeModal();
  };

  return (
    <div className=" flex items-center  p-7 border bg-white shadow-md rounded-md">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <div className="w-14">
          <Image src={HTML} alt="html_icon" width={50} height={50} />
        </div>
        <div className="text-left ">
          <h4 className="font-semibold text-lg">Hypertext Markup Language</h4>
          <span className="text-sm text-gray-500">
            Questions: 08 | Duration: 15 mins | Submitted on 5 Jun 2021
          </span>
        </div>
      </div>

      {/* Update Button */}
      <button
        onClick={openModal}
        className="bg-blue-800 ml-7 text-white font-semibold  px-6  py-2 rounded-md hover:bg-blue-900 transition"
      >
        Update
      </button>

      {/* Show Modal if isModalOpen is true */}
      {isModalOpen && (
        <UpdateScoreModel
          onSave={handleSave}
          onClose={closeModal}
          initialStats={formData} // Pass existing form data
        />
      )}
    </div>
  );
};

export default SkillTestCard;
