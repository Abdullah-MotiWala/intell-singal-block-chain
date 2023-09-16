import React from "react";
import TopCard from "./TopCard";
import { useSelector } from "react-redux";

const TopBar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="flex gap-4 flex-col md:flex-row justify-between">
      <TopCard
        title={"Active Package"}
        caption={user?.purchased_plan?.name || "N/A"}
      />
      <TopCard title={"User Name"} caption={user?.name} />
      <TopCard title={"Expires In"} caption={"00:00:00:00"} />
    </div>
  );
};

export default TopBar;
