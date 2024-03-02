import Image from "next/image";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="h-fit w-full relative flex flex-col items-center justify-between">
      <Navbar />
      <img
        src="/Assets/Images/Hero Photo.svg"
        alt="VI"
        // className="object-cover"
        className="select-none w-full hight-auto relative z-0 top-0 left-0"
      />
      <Image
        src="/Assets/Images/VI Icon.svg"
        width={100}
        height={100}
        alt="VI"
        className="cursor-pointer absolute z-1 bottom-[2%]"
      />
    </div>
  );
};

export default Landing;
