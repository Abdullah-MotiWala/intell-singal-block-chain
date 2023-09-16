import React from "react";
import { useNavigate } from "react-router-dom";

const UnderDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Page is under development
      </h1>
      <button
        className="button panel-primary-bg rounded-xl text-white font-bold p-4"
        onClick={() => navigate("/")}
      >
        Go To Home
      </button>
    </div>
  );
};

export default UnderDevelopment;
