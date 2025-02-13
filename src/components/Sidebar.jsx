const Sidebar = () => {
    return (
      <div className="w-64 h-screen bg-white shadow-md p-5">
        <ul className="mt-6">
          <li className="mb-4 text-gray-600 hover:text-black cursor-pointer">Dashboard</li>
          <li className="mb-4 text-gray-600 hover:text-black cursor-pointer">Skill Test</li>
          <li className="mb-4 text-gray-600 hover:text-black cursor-pointer">Internship</li>
        </ul>
      </div>
    );
  };
  export default Sidebar;