const Newswire = () => {
  return (
    <section className="w-full px-20 ">
      <h2 className="font-semibold text-3xl text-white">Newswire</h2>
      <div className="flex flex-wrap items-center justify-between w-full mb-12">
        <div className="w-[28%] flex flex-col rounded-lg border border-white mt-[3%]">
          <img className="w-full h-auto" src="/Assets/Images/Photo.svg" />
          <div className="p-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-[#D9D9D9] text-sm">Grand Theft Auto VI</p>
              <p className="text-xs text-[#B3B3B3]">December 5, 2023</p>
            </div>
            <h2 className="text-white text-xl">
              Grand Theft Auto VI - Watch Trailer <br /> 1 Now
            </h2>
          </div>
        </div>
        <div className="w-[28%] flex flex-col rounded-lg border border-white mt-[3%]">
          <img className="w-full h-auto" src="/Assets/Images/Photo (1).svg" />
          <div className="p-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-[#D9D9D9] text-sm">Rockstar Games</p>
              <p className="text-xs text-[#B3B3B3]">December 1, 2023</p>
            </div>
            <h2 className="text-white text-xl">
              TRAILER 1. TUESDAY, DECEMBER 5. 9AM ET.
            </h2>
          </div>
        </div>
        <div className="w-[28%] flex flex-col rounded-lg border border-white mt-[3%]">
          <img className="w-full h-auto" src="/Assets/Images/Photo (2).svg" />
          <div className="p-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-[#D9D9D9] text-sm">GTA Online</p>
              <p className="text-xs text-[#B3B3B3]">November 30, 2023</p>
            </div>
            <h2 className="text-white text-xl">
              New GTA Online Update Coming this December
            </h2>
          </div>
        </div>
        <div className="w-[28%] flex flex-col rounded-lg border border-white mt-[3%]">
          <img className="w-full h-auto" src="/Assets/Images/Photo (3).svg" />
          <div className="p-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-[#D9D9D9] text-sm">GTA Online</p>
              <p className="text-xs text-[#B3B3B3]">November 30, 2023</p>
            </div>
            <h2 className="text-white text-xl">
              2X GTA$ and RP on Project Overthrow Missions
            </h2>
          </div>
        </div>
        <div className="w-[28%] flex flex-col rounded-lg border border-white mt-[3%]">
          <img className="w-full h-auto" src="/Assets/Images/Photo (4).svg" />
          <div className="p-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-[#D9D9D9] text-sm">Grand Theft Auto VI</p>
              <p className="text-xs text-[#B3B3B3]">November 28, 2023</p>
            </div>
            <h2 className="text-white text-xl">
              New Rockstar Games Gear Now Available
            </h2>
          </div>
        </div>
        <div className="w-[28%] flex flex-col rounded-lg border border-white mt-[3%]">
          <img className="w-full h-auto" src="/Assets/Images/Photo (5).svg" />
          <div className="p-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <p className="text-[#D9D9D9] text-sm">GTA Online</p>
              <p className="text-xs text-[#B3B3B3]">November 23, 2023</p>
            </div>
            <h2 className="text-white text-xl">
              Cash in on Bonuses in Casino Story Missions, The Diamond Casino
              ...
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="text-white border-b-2 border-b-[#FCAF17] px-4 py-1">
          View More
        </button>
      </div>
    </section>
  );
};

export default Newswire;
