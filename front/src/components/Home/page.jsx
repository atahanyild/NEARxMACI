import React from "react";

import PollItem from "@/components/PollItem";

const dummyData = [
  {
    name: "Pole 1",
    description: "Pole 1 description",
    status: "active",
    _id: "1",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 2",
    description: "Pole 2 description",
    status: "active",
    _id: "2",
    end_date: "2022-12-12",
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
    status: "active",
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
    status: "active",
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
];
const dummyDataInactive = [
  {
    name: "Pole 1",
    description: "Pole 1 description",
    status: "active",
    _id: "1",
    end_date: "2022-12-12",
    image: "https://picsum.photos/536/354",
  },
  {
    name: "Pole 2",
    description: "Pole 2 description",
    status: "active",
    _id: "2",
    end_date: "2022-12-12",
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
    status: "active",
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
    status: "active",
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
];

const Home = () => {
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

        <div className="flex flex-col justify-start items-start w-full">
          <div className="mt-4 grid grid-cols-4 gap-2 overflow-y-auto noscrollbar overflow-x-hidden justify-center items-center mb-10">
            {dummyData?.map(
              (
                poll,
                index // Add the type annotation for poll
              ) => (
                <div
                  key={index}
                  className="relative flex bg-[#18181B] rounded-lg shadow-md p-3 items-center justify-center cursor-pointer"
                  onClick={() => console.log("clicked")}
                >
                  <PollItem poll={poll} />
                </div>
              )
            )}
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
            {dummyDataInactive?.map((poll, index) => (
              <div
                key={index}
                className="relative flex bg-[#18181B] rounded-lg shadow-md p-3 items-center justify-center cursor-pointer"
                onClick={() => console.log("clicked")}
              >
                <PollItem poll={poll} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
