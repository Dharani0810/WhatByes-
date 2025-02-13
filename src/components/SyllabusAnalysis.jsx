import ProgressBar from "./ProgressBar";

const SyllabusAnalysis = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="font-semibold">Syllabus Wise Analysis</h3>
      <ProgressBar label="HTML Tools, Forms, History" percentage={80} color="bg-blue-500" />
      <ProgressBar label="Tags & References in HTML" percentage={60} color="bg-orange-500" />
      <ProgressBar label="Tables & References in HTML" percentage={24} color="bg-red-500" />
      <ProgressBar label="Tables & CSS Basics" percentage={96} color="bg-green-500" />
    </div>
  );
};
export default SyllabusAnalysis;