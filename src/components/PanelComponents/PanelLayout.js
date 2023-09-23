import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const PanelLayout = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
 
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex h-screen w-screen bg-slate-200 overflow-hidden">
      {/* Toggle button in the top right */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 bg-red-500 text-white rounded-full outline outline-2 outline-white focus:outline-gray-50 shadow-sm"
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`${
          isSidebarOpen ? "md:ml-0 -ml-64" : "-ml-64"
        } transition-margin duration-300 p-6 py-4 w-full md:w-[90%] h-screen overflow-y-scroll`}
      >
        {/* Outlet content */}
        <Outlet />
      </div>
    </div>
  );
};

export default PanelLayout;
