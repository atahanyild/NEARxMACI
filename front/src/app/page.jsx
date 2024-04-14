"use client";
import React, { useState, useEffect } from "react";

import Navbar from "@/components/Navbar/page";
import Home from "@/components/Home/page";
import { Wallet } from "@/services/near-wallet";

// CONSTANTS
const MPC_CONTRACT = "multichain-testnet-2.testnet";

// NEAR WALLET
const wallet = new Wallet({
  network: "testnet",
  createAccessKeyFor: MPC_CONTRACT,
});

const NavLayout = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const initFunction = async () => {
      const isSignedIn = await wallet.startUp();
      setIsSignedIn(isSignedIn);
    };

    initFunction();
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-white">
      <div className="fixed transition-all top-0 left-0 w-full z-50">
        <Navbar wallet={wallet} isSignedIn={isSignedIn} />
      </div>
      <div className="relative min-h-screen flex-1 pl-[50px] w-full bg-white">
        <Home />
      </div>
    </div>
  );
};

export default NavLayout;
