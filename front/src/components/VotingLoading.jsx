"use client";

export default function LoadingComp() {
  console.log("LoadingComp");

  return (
    <div className="fixed inset-x-0 bottom-0 flex items-end justify-end z-50">
      <div className="flex w-40 h-16 animate-pulse bg-[#131313] bg-opacity-50 rounded-tl-xl">
        <div className="relative">
          <div className="absolute bottom-3 -right-24 font-semibold text-lg text-white">
            Voting..
          </div>
          <div className="absolute -bottom-8 -right-52">
            <iframe
              src="https://lottie.host/embed/9f809e9d-137e-4615-8491-faba74349fde/RtGrxRUQfH.json"
              style={{ width: "160px", height: "160px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
