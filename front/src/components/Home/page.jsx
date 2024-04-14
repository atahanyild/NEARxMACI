import React from "react";

import { MdOutlineHowToVote } from "react-icons/md";
import { useRouter } from "next/navigation";

import PollItem from "@/components/PollItem";

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
    end_date: "2024-04-14 13:00",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 3",
    description: "Pole 3 description",
    status: "active",
    _id: "3",
    end_date: "2024-04-14 11:58",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 4",
    description: "Pole 4 description",
    status: "active",
    _id: "4",
    end_date: "2024-04-14 11:50",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 5",
    description: "Pole 5 description",
    status: "active",
    _id: "5",
    end_date: "2024-04-14 11:40",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 6",
    description: "Pole 6 description",
    status: "active",
    _id: "6",
    end_date: "2024-04-14 12:00",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 7",
    description: "Pole 7 description",
    status: "active",
    _id: "7",
    end_date: "2024-04-14 11:25",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 8",
    description: "Pole 8 description",
    status: "active",
    _id: "8",
    end_date: "2024-04-14 13:25",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 9",
    description: "Pole 9 description",
    status: "active",
    _id: "9",
    end_date: "2024-04-14 13:45",
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
    status: "pasive",
    _id: "2",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 13",
    description: "Pole 3 description",
    status: "pasive",
    _id: "3",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 14",
    description: "Pole 4 description",
    status: "pasive",
    _id: "4",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 15",
    description: "Pole 5 description",
    status: "pasive",
    _id: "5",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 16",
    description: "Pole 6 description",
    status: "pasive",
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
    status: "pasive",
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

const Home = () => {
  const router = useRouter();
  return (
    <div className=" mt-[100px]  flex justify-center items-center">
      <div className="w-[91%]">
        <div className="flex gap-2 justify-start items-center font-semibold text-xl">
          Active Poles
          <iframe
            src="https://lottie.host/embed/d897027b-3ab3-42e9-807b-7e918580218c/rPM2M1Rwiv.json"
            height={50}
            width={50}
          ></iframe>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full mt-4 grid grid-cols-4 gap-2 overflow-y-auto noscrollbar overflow-x-hidden justify-center items-center mb-10">
            {dummyData?.map((poll, index) => {
              if (poll.status === "active") {
                return (
                  <div
                    key={index}
                    className="relative w-68 h-68 flex bg-[#18181B] rounded-lg shadow-md p-3 items-center justify-center cursor-pointer"
                    onClick={() => router.push(`/${poll._id}`)}
                  >
                    <PollItem poll={poll} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <MdOutlineHowToVote className="text-white text-3xl" />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="flex gap-2 justify-start items-center font-semibold text-xl">
          Inactive Poles
          <iframe
            src="https://lottie.host/embed/3007237f-82d5-465b-a62a-e88824a39e90/2qRTusUZHc.json"
            height={50}
            width={50}
          ></iframe>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <div className="mt-4 grid grid-cols-4 gap-2 overflow-y-auto noscrollbar overflow-x-hidden justify-center items-center mb-10">
            {dummyData?.map((poll, index) => {
              if (poll.status === "pasive") {
                return (
                  <div
                    key={index}
                    className="relative min-w-68 min-h-68 max-h-68 max-w-68 flex bg-[#18181B] rounded-lg shadow-md p-3 items-center justify-center cursor-pointer"
                    onClick={() => router.push(`/${poll._id}`)}
                  >
                    <PollItem poll={poll} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <MdOutlineHowToVote className="text-white text-3xl" />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
