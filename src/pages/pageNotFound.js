import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
      <button
        className="button panel-primary-bg rounded-xl text-white font-bold p-2"
        onClick={() => navigate("/panel/dashboard")}
      >
        Go To Dashboard
      </button>
    </div>
  );
};

export default PageNotFound;
