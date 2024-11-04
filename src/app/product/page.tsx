"use client";
import React from "react";
import Image from "../../../node_modules/next/image";
import imgCard from "/public/image/blue.png";

const Product = () => {
  return (
    <div className="py-14">
      <div className="mb-[6rem] text-center">
        <h1 className="text-4xl uppercase font-bold">product</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="mx-[5%] flex gap-4 justify-between">
        <div className="w-[20%]">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">T-Shirt</a>
            </li>
            <li>
              <a href="#">jersey</a>
            </li>
            <li>
              <a href="#">vintage</a>
            </li>
            <li>
              <a href="#">school sport</a>
            </li>
            <li>
              <a href="#">varsity jacket</a>
            </li>
          </ul>
        </div>
        <div className="content w-[80%] h-[900px]">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Image
                src={imgCard}
                alt="imgCard2.jpg"
                className="w-[100%] h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]"
              />
              <div className="mt-2">
                <h2 className="text-xl font-thin">name</h2>
                <p className="text-xl">$99.00</p>
              </div>
            </div>
            <div>
              <Image
                src={imgCard}
                alt="imgCard2.jpg"
                className="w-[100%] h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]"
              />
              <div className="mt-2">
                <h2 className="text-xl font-thin">name</h2>
                <p className="text-xl">$99.00</p>
              </div>
            </div>
            <div>
              <Image
                src={imgCard}
                alt="imgCard2.jpg"
                className="w-[100%] h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]"
              />
              <div className="mt-2">
                <h2 className="text-xl font-thin">name</h2>
                <p className="text-xl">$99.00</p>
              </div>
            </div>
            <div>
              <Image
                src={imgCard}
                alt="imgCard2.jpg"
                className="w-[100%] h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]"
              />
              <div className="mt-2">
                <h2 className="text-xl font-thin">name</h2>
                <p className="text-xl">$99.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
