"use client";

import React from "react";
import Image from "../../../../node_modules/next/image";
import imgCard from "/public/image/blue.png";
import img2 from "/public/image/green.png";

const data = [
  {
    title: "name",
    price: 99000,
    imgUrl: img2,
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
    imgUrl: img2,
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

const Jersey = () => {
  const newData = data.map((value, index) => {
    return (
      <div key={index}>
        <Image
          src={value.imgUrl}
          alt="imgCard2.jpg"
          className="w-[100%] h-[230px] md:h-[300px] bg-[#eeee] object-contain pb-7 lg:h-[250px]"
        />
        <div className="mt-2">
          <h2 className="md:text-xl font-thin">{value.title}</h2>
          <p className="md:text-xl">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{newData}</div>
    </div>
  );
};

export default Jersey;
