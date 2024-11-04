"use client";

import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import logo from "/public/image/logo.png";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="mx-[5%] py-5 2xl:py-6">
      <div id="navbar">
        <div className="navlist flex items-center justify-between">
          <Link href="/" className="logo flex items-center gap-2">
            <Image
              src={logo}
              alt="img"
              className="w-[100%] h-[25px] 2xl:h-[40px]"
            />
            <h2 className="text-xl font-semibold 2xl:text-2xl">narratif</h2>
          </Link>
          <ul className=" hidden lg:flex items-center gap-5 text-lg 2xl:text-2xl sm:hidden">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="blog">blog</Link>
            </li>
            <li>
              <Link href="product">product</Link>
            </li>
            <li>
              <Link href="gallery">gallery</Link>
            </li>
            <li>
              <Link href="#">contact</Link>
            </li>
          </ul>
          <div className="lg:hidden md:block">
            <ul>
              <li className="text-2xl">
                <FaBars />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
