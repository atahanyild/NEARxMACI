"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </NextUIProvider>
  );
};
