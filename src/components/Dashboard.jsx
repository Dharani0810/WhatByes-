"use client";
import React, { useState } from "react";
import SkillTestCard from "./SkillTestCard";
import QuickStatistics from "./Statistics";
import ProgressBar from "./ProgressBar";
import SyllabusAnalysis from "./SyllabusAnalysis";
import QuestionAnalysis from "./QuestionAnalysis";
import UpdateScoreModel from "./UpdateScoreModel";

export default function Dashboard() {
  const [statistics, setStatistics] = useState({
    rank: 0,
    percentile: 50, // Default percentile
    correctAnswers: 0,
  });

  const updateQuickStatistics = (newData) => {
    setStatistics((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Side (Main Content) */}
      <div className="w-full md:w-7/12 flex flex-col gap-6">
        {/* Skill Test Card */}
        <div className="w-full">
          <SkillTestCard updateQuickStatistics={updateQuickStatistics} />
        </div>

        {/* Quick Statistics */}
        <div className="w-full">
          <QuickStatistics {...statistics} />
        </div>

        {/* Progress Bar */}
        <div className="w-full">
          <ProgressBar percentile={statistics.percentile} />
        </div>
      </div>

      {/* Right Side (Analysis Section) */}
      <div className="w-full md:w-5/12 flex flex-col gap-6">
        {/* Syllabus Analysis */}
        <div className="w-full">
          <SyllabusAnalysis />
        </div>

        {/* Question Analysis */}
        <div className="w-full">
          <QuestionAnalysis correctAnswers={statistics.correctAnswers} totalQuestions={15} />
        </div>
      </div>
    </div>
  );
}
