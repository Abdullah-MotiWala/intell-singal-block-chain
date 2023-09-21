import React from "react";

const OurTrader = ({ handleRoute }) => {
  return (
    <div className="flex justify-center items-center h-screen mt-24 mb-48 bg-black text-white">
      <div className="text-center bg-white p-10 mt-10">
        <p className="text-xl lg:text-4xl md:text-3xl font-black text-blue-950 mb-10 capitalize ">
          Our Trader have been scouted from trading floor based all over the
          world
        </p>
        <p className="lg:text-xl md:text-xl sm:text-xl text-lg capitalize font-semibold text-[#333333]">
          we send full technial analysis with every trade, see examples of our
          trades below
        </p>
        <div>
          <img src="/img/our-trader.svg" alt="" />
        </div>
        <p className="lg:text-xl md:text-xl sm:text-xl text-lg capitalize font-semibold text-[#333333]">
          You can join the free VIP Group with the click
        </p>
        <p className="lg:text-xl md:text-xl sm:text-xl text-lg capitalize font-semibold text-[#333333]">
          of a button to see examples of our trades
        </p>

        <div className="mt-10">
          <button
            onClick={handleRoute}
            className="bg-blue-950 uppercase text-white  rounded-full px-6 py-4 font-bold"
          >
            join our free telegram
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTrader;
