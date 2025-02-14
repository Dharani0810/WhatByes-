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
  
    const [showModal, setShowModal] = useState(false);
  
    const updateQuickStatistics = (newData) => {
      setStatistics((prev) => ({ ...prev, ...newData }));
    };
     const handleSave = (newData) => {
    setCorrectAnswers(parseInt(newData.correctAnswers)); // Ensure it's a number
  };
  
    return (
       <div className="flex flex-row h-full space-x-3 ">
      <div className="  h-full w-7/12 space-y-7 ">

       
        <div className="flex flex-col w-12/12  rounded-md">
         <SkillTestCard updateQuickStatistics={updateQuickStatistics} />
         </div>

         <div className="flex flex-col w-12/12  ">
         <QuickStatistics {...statistics} />
         </div>
           
           <div className="flex flex-col w-12/12 ">
           
           <ProgressBar percentile={statistics.percentile} />

           </div>
          
            </div>
          <div className="h-full w-5/12 px-2 space-y-10 ">
          <div className="flex flex-col w-12/12 h-2/5 ">
          <SyllabusAnalysis />
          </div>

          <div className="flex flex-col w-12/12 h-3/5  ">
          <QuestionAnalysis correctAnswers={statistics.correctAnswers} totalQuestions={15} />
          </div>

          
          </div>
           
          
   

      </div>

     
    );
  }