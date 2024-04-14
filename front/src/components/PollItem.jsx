import React, { useState, useEffect } from "react";

import Image from "next/image";

const PollItem = ({ poll }) => {
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

  return (
    <div className="relative overflow-hidden">
      <Image src={poll?.image} width={400} height={250} alt="image" />
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
      <div className="text-lg font-normal mx-2 my-2 text-white overflow-hidden text-ellipsis whitespace-nowrap">
        {poll?.name}
      </div>
      <div className="text-xs font-normal mx-2 my-2 text-white overflow-x-hidden text-ellipsis whitespace-nowrap">
        {poll?.description}
      </div>
    </div>
  );
};

export default PollItem;
