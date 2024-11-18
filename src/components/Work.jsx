import { assets } from "../assets/assets.js";

const Work = () => {
  const projects = [
    { id: 1, img: assets.proj1, title: "My portfolio", link: "/" },
    {
      id: 2,
      img: assets.proj2,
      title: "BG Removal",
      link: "https://bg-removal-fawn.vercel.app/",
    },
    {
      id: 3,
      img: assets.proj3,
      title: "Gemini Clone",
      link: "https://gemini-clone-lovat-omega.vercel.app/",
    },
    {
      id: 4,
      img: assets.proj4,
      title: "Pokédex",
      link: "https://not-poke-dex.netlify.app/",
    },
    {
      id: 5,
      img: assets.proj5,
      title: "Track your Caffeine",
      link: "https://track-ur-caffince.netlify.app/",
    },
    {
      id: 6,
      img: assets.proj6,
      title: "MERN Ecommerce",
      link: "https://github.com/trinhngcson/MERN-Shop",
    },
  ];
  return (
    <div
      className="max-w-7xl mx-auto grid grid-cols-2 gap-4 glass p-6"
      id="work"
    >
      <div className="col-span-2 my-4">
        <h1 className="text-4xl mb-4 text-gray-300">My Projects</h1>
      </div>
      {projects.map((item) => (
        <div
          key={item.id}
          className="glass transform transition-transform hover:scale-105 duration-300 overflow-hidden shadow-lg h-48 group relative"
        >
          <img className="w-full h-full object-cover" src={item.img} alt="" />
          <div className="flex flex-col justify-center items-center group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0">
            <span className="text-2xl font-bold text-white mb-4">
              {item.title}
            </span>
            <div>
              <a
                className="bg-white px-5 py-2 rounded-xl font-bold"
                href={item.link}
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
