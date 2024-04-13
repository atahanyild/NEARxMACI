import React from "react";

import Image from "next/image";

import Icon from "@/assets/icon.svg";
import Logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white h-[70px] border border-bottom border-[#F0F0F1] flex justify-center items-center">
      <div className="w-[85%] flex justify-between items-center">
        <div>
          <div className="md:hidden">
            <Image src={Icon} width={54} height={54} alt="icon" />
          </div>
          <div className="hidden md:block">
            <Image src={Logo} width={140} height={140} alt="logo" />
          </div>
        </div>
        <div>
          <button className="bg-[#1B1B1B] rounded-3xl text-white px-5 py-2 font-normal">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
