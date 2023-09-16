import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HistoryCard = ({ data: { name, status, createdAt, id } }) => {
  const navigate = useNavigate();
  const statusText = status ? "Active" : "Expired";
  return (
    <div className="h-24 bg-gray-100 mb-2 rounded-lg p-4 flex justify-between items-center">
      <div className="text-gray-800">
        <p>{`Name : ${name}`}</p>
        <p>
          {`Status :`}{" "}
          <span className={`${status ? "text-green-500" : "text-red-500"}`}>
            {statusText}
          </span>
        </p>
        <p>{`Created At : ${createdAt}`}</p>
      </div>
      <div
        className="bg-white p-2 rounded-full cursor-pointer"
        onClick={() => navigate(`${id}`)}
      >
        <FiLogOut className="w-6 h-6 text-gray-800" />
      </div>
    </div>
  );
};

export default HistoryCard;
