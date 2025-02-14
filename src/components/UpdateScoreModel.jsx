"use client";
import Image from 'next/image';
import { useState } from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";
import QuestionAnalysis from './QuestionAnalysis';

import HTML from '../assets/html_icon.png';

const UpdateScoreModel = ({ onSave, onClose, initialStats }) => {
  const [rank, setRank] = useState(initialStats.rank || "");
  const [percentile, setPercentile] = useState(initialStats.percentile || "");
  const [correctAnswers, setCorrectAnswers] = useState(initialStats.correctAnswers || "");
  const [errors, setErrors] = useState({ rank: "", percentile: "", correctAnswers: "" });

  const handleSave = () => {
    let newErrors = { rank: "", percentile: "", correctAnswers: "" };
    let isValid = true;

    if (rank === "") {
      newErrors.rank = "Required | should be a number";
      isValid = false;
    }
    if (percentile === "" || percentile < 0 || percentile > 100) {
      newErrors.percentile = "Required | Percentile must be between 0 - 100";
      isValid = false;
    }
    if (correctAnswers === "") {
      newErrors.correctAnswers = "Score is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setErrors({ rank: "", percentile: "", correctAnswers: "" });
    onSave({ rank, percentile, correctAnswers });
  };
  const updateQuickStatistics = (newData) => {
    setStatistics((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-7 w-full max-w-2xl rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-4">
  <h3 className="text-xl font-bold text-gray-900">Update Scores</h3>
  <Image src={HTML} alt="html_icon" width={50} height={50} />
</div>
        {/* <h3 className="text-xl font-bold text-gray-900">Update Scores</h3>
          <Image src={HTML} alt="html_icon" width={50} height={50} /> */}

        {/* Form Grid for Proper Alignment */}
        <div className="mt-6 grid grid-cols-2 gap-6 items-center">
          {/* Rank */}
          <label className="flex items-center text-base font-semibold text-gray-700 whitespace-nowrap">
            <PiNumberCircleOneFill className="text-blue-800 text-2xl mr-2" /> Update Rank
          </label>
          <div className="w-full text-right">
            <input
              type="number"
              placeholder="Enter Rank"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className={`w-50 h-10 ml-auto rounded-md p-3 border ${
                errors.rank ? "border-red-500" : "border-blue-800"
              } shadow-sm focus:placeholder-gray-400`}
            />
            {errors.rank && <p className="text-sm text-red-600 mt-1">{errors.rank}</p>}
          </div>

          {/* Percentile */}
          <label className="flex items-center text-base font-semibold text-gray-700 whitespace-nowrap">
            <PiNumberCircleTwoFill className="text-blue-800 text-2xl mr-2" /> Update Your Percentile
          </label>
          <div className="w-full text-right">
            <input
              type="number"
              placeholder="Enter Percentile"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className={`w-50 h-10 ml-auto rounded-md p-3 border ${
                errors.percentile ? "border-red-500" : "border-blue-800"
              } shadow-sm focus:placeholder-gray-400`}
            />
            {errors.percentile && <p className="text-sm text-red-600 mt-1">{errors.percentile}</p>}
          </div>

          {/* Correct Answers */}
          <label className="flex items-center text-base font-semibold text-gray-700 whitespace-nowrap">
            <PiNumberCircleThreeFill className="text-blue-800 text-3xl mr-2" /> Update Your Current Score(out of 15)
          </label>
          <div className="w-full text-right">
            <input
              type="number"
              placeholder="Enter Score"
              value={correctAnswers}
              onChange={(e) => setCorrectAnswers(e.target.value)}
              className={`w-50 h-10 ml-auto rounded-md p-3 border ${
                errors.correctAnswers ? "border-red-500" : "border-blue-800"
              } shadow-sm focus:placeholder-gray-400`}
              min="0"
            />
            {errors.correctAnswers && <p className="text-sm text-red-600 mt-1">{errors.correctAnswers}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-3 text-lg font-semibold  bg-white-100 border-y-1 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScoreModel;
