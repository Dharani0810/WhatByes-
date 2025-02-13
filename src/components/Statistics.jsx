"use client";

import { useEffect, useState } from "react";

const Statistics = () => {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Prevents hydration mismatch
    fetch("/api/stats")
      .then((res) => res.json())
      .then((stats) => setData(stats))
      .catch(() => setData({ rank: 1, percentile: 30, correctAnswers: "10 / 15" }));
  }, []);

  if (!isMounted || !data) return <p>Loading...</p>; // Avoids rendering different HTML from SSR

  return (
    <div className="bg-white p-5 rounded-xl shadow-md grid grid-cols-3 text-center">
      <div>
        <p className="text-2xl font-bold">{data.rank}</p>
        <p className="text-gray-500 text-sm">YOUR RANK</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{data.percentile}%</p>
        <p className="text-gray-500 text-sm">PERCENTILE</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{data.correctAnswers}</p>
        <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
      </div>
    </div>
  );
};

export default Statistics;
