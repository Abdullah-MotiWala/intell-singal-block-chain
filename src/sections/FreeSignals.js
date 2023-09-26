import React from "react";

const FreeSignals = ({ handleRoute }) => {
  return (
    <div className="text-center bg-blue-600 p-10 mt-10 rounded-2xl shadow-lg md:mb-20 mb-0" data-aos="fade-up"
    data-aos-anchor-placement="top-center">
      <p className="text-2xl lg:text-5xl md:text-3xl font-black text-white mb-10">
        Free Crypto Signals Channel
      </p>
      <div className="flex flex-row justify-center flex-wrap gap-5 text-black">
        <p className="lg:text-2xl md:text-2xl text-xl font-bold">
          More than 50k members
        </p>
        <p className="text-2xl font-bold">•</p>
        <p className="text-2xl font-bold">Technical analysis</p>
        <p className="text-2xl font-bold">•</p>
        <p className="text-2xl font-bold">Up to 3 free signals weekly</p>
        <p className="text-2xl font-bold">•</p>
        <p className="text-2xl font-bold">Educational content</p>
      </div>
      <div className="mt-10">
        <button
          onClick={handleRoute}
          className="px-4 py-1 pr-10 overflow-hidden relative group cursor-pointer border-4 font-semibold text-[15px] border-white text-black  rounded-full  hover:scale-105 duration-[700ms]"
        >
          <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-cyan-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-white font-bold rounded-full transition duration-[700ms] group-hover:text-white ease">
            <div className="flex items-center">
              <div class="bg-white p-1 rounded-full mr-4" onClick={handleRoute}>
                <img
                  src="/img/telegram.png"
                  alt="ScreenImage"
                  class="w-6 h-6"
                />
              </div>
              <span>Join our Telegram</span>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FreeSignals;
