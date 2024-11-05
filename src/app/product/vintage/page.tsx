"use client";

import React from "react";
import Link from "../../../../node_modules/next/link";
import Image from "../../../../node_modules/next/image";
import imgCard from "/public/image/blue.png";
import imgBanner from "/public/image/photo.jpeg";

const data = [
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgCard,
  },
];

const Product = () => {
  const newData = data.map((value, index) => {
    return (
      <div key={index}>
        <Image
          src={value.imgUrl}
          alt="imgCard2.jpg"
          className="w-[100%] h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]"
        />
        <div className="mt-2">
          <h2 className="text-xl font-thin">{value.title}</h2>
          <p className="text-xl">
            {value.price.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="pb-[36px] mx-[5%]">
      <div className="mb-[3rem] relative">
        <Image
          src={imgBanner}
          alt="img"
          className="w-[100%] h-[250px] object-cover object-center"
        />
        <h1 className="absolute bottom-[1rem] left-[1.5rem] text-3xl text-white tracking-wider">
          Vintage
        </h1>
      </div>
      <div className="flex gap-4 justify-between">
        <div className="w-[20%]">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/product">T-Shirt</Link>
            </li>
            <li>
              <Link href="/jersey">jersey</Link>
            </li>
            <li>
              <Link href="#">vintage</Link>
            </li>
            <li>
              <Link href="#">school sport</Link>
            </li>
            <li>
              <Link href="#">varsity jacket</Link>
            </li>
          </ul>
        </div>
        <div className="w-[80%]">
          <div className="grid grid-cols-4 gap-4">{newData}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
