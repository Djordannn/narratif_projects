"use client";

import React from "react";
import Image from "../../../../node_modules/next/image";
import imgCard from "/public/image/blue.png";

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

const Vintage = () => {
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
    <div>
      <div className="grid grid-cols-4 gap-4">{newData}</div>
    </div>
  );
};

export default Vintage;
