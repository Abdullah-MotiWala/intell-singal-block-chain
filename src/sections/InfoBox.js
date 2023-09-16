import React from "react";

const InfoBox = () => {
  return (
    <div className="text-center bg-slate-100 p-10  w-full -mt-10">
      <p className="text-2xl lg:text-3xl md:text-2xl font-black ">
        how to hire data engineer developers
      </p>
      <p className="text-2xl lg:text-3xl md:text-2xl font-black  text-red-400">
        with code zone
      </p>
      <p className="text-lg mb-10">
        a meticulous process for impeccable product lunch without any delays 
      </p>
      <div className="flex flex-row justify-center flex-wrap gap-10 text-white mb-20">
        <div className="bg-white shadow-2xl w-24 h-16 rounded-none">
            <img src="/img/ab-img.png" alt="" />
            <p  className="text-black  capitalize" >we catch up</p>
        </div>
        <div className="bg-white shadow-2xl w-24 h-24 rounded-none">
            <img src="/img/ab-img.png" alt="" />
            <p  className="text-black  capitalize " >you amaze up with your ideas</p>
        </div>
        <div className="bg-white shadow-2xl w-24 h-24 rounded-none">
            <img src="/img/ab-img.png" alt="" />
            <p  className="text-black  capitalize " >oh yes me matched</p>
        </div>
        <div className="bg-white shadow-2xl w-24 h-24 rounded-none">
            <img src="/img/ab-img.png" alt="" />
            <p  className="text-black  capitalize " >some brainstorming</p>
        </div>
      </div>
      
    </div>
  );
};

export default InfoBox;
