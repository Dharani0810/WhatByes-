"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import Image from "next/image";
import graph from '../assets/graph_icon.png';
import UpdateScoreModel from "./UpdateScoreModel";

const data = [
  { x: 0, y: 0 },
  { x: 10, y: 5 },
  { x: 20, y: 20 },
  { x: 30, y: 40 },
  { x: 40, y: 50 },
  { x: 50, y: 80 },
  { x: 60, y: 40 },
  { x: 70, y: 20 },
  { x: 80, y: 10 },
  { x: 90, y: 4 },
  { x: 100, y: 5 },
];

const ComparisonGraph = ({ percentile }) => {
  const comparisonText =
    percentile > 72
      ? `greater than the average percentile of 72% of all the engineers who took this assessment.`
      : `lower than the average percentile of 72% of all the engineers who took this assessment.`;

  return (
    <div className="   rounded-lg shadow-lg w-full h-full"> 
      <div className="bg-white border rounded-lg border-stone-300 shadow-lg p-2 ">
        <h2 className="text-lg font-bold mb-3">Comparison Graph</h2>
        <p className="text-sm text-gray-600">
          <strong>You scored {percentile}% percentile</strong>, which is {comparisonText}
        </p>

        <div className="relative mt-5">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="y" stroke="#7B61FF" dot={{ fill: "purple", r: 4 }} />

              <ReferenceLine x={percentile} stroke="red" label={{ value: `${percentile}%` }} />
              <ReferenceLine x={72} stroke="green" label={{ value: "72%" }} />
             
            </LineChart>
          </ResponsiveContainer>

          <div className="absolute top-0 right-0">
            <div className="w-11 h-11 flex items-center justify-center bg-gray-200 rounded-full shadow">
              <Image src={graph} alt="Chart Icon" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;
