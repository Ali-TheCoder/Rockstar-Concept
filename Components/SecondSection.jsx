import FeaturedGames from "./FeaturedGames";
import Footer from "./Footer";
import GrandTheftAuto from "./GrandTheftAuto";
import Newswire from "./Newswire";

const SecondSection = () => {
  return (
    <section className="bg-[#1a1a1a] bg-opacity-70 w-full h-fit relative">
      <img
        src="/Assets/Images/Background Photo.png"
        className="w-full h-auto relative z-[0]"
      />
      <div className="w-full h-full bg-[#1a1a1a] bg-opacity-70 absolute z-[1] left-0 top-0 pt-24  flex flex-col items-center justify-between">
        <Newswire />
        <GrandTheftAuto />
        <FeaturedGames />
        <Footer />
      </div>
    </section>
  );
};

export default SecondSection;
