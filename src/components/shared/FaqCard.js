import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";

const FaqCard = ({
  question,
  answer,
  setActiveIndex,
  handleSetIndex,
  i,
  activeIndex
}) => {
  return (
    <div
      className="bg-white rounded-lg  w-4/5 shadow-lg hover:shadow-2xl group gap-8"
      onMouseLeave={() => setActiveIndex()}
      onMouseEnter={() => handleSetIndex(i)}
    >
      <div className="flex justify-between items-center my-3  px-4 sm:px-8 h-10 cursor-pointer">
        <h3 className="lg:text-xl md:text-xl sm:text-xl text-xs  pb-2 text-black font-semibold">{question}</h3>
        <div className="text-3xl group-hover:rotate-180 transition duration-1500 ml-auto">
          {/* Right Icon */}
          <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  group-hover:border-yellow-400 group-hover:text-yellow-400 " />
        </div>
      </div>
      <div
        x-ref="tab"
        className={`border-l-2 rounded-bl-md border-yellow-500 dark:border-none overflow-hidden duration-[1500ms] transition-all ${
          activeIndex === i ? "max-h-[500px]" : "max-h-0 "
        }`}
      >
        <p className=" px-4 sm:px-8 py-2  p-3 custom-caption-text text-gray-800">
          {answer}
        </p>
      </div>    
    </div>
  );
};

export default FaqCard;
