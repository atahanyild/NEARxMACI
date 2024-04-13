import React from "react";

import Image from "next/image";

import Icon from "@/assets/icon.svg";
import Logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white h-[70px] border-b-2  border-[#F0F0F1] flex justify-center items-center">
      <div className="w-full h-full pl-8 flex justify-between items-center">
        <div>
          <div className="md:hidden">
            <Image src={Icon} width={54} height={54} alt="icon" />
          </div>
          <div className="hidden md:block">
            <Image src={Logo} width={140} height={140} alt="logo" />
          </div>
        </div>
        <div className="h-full">
          <button className="h-full text-black px-8 py-2 font-medium border-[#F0F0F1] border-l-[1.5px] hover:bg-[#F0F0F1]">
            Polls
          </button>
          <button className="h-full text-black px-8 py-2 font-medium border-[#F0F0F1] border-l-[1.5px] hover:bg-[#F0F0F1]">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
