import React from "react";
import HistoryCard from "../components/PanelComponents/HistoryCard";

const History = () => {
  const tempData = [
    { name: "CodeZone", status: false, createdAt: "Wed Dec 21 2022", id: 1 },
    { name: "TizemTech", status: true, createdAt: "Wed Jan 23 2024", id: 2 }
  ];
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold panel-primary-text">
          Packages History
        </h2>
        <select
          onChange={(e) => {
            alert(`Filter Updated : ${e.target.value}`);
          }}
          name="filter"
          defaultValue={"all"}
          className="block w-32 px-4 py-2 pr-8 leading-5 text-gray-700 border rounded-lg appearance-none focus:outline-transparent open:outline-transparent active:outline-transparent"
          style={{ width: "8rem" }}
        >
          <option value={"all"}>All</option>
          <option value={"active"}>Active</option>
          <option value={"expired"}>Expired</option>
        </select>
      </div>
      <div className="bg-white h-[80vh] overflow-y-auto mt-4 rounded-md p-2">
        {tempData.map((pkg) => (
          <HistoryCard data={pkg} />
        ))}
      </div>
    </div>
  );
};

export default History;
