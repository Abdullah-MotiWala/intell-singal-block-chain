import React from "react";

const PlanCard = ({
  handleClick,
  selectedPackage,
  loading,
  isPurchased = false
}) => {
  return (
    <div
      className={`relative py-4 flex flex-col bg-gradient-to-r ${
        !isPurchased && "w-3/4 md:w-1/3"
      } from-orange-400 to-red-500  rounded-xl shadow-2xl opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in mx-6`}
    >
      <div className="flex flex-col  w-full  mx-6  ">
        <p className="font-bold">{selectedPackage.type}</p>
        <h3 className="text-white text-4xl font-bold ">
          {selectedPackage.price ? `$${selectedPackage.price}` : "Free"}
        </h3>
      </div>

      <div className="flex flex-col mx-6 pb-2 ">
        <div className="border-b py-5">
          <p className="text-white">{selectedPackage.description}</p>
        </div>
        <div className="border-b py-5">
          <div className="flex">
            <p className="text-white font-semibold">Number of Signals</p>
            <p className="text-white ml-auto font-bold">
              {selectedPackage.numOfSignals}
            </p>
          </div>
          <div className="flex">
            <p className="text-white font-bold">Number of days</p>
            <p className="text-white ml-auto font-semibold">
              {selectedPackage.numOfDays}
            </p>
          </div>
        </div>
        <div className="py-5">
          <ul className="list-none list-outside text-white text-sm">
            {selectedPackage.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      {handleClick && (
        <div className="mt-auto  flex justify-center">
          <button
            className=" w-3/4 py-2 border-2 font-semibold text-white rounded-full hover:bg-gray-100 hover:text-[#102b59] transition duration-300"
            onClick={handleClick}
          >
            {loading ? "Loading..." : "Buy Now"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
