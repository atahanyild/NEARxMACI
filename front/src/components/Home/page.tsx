import React from "react";

const Home = () => {
  return (
    <div className=" mt-[100px]  flex justify-center items-center">
      <div className="w-[91%]">
        <div className="flex gap-2 justify-start items-center font-semibold text-xl">
          Active Poles
          <div className="bg-green-500 font-bold w-4 h-4 rounded-full"></div>
        </div>
        <div className="flex gap-2 justify-start items-center font-semibold text-xl">
          Inactive Poles
          <div className="bg-red-500 font-bold w-4 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
