"use client";
import React from "react";

import Navbar from "@/components/Navbar/page";
import Home from "@/components/Home/page";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <div className="fixed transition-all top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="relative min-h-screen flex-1 pl-[50px] w-full bg-white">
        <Home />
      </div>
    </div>
  );
};

export default NavLayout;
