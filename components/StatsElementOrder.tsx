// *********************
// IN DEVELOPMENT
// *********************

import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const StatsElementOrder = () => {
  return (
    <div className="w-80 h-32 bg-[#441909] text-white flex flex-col justify-center items-center rounded-md max-md:w-full">
      <h4 className="text-xl text-white">New Orders</h4>
      <p className="text-2xl font-bold">1</p>
      <p className="text-green-300 flex gap-x-1 items-center">
        <FaArrowUp />
        50% Since last month
      </p>
    </div>
  );
};

export default StatsElementOrder;
