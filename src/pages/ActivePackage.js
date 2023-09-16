import React from "react";
import TopBar from "../components/shared/TopBar";
import { useSelector } from "react-redux";

const ActivePackage = () => {
  const {
    user: { user }
  } = useSelector((state) => state.user);

  return (
    <div className="">
      <TopBar />
      <div className="bg-white h-[70vh] overflow-y-auto mt-4 rounded-md flex flex-col items-center justify-center">
        <div className="relative py-4 flex flex-col bg-gradient-to-r from-orange-400 to-red-500  rounded-xl shadow-2xl w-3/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in mx-6">
          <div className="flex justify-around ">
            <p className="font-bold text-gray-800 text-4xl">Basic</p>
            
            <h3 className="text-white text-4xl font-bold ">Free</h3>
          </div>

          <div className="flex flex-col mx-6 pb-2 ">
            <div className="border-b py-5">
              <p className="text-white">The perfect solution to try out</p>
            </div>
            <div className="border-b py-5">
              <div className="flex">
                <p className="text-white font-bold">Number of days</p>
                <p className="text-white ml-auto font-semibold">1</p>
              </div>
              <div className="flex">
                <p className="text-white font-semibold">Number of Signals</p>
                <p className="text-white ml-auto font-bold">1</p>
              </div>
            </div>
            <div className="py-5">
              <ul className="list-none list-outside text-white text-sm">
                <li>1 Free Signal per day</li>
                <li>
                  Perfect for beginners and those looking to dip their toes into
                  crypto trading.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePackage;
