import Image from "next/image";
import Trophy from "../assets/trophy.png";  
import Checked from "../assets/checked.png";
import Folder from "../assets/folder.png"; 

export default function QuickStatistics({ rank, percentile, correctAnswers }) {
    const stats = [
      { icon: Trophy, label: "YOUR RANK", value: Number(rank).toLocaleString("en-US") },
      { icon: Folder, label: "PERCENTILE", value: `${percentile} %` },
      { icon: Checked, label: "CORRECT ANSWERS", value: `${correctAnswers}/15` },
    ];
  
    return (
      <div className="w-12/12 h-44 p-4 border bg-white rounded-lg shadow-lg">
        <h4 className="text-xl font-bold text-gray-800 mb-3">Quick Statistics</h4>
        <div className="flex justify-between">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-1/3">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow">
                <Image src={item.icon} alt={item.label} width={24} height={24} />
              </div>
              <h4 className="text-xl font-semibold mt-2">{item.value}</h4>
              <span className="text-gray-500 text-xs font-light">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }