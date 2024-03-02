import { IoPlayCircleOutline } from "react-icons/io5";
const GrandTheftAuto = () => {
  return (
    <section className="px-20">
      <div className="w-full h-fit border-2 border-white p-10 flex items-center rounded-2xl">
        <img src="/Assets/Images/VI Icon (1).svg" alt="icon" />
        <div className="w-[50%] flex flex-col items-start justify-center gap-y-10">
          <h2 className="text-white font-semibold text-3xl">
            Grand Theft Auto VI
          </h2>
          <p className="text-white text-xl w-[75%]">
            Grand Theft Auto VI heads to the state of Leonida, home to the
            neon-soaked streets of Vice City and beyond in the biggest, most
            immersive evolution of the Grand Theft Auto series yet. Coming 2025
            to PlayStation 5 and Xbox Series X|S.
          </p>
          <button className="flex items-center justify-center gap-x-2 bg-[#FCAF17] py-1 px-5 rounded-md">
            Watch Trailer 1 <IoPlayCircleOutline className="mt-0.5 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrandTheftAuto;

//? This div below has gradient border but it's borderImage so you can't pass it border-radius. Find another solution!

/* <div
        style={{
          borderImage: "linear-gradient(to bottom,#E5AC8F,#E35FC2) 1/2/1 round",
        }}
        className="w-full h-full border-2 border-solid border-transparent rounded-2xl"
      ></div> */
