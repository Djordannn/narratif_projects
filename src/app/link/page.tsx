import Image from "../../../node_modules/next/image";
import logo from "/public/image/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Link = () => {
  return (
    <div className="text-center py-14 mb-[6rem]">
      <div className="mb-16">
        <Image src={logo} alt="img" className="w-[100px] mx-auto" />
        <h1 className="mt-2 text-lg">narratif apparel</h1>
      </div>
      <div className="w-[60%] mx-auto">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="flex items-center gap-4 bg-[#eeee] py-3 px-6 shadow-lg">
            <a href="#" className="text-xl">
              official shoope
            </a>
            <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
              <IoCartOutline />
            </p>
          </li>
          <li className="flex items-center gap-4 bg-[#eeee] py-3 px-6 shadow-lg">
            <a href="#" className="text-xl">
              consul jersey
            </a>
            <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
              <FaWhatsapp />
            </p>
          </li>
          <li className="flex items-center gap-4 bg-[#eeee] py-3 px-6 shadow-lg">
            <a href="#" className="text-xl">
              custom jersey
            </a>
            <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
              <FaWhatsapp />
            </p>
          </li>
          <li className="flex items-center gap-4 bg-[#eeee] py-3 px-6 shadow-lg">
            <a href="#" className="text-xl">
              tiktok
            </a>
            <p className="text-2xl bg-[#2d2d2d] p-3 text-white">
              <FaTiktok />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Link;
