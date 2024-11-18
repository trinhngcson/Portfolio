import { assets } from "../assets/assets.js";
const About = () => {
  return (
    <div
      className="text-white gap-4 max-w-7xl mx-auto my-12 grid sm:grid-cols-3 "
      id="about"
    >
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">
            My UI projects is built with:
          </h2>
          <p className="text-gray-200 flex flex-row justify-between">
            <img src={assets.vite} alt="" className="h-10 w-10" />
            <img src={assets.react} alt="" className="h-10 w-10" />
            <img src={assets.html} alt="" className="h-10" />
            <img src={assets.css} alt="" className="h-10 w-10" />
            <img src={assets.js} alt="" className="h-10 w-10" />
            <img src={assets.tailwind} alt="" className="h-10 w-10" />
          </p>
        </div>
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img
          className="absolute w-48 md:w-[500px]"
          src={assets.notebookM}
          alt=""
        />
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img
          className="absolute w-48 md:w-[500px]"
          src={assets.mobileR}
          alt=""
        />
      </div>

      <div className="md:hidden relative overflow-hidden h-48 glass">
        <img className="absolute w-96" src={assets.notebookM} alt="" />
        <img className="absolute w-48 right-0" src={assets.mobileR} alt="" />
      </div>

      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">
            My BackEnd projects are built using:
          </h2>
          <p className="text-gray-200 flex flex-row justify-between">
            <img
              src={assets.nodejs}
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <img src={assets.express} alt="" className="h-10" />
            <img src={assets.mongoose} alt="" className="h-10" />
            <img src={assets.mongodb} alt="" className="h-10 hidden md:block" />
            <img src={assets.mongodbatlas} alt="" className="h-10" />
            <img
              src={assets.vercel}
              alt=""
              className="hidden md:block h-10 rounded-xl"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
