import React from "react";
import TopBar from "../components/shared/TopBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PACKAGE_LINKS = [
  "https://t.me/IntellSignal",
  "https://t.me/Intellsignals_VIP",
  "https://t.me/Intellsignals_VIP",
  "https://t.me/Intellsig_premium",
  "https://t.me/Intellsig_premium"
];
const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="">
      <TopBar />
      <div className="bg-white h-[70vh] overflow-y-auto mt-4 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to the Dashboard
        </h1>
        {user?.purchased_plan === null && (
          <Link
            to={"/"}
            className="button panel-primary-bg rounded-xl text-white font-bold p-4"
          >
            Buy Plan
          </Link>
        )}
        {String(user?.purchased_plan) && user?.purchased_plan !== null && (
          <a
            href={`${PACKAGE_LINKS[Number(user?.purchased_plan)]}`}
            target="_blank"
            className="button panel-primary-bg rounded-xl text-white font-bold p-4"
          >
            Go To Channel
          </a>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
