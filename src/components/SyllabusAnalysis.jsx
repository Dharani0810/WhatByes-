"use client";
import React from "react";

const syllabusData = [
  { topic: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500", textColor: "text-blue-600" },
  { topic: "Tags & References in HTML", progress: 60, color: "bg-orange-500", textColor: "text-orange-600" },
  { topic: "Tables & References in HTML", progress: 24, color: "bg-red-500", textColor: "text-red-600" },
  { topic: "Tables & CSS Basics", progress: 96, color: "bg-green-500", textColor: "text-green-600" },
];

const SyllabusAnalysis = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3  ">
      <h2 className="text-2xl font-semibold mb-9">Syllabus Wise Analysis</h2>

      {syllabusData.map((item, index) => (
        <div key={index} className="mb-7">
          <p className="text-sm font-medium mb-1">{item.topic}</p>
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className={`${item.color} h-2 rounded-full`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
          <span className={`text-sm font-semibold ${item.textColor} mt-1 block text-right`}>
            {item.progress}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
