import React from "react";

const OurTrader = ({ handleRoute }) => {
  return (
    <div className="flex justify-center items-center h-screen mt-24 mb-48 bg-black text-white">
      <div className="text-center bg-white p-10 mt-10">
        <p className="text-2xl lg:text-5xl md:text-3xl font-black text-blue-950 mb-10 capitalize ">
          Our Trader have been scouted from trading floor based all over the
          world
        </p>
        <p className="lg:text-2xl md:text-2xl text-xl capitalize font-semibold text-[#333333]">
          we send full technial analysis with every trade, see examples of our
          trades below
        </p>
        <div>
          <img src="/img/our-trader.svg" alt="" />
        </div>
        <p className="text-xl capitalize font-semibold text-[#333333]">
          You can join the free VIP Group with the click
        </p>
        <p className="text-xl capitalize font-semibold text-[#333333]">
          of a button to see examples of our trades
        </p>

        <div className="mt-10">
          {/* <button className="px-4 py-1 pr-10 overflow-hidden relative group cursor-pointer border-4 font-semibold text-[15px] border-white text-black  rounded-full  hover:scale-105 duration-[700ms]">
          <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-cyan-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-white font-bold rounded-full transition duration-[700ms] group-hover:text-white ease">
            <div className="flex items-center">
              <div class="bg-white p-1 rounded-full mr-4">
                <img
                  src="/img/telegram.png"
                  alt="ScreenImage"
                  class="w-6 h-6"
                />
              </div>
              <span>Join our Telegram</span>
            </div>
          </span>
        </button> */}
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
