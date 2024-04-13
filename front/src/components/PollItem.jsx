import React from "react";

import Image from "next/image";

const PollItem = ({ poll }) => {
  return (
    <div className="relative overflow-hidden">
      <Image src={poll?.image} width={400} height={250} alt="image" />
      <div
        className={`absolute top-0 right-0 z-20 ${
          poll?.status === "active" ? "bg-green-800" : "bg-red-800"
        } bg-green-800 w-28 h-12 bg-opacity-30 rounded-bl-lg `}
      >
        <div className="text-white px-2 py-1 text-xs">Remaining:</div>
        <div className="text-white font-semibold text-md pb-4 pl-2">
          {poll?.end_date}
        </div>
      </div>
      <div className="text-lg font-normal mx-2 my-2 text-white overflow-hidden text-ellipsis whitespace-nowrap">
        {poll?.name}
      </div>
      <div className="text-xs font-normal mx-2 my-2 text-white overflow-x-hidden text-ellipsis whitespace-nowrap">
        {poll?.description}
      </div>
    </div>
  );
};

export default PollItem;
