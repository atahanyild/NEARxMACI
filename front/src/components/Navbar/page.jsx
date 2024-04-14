"use client";
import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Icon from "@/assets/icon.svg";
import Nevo from "@/assets/ETHDAM NEVO-5.png";

import { Wallet } from "@/services/near-wallet";

const Navbar = ({ wallet, isSignedIn }) => {
  const router = useRouter();
  const signIn = () => {
    wallet.signIn();
  };
  const signOut = () => {
    wallet.signOut();
  };
  return (
    <div className="bg-white h-[70px] border-b-2  border-[#F0F0F1] flex justify-center items-center">
      <div className="w-full h-full pl-24 flex justify-between items-center">
        <div>
          <button
            className="-ml-36 mb-11 flex justify-center items-center"
            onClick={() => router.push("/")}
          >
            <Image src={Nevo} width={400} height={400} alt="nevo" />
          </button>
        </div>
        <div className="h-full">
          {isSignedIn ? (
            <button
              className="h-full text-black px-12 py-2 font-medium border-[#F0F0F1] border-l-[1.5px] hover:bg-[#F0F0F1]"
              onClick={signOut}
            >
              Disconnect {wallet.accountId}
            </button>
          ) : (
            <button
              onClick={signIn}
              className="h-full text-black px-12 py-2 font-medium border-[#F0F0F1] border-l-[1.5px] hover:bg-[#F0F0F1]"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  wallet: PropTypes.instanceOf(Wallet),
  isSignedIn: PropTypes.bool.isRequired,
};

export default Navbar;
