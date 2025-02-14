"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import targetIcon from "../assets/target_icon.png"; // Ensure the correct path

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ correctAnswers }) => {
  const totalQuestions = 15;
  const percentage = (correctAnswers / totalQuestions) * 100;

  // Doughnut chart data
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [correctAnswers, totalQuestions - correctAnswers],
        backgroundColor: ["#438AF6", "#E0E0E0"], // Blue for correct, Gray for incorrect
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "70%", // Size of center cutout
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg p-3 w-full ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Question Analysis</h2>
        <span className="text-blue-500 font-semibold">{correctAnswers}/{totalQuestions}</span>
      </div>

      {/* Score Analysis Text */}
      <p className="text-gray-600 mt-2 text-sm">
        <strong>You scored {correctAnswers} question{correctAnswers !== 1 ? "s" : ""} out of {totalQuestions}.</strong>
        However, it still needs some improvements.
      </p>

      {/* Doughnut Chart */}
      <div className="relative flex justify-center items-center mt-3    ">
        <Doughnut data={data} options={options} className="w-32 h-32" />

        {/* Target Icon in the Center */}
        <div className="absolute">
          <Image src={targetIcon} alt="Target Icon" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
