"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Accordion, AccordionItem } from "@nextui-org/react";

import Navbar from "@/components/Navbar/page";
import { Wallet } from "@/services/near-wallet";

const dummyData = [
  {
    name: "Pole 1",
    description:
      "Pole 1 descriptionasaudhe jdbhsfrkj dsfhrbevdk jlsadfhgr jkadshfrdg kahsjdegfrv sajkbhdefgr sdjfh ajkfshbr",
    status: "active",
    _id: "1",
    end_date: "2024-04-14 00:17",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 2",
    description: "Pole 2 description",
    status: "active",
    _id: "2",
    end_date: "2024-04-13 ",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 3",
    description: "Pole 3 description",
    status: "active",
    _id: "3",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 4",
    description: "Pole 4 description",
    status: "active",
    _id: "4",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 5",
    description: "Pole 5 description",
    status: "pasive",
    _id: "5",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 6",
    description: "Pole 6 description",
    status: "active",
    _id: "6",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 7",
    description: "Pole 7 description",
    status: "div",
    _id: "7",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 8",
    description: "Pole 8 description",
    status: "active",
    _id: "8",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 9",
    description: "Pole 9 description",
    status: "active",
    _id: "9",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 10",
    description: "Pole 1 description",
    status: "pasive",
    _id: "1",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 11",
    description: "Pole 2 description",
    status: "active",
    _id: "2",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 13",
    description: "Pole 3 description",
    status: "active",
    _id: "3",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 14",
    description: "Pole 4 description",
    status: "active",
    _id: "4",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 15",
    description: "Pole 5 description",
    status: "active",
    _id: "5",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 16",
    description: "Pole 6 description",
    status: "active",
    _id: "6",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 17",
    description: "Pole 7 description",
    status: "pasive",
    _id: "7",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 18",
    description: "Pole 8 description",
    status: "active",
    _id: "8",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 19",
    description: "Pole 9 description",
    status: "pasive",
    _id: "9",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
];

const MPC_CONTRACT = "multichain-testnet-2.testnet";

const wallet = new Wallet({
  network: "testnet",
  createAccessKeyFor: MPC_CONTRACT,
});

const Vote = () => {
  const params = useParams();
  const pollId = params.pollId;
  const poll = dummyData.find((p) => p.id === pollId);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date(poll.end_date);
      const now = new Date();
      const difference = endDate - now;

      let timeLeft = "";

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        if (days) {
          timeLeft = days + " days";
        } else {
          if (hours) {
            timeLeft = hours + " hours";
          } else {
            if (minutes) {
              timeLeft = minutes + " min " + seconds + " sec";
            } else {
              if (seconds) {
                timeLeft = seconds + " seconds";
              } else {
                timeLeft = "Poll ended";
              }
            }
          }
        }
      }
      if (difference <= 0) {
        timeLeft = "Poll ended";
      }

      setRemainingTime(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [poll.end_date]);

  useEffect(() => {
    const initFunction = async () => {
      const isSignedIn = await wallet.startUp();
      setIsSignedIn(isSignedIn);
    };

    initFunction();
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-white h-screen overflow-hidden">
      <div className="fixed transition-all top-0 left-0 w-full z-50">
        <Navbar wallet={wallet} isSignedIn={isSignedIn} />
      </div>
      <div className="w-1/4 min-h-screen max-h-screen flex-1 bg-[#ababab] ">
        <div className="relative overflow-hidden w-full flex flex-col justify-center mt-[90px]">
          <Image src={poll?.image} width={800} height={500} alt="image" />
          <div
            className={`absolute top-0 right-0 z-20 ${
              poll?.status === "active" ? "bg-green-800" : "bg-red-800"
            } bg-green-800 w-32 h-12 bg-opacity-40 rounded-bl-lg `}
          >
            <div className="text-white px-2 py-1 text-xs">Remaining:</div>
            <div className="text-white font-semibold text-sm pb-4 pl-2">
              {remainingTime}
            </div>
          </div>
          <div className="text-lg  mx-2 my-2 text-white overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            {poll?.name}
          </div>
          <p className="w-[95%] border border-bottom border-[#dadada] mt-2 mr-20 ml-2 opacity-50"></p>
          <div className="text-xs font-normal mx-2 my-2 text-white ">
            {poll?.description}
          </div>
        </div>
        <div>
          <Accordion className="text-black font-bold">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              Option 1
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              Option 2
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              Option 3
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Vote;