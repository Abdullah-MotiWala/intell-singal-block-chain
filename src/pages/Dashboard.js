import React from "react";
import TopBar from "../components/shared/TopBar";
import { useSelector } from "react-redux";

const PACKAGE_LINKS = {
  free: "https://t.me/IntellSignal",
  premium: "https://t.me/Intellsig_premium",
  vip: "https://t.me/Intellsignals_VIP"
};
const Dashboard = () => {
  const {
    user: { user }
  } = useSelector((state) => state.user);

  return (
    <div className="">
      <TopBar />
      <div className="bg-white h-[70vh] overflow-y-auto mt-4 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to the Dashboard
        </h1>
        <a
          href={`${PACKAGE_LINKS[user?.purchased_plan?.type]}`}
          target="_blank"
          className="button panel-primary-bg rounded-xl text-white font-bold p-4"
        >
          Go To Channel
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
