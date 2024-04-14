"use client";
import React, { useEffect, useState, useMemo } from "react";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Accordion, AccordionItem } from "@nextui-org/react";

import Navbar from "@/components/Navbar/page";
import { Wallet } from "@/services/near-wallet";
import LoadingComp from "@/components/VotingLoading";

const dummyData = [
  {
    name: "Boden or Tremp",
    description:
      "Which memetoken has better community? VOTE for your choice. Boden or Tremp. Who will WIN?",
    status: "active",
    _id: "1",
    end_date: "2024-04-14 13:00",
    image: "/WhatsApp Image 2024-04-14 at 11.47.35.jpeg",
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
const options = [
  { name: "Option 1", percentage: 75 },
  { name: "Option 2", percentage: 50 },
  { name: "Option 3", percentage: 25 },
  { name: "Option 4", percentage: 85 },
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
  const [selectedOption, setSelectedOption] = useState("");

  const [canRegister, setCanRegister] = useState(false);
  const [canVote, setCanVote] = useState(false);

  const [voteCount, setVoteCount] = useState([
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
  ]);

  const [isVoted, setIsVoted] = useState(false);
  const [voteLoading, setVoteLoading] = useState(false);

  const sum = useMemo(() => {
    const toplam = voteCount.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return voteCount.map((vc) => (vc ? (vc / toplam) * 100 : 0));
  }, [voteCount]);

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
    <div className="flex flex-1 bg-white h-screen overflow-hidden overflow-x-hidden">
      <div className="fixed transition-all top-0 left-0 w-full z-50">
        <Navbar wallet={wallet} isSignedIn={isSignedIn} />
      </div>
      <div className="w-1/4 min-h-screen max-h-screen bg-[#ababab] overflow-x-hidden">
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
          <div className="text-xl font-bold mx-4 my-4 text-white overflow-hidden text-ellipsis whitespace-nowrap ">
            {poll?.name}
          </div>
          <p className="w-[95%] border border-bottom border-[#dadada] mt-2 mr-20 ml-2 opacity-50"></p>
          <div className="text-sm font-normal mx-4 my-4 text-white ">
            {poll?.description}
          </div>
        </div>
      </div>
      <div className="w-full flex-1 bg-white h-full mt-[100px] gap-4 ml-20 overflow-hidden">
        <div>
          <div className="text-2xl text-black font-semibold tacking-[1.28px] mb-8">
            Hangisi Kazanır?
          </div>
          <ul>
            {options.map((option, index) => (
              <li
                key={option.name}
                onClick={() => setSelectedOption(option.name)}
                className={`transition-all w-[95%] h-[50px] relative  text-black border border-[#e6e6e6] font-semibold text-lg mt-2 ${
                  !isVoted &&
                  (selectedOption === option.name
                    ? "bg-[#cecece]"
                    : " hover:bg-[#e6e6e6]")
                }`}
              >
                <p className="z-10 absolute top-1/2 -translate-y-1/2 left-5">
                  {option.name}
                </p>
                {isVoted && (
                  <p className="z-10 absolute top-1/2 -translate-y-1/2 right-5">
                    {voteCount[index]}
                  </p>
                )}
                {isVoted && (
                  <div
                    style={{ width: `${sum[index]}%` }}
                    className={` absolute top-0 left-0 h-full flex  pl-4  items-center bg-[#e6e6e6]`}
                  ></div>
                )}
              </li>
            ))}
          </ul>
          <button className="w-[95%] h-[50px] bg-[#131313] text-white font-semibold text-lg mt-6">
            Generate MACI Wallet
          </button>
          <button
            disabled={!canRegister}
            className="disabled:opacity-40 w-[95%] h-[50px] bg-[#131313] text-white font-semibold text-lg mt-6"
          >
            Register to Vote
          </button>
          <button
            disabled={!canVote}
            onClick={() => {
              setVoteLoading(true);
              setTimeout(() => {
                setVoteLoading(false);
                setIsVoted(true);
              }, 3000);

              const newVoteCount = [...voteCount];
              const index = options.findIndex((i) => i.name === selectedOption);
              console.log(index);
              newVoteCount[index] = voteCount[index] + 1;
              setVoteCount(newVoteCount);
            }}
            className="disabled:opacity-40 w-[95%] h-[50px] bg-[#131313] text-white font-semibold text-lg mt-6"
          >
            {voteLoading && "Voting"}
            {!voteLoading && isVoted && "Voted"}
            {!voteLoading && !isVoted && "Vote"}
          </button>
          {voteLoading && <LoadingComp />}
        </div>
      </div>
    </div>
  );
};

export default Vote;
