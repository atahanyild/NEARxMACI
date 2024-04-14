"use client";

export default function LoadingComp() {
  console.log("LoadingComp");
  return (
    <div className=" flex h-screen items-end justify-end z-50 ">
      <div className="absolute bottom-0 right-0 flex items-end justify-end w-40 h-16 animate-pulse bg-[#131313] bg-opacity-50 rounded-tl-xl">
        <div className="relative">
          <div className="absolute bottom-3 right-16 font-semibold text-lg text-white">
            Voting...
          </div>
          <div className="absolute -bottom-8 -right-32">
            <iframe src="https://lottie.host/embed/9f809e9d-137e-4615-8491-faba74349fde/RtGrxRUQfH.json"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
