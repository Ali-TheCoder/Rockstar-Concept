const FeaturedGames = () => {
  return (
    <section className="w-full px-20 ">
      <h2 className="font-semibold text-3xl text-white mb-10">
        Featured Games
      </h2>
      <div className="flex items-center justify-between mb-12">
        <img
          src="/Assets/Images/Games cards 1.svg"
          className="w-[22%] border border-white rounded-md cursor-pointer"
        />
        <img
          src="/Assets/Images/Games cards 2.svg"
          className="w-[22%] border border-white rounded-md cursor-pointer"
        />
        <img
          src="/Assets/Images/Games cards 3.svg"
          className="w-[22%] border border-white rounded-md cursor-pointer"
        />
        <img
          src="/Assets/Images/Games cards 4.svg"
          className="w-[22%] border border-white rounded-md cursor-pointer"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="text-white border-b-2 border-b-[#FCAF17] px-4 py-1">
          View More
        </button>
      </div>
    </section>
  );
};

export default FeaturedGames;
