import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div
      className="glass-nav flex h-24 px-8 md:backdrop-blur-xl text-gray-300 max-w-7xl justify-between items-center mx-auto"
      id="home"
    >
      <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text hover:cursor-pointer">
        SON TRINH
      </h1>
      <ul className="hidden md:flex gap-6 text-xl hover:cursor-pointer">
        <li>
          <Link to="home" spy={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        className="block md:hidden text-gray-300 fixed right-10 top-10 z-50"
        onClick={handleShowNav}
      >
        {showNav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          showNav
            ? "text-gray-300 z-40 left-0 fixed top-0 w-full bg-[#232323] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-8 text-4xl ml-20 z-10">
          <li className="p-2">
            <Link to="home" spy={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link to="about" spy={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="p-2">
            <Link to="work" spy={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="p-2">
            <Link to="contact" spy={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
