const SkillTestCard = () => {
    return (
      <div className="bg-white w-6/12 p-5 rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Hyper Text Markup Language</h3>
            <p className="text-gray-500 text-sm">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Update</button>
        </div>
      </div>
    );
  };
  export default SkillTestCard;