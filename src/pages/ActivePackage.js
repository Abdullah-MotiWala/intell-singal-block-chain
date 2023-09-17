import React from "react";
import TopBar from "../components/shared/TopBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allPlans, {
  Plan1,
  Plan2,
  Plan3,
  Plan4,
  Plan5
} from "../components/shared/PlanCollections";

const ActivePackage = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="">
      {String(user?.purchased_plan) && <TopBar />}
      <div className="bg-white h-[70vh] overflow-y-auto mt-4 rounded-md flex flex-col items-center justify-center">
        {(user?.purchased_plan === null ||
          user?.purchased_plan === undefined) && (
          <>
            {" "}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              No Plan Found
            </h1>
            <Link
              to={"/"}
              className="button panel-primary-bg rounded-xl text-white font-bold p-4"
            >
              Buy Plan
            </Link>
          </>
        )}
        {user?.purchased_plan == 0 && <Plan1 />}
        {user?.purchased_plan == 1 && <Plan2 />}
        {user?.purchased_plan == 2 && <Plan3 />}
        {user?.purchased_plan == 3 && <Plan4 />}
        {user?.purchased_plan == 4 && <Plan5 />}
      </div>
    </div>
  );
};

export default ActivePackage;
