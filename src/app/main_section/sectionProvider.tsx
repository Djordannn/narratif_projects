"use client";

import Image from "../../../node_modules/next/image";
import img from "/public/image/img-prov.jpg";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { VscJersey } from "react-icons/vsc";
import { TbRosetteDiscountCheck } from "react-icons/tb";

export default function Sectionprov() {
  return (
    <div className="py-14 md:py-24 mx-[5%] animation">
      {/* <h2 className="text-2xl font-semibold">provider</h2> */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-7 mt-5">
        <div className="img-provider md:w-[50%] relative">
          <Image
            src={img}
            alt="img"
            className="bg-auto w-[100%] h-[450px] md:h-[550px] lg:h-[500px] object-cover object-top"
          />
        </div>
        <div className="text-provider md:w-[50%] px-3">
          <h3 className="text-lg mb-3">available on you</h3>
          <h2 className="text-4xl font-thin">provider example</h2>
          <p className="mt-2">
            as a beginner of our brand, we are proud to join the custom
            sportswear brand to be a part of your story.
          </p>
          <ul className="py-10 flex flex-col gap-3">
            <li className="flex items-center gap-4 mb-3 text-2xl">
              <HiOutlinePencilSquare />
              <p>100% pattern design available</p>
            </li>
            <li className="flex items-center gap-4 mb-3 text-2xl">
              <VscJersey />
              <p>free costum jersey</p>
            </li>
            <li className="flex items-center gap-4 mb-3 text-2xl">
              <TbRosetteDiscountCheck />
              <p>free consul with owner</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
