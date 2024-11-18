import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="relative grid sm:grid-cols-3 gap-8 max-w-7xl md:h-[70vh] mx-auto py-8 overflow-hidden"
      id="hero"
    >
      <img
        className="hidden md:block absolute z-[-1] w-[400px] bottom-0 left-[-170px]"
        src={assets.notebookL}
        alt=""
      />
      <img
        className="absolute z-[-1] w-[400px] -bottom-[200px] md:-bottom-[30px] md:left-[320px]"
        src={assets.notebookM}
        alt=""
      />
      <img
        className="absolute z-[-1] w-48 bottom-[380px] left-[200px]"
        src={assets.mobileR}
        alt=""
      />

      <div className="glass px-5 col-span-2 my-auto z-[-1] w-screen md:w-5/6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold p-4 md:p-0">
          <p className="md:my-3 text-gray-400">I&apos;m a</p>
          <TypeAnimation
            sequence={["Frontend Dev", 1000, "Webdesigner", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="my-6 sm:text-lg text-sm md:text-xl max-w-72 md:max-w-[600px] mx-auto ml-1 text-gray-300 font-bold">
          My name is Son, I graduated from <br /> Thu Dau Mot University
        </p>
      </div>

      <div className="absolute md:relative bottom-0 right-0 md:right-[100px] w-[150px] md:w-[500px] overflow-hidden">
        <img
          src={assets.profilepic}
          alt=""
          className="md:absolute bottom-0 right-0 w-[150px] md:w-[600px] h-full"
        />
        <div className="hidden md:flex flex-col gap-10 mt-2 w-full h-full items-end right-0">
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 h-20 rounded-full w-1/5"></div>
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 h-20 rounded-full w-2/5"></div>
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 h-20 rounded-full w-3/5"></div>
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 h-20 rounded-full w-4/5"></div>
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 h-20 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
