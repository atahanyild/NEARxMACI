import React from "react";

import Image from "next/image";

const PollItem = ({ poll }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-68 ">
        <Image src={poll?.image} width={54} height={54} alt="image" />
        <p className="xl:text-md md:text-sm text-xs font-normal text-white overflow-hidden text-ellipsis whitespace-nowrap">
          {poll?.name}
        </p>
      </div>
    </div>
  );
};

export default PollItem;
