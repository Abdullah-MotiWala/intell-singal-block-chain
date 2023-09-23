import React from "react";
import HistoryCard from "../components/PanelComponents/HistoryCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const History = () => {
  const { user } = useSelector((state) => state.user);
  const tempData = [
    {
      name: user?.name,
      plan_id: user?.purchased_plan,
      purchased_at: user?.purchased_at,
      id: 1
    }
  ];
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold panel-primary-text">
          Packages History
        </h2>
        {/* <select
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
        </select> */}
      </div>
      <div className="bg-white h-[80vh] overflow-y-auto mt-4 rounded-md p-2">
        {(user?.purchased_plan === null ||
          user?.purchased_plan === undefined) && (
          <div className="w-full bg-pink flex flex-col text-center h-full justify-center items-center">
            {" "}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              No History Found
            </h1>
            <Link
              to={"/"}
              className="button panel-primary-bg rounded-xl text-white font-bold p-4"
            >
              Buy Plan
            </Link>
          </div>
        )}
        {(user?.purchased_plan !== null &&
          user?.purchased_plan !== undefined) &&
          tempData.map((pkg) => <HistoryCard data={pkg} />)}
      </div>
    </div>
  );
};

export default History;
