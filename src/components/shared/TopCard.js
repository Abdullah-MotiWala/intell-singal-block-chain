import React from "react";

const TopCard = ({ title, caption }) => {
  return (
    <div className="panel-primary-bg h-24 p-4 rounded flex flex-col items-center my-2 w-[250px] md:w-full">
      <p className="font-light text-white text-lg ">{title}</p>
      <p className="font-bold text-white text-md">{caption}</p>
    </div>
  );
};

export default TopCard;
