import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { packageData } from "../shared/PlanCollections";

const HistoryCard = ({ data: { name, purchased_at, plan_id, id } }) => {
  const navigate = useNavigate();
  return (
    <div className="h-24 bg-gray-100 mb-2 rounded-lg p-4 flex justify-between items-center">
      <div className="text-gray-800">
        <p>{`Name : ${name}`}</p>
        <p>{`Package : ${packageData[plan_id]?.name}`} </p>
        <p>{`Purchased At : ${new Date(purchased_at).toDateString()}`}</p>
      </div>
      {/* <div
        className="bg-white p-2 rounded-full cursor-pointer"
        onClick={() => navigate(`${id}`)}
      >
        <FiLogOut className="w-6 h-6 text-gray-800" />
      </div> */}
    </div>
  );
};

export default HistoryCard;
