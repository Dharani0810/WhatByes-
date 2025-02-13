const ProgressBar = ({ label, percentage, color }) => {
    return (
      <div className="mb-4">
        <p className="text-sm">{label}</p>
        <div className="w-full bg-gray-200 h-2 rounded-md">
          <div className={`h-2 rounded-md ${color}`} style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  };
  export default ProgressBar;