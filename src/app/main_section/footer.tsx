"use client";
import { AiOutlineMail } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import logo from "/public/image/logo.png";

const Footer = () => {
  return (
    <div className="footer py-20 bg-[#2d2d2d] text-[#eeee] px-[5%] font-thin">
      <div className="text-center flex flex-col gap-5">
        <div>
          <Image
            src={logo}
            alt="img"
            className="w-[100px] mx-auto bg-[#ffff] p-5 rounded-lg"
          />
          <p className="mt-8 w-[80%] md:w-[50%] mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            quis expedita, quasi at iusto earum nisi molestiae eum veniam unde?
          </p>
        </div>
        <div className="flex gap-4 text-2xl justify-center">
          <RxInstagramLogo />
          <FaWhatsapp />
          <AiOutlineMail />
          <IoLocationOutline />
        </div>
        <div>
          <ul className="flex gap-5 justify-center">
            <li>
              <Link href="#">home</Link>
            </li>
            <li>
              <Link href="#">blog</Link>
            </li>
            <li>
              <Link href="#">product</Link>
            </li>
            <li>
              <Link href="#">contact</Link>
            </li>
          </ul>
        </div>
        <hr className="mt-5" />
        <div>
          <h3>copyright Company all right reserved</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
