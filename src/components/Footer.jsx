import { Link } from "react-scroll";
import { toast } from "react-toastify";

const Footer = () => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("trinhngcson@gmail.com").then(() => {
      toast.success("Copied");
    });
  };
  return (
    <div className="glass max-w-7xl p-8 flex justify-between mx-auto my-6">
      <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text hover:cursor-pointer">
        <Link to="home" spy={true} offset={50} duration={500}>
          SON TRINH
        </Link>
      </span>
      <p className="text-gray-500 ">
        Phone: 0345940564
        <br />
        <span onClick={handleCopyToClipboard} className="hover:cursor-pointer">
          trinhngcson@gmail.com
        </span>
        <br /> #webDev2024
      </p>
    </div>
  );
};

export default Footer;
