"use client";

import React from "react";
import Image from "../../../../node_modules/next/image";
import vintage from "/public/image/vintageRetor.png";
import vintage2 from "/public/image/vintage1453.png";
import vintage3 from "/public/image/vintagePuprl.png";
import vintage4 from "/public/image/vintageCyan.png";
import vintage5 from "/public/image/vintageBW.png";

const data = [
  {
    title: "name",
    price: 99000,
    imgUrl: vintage,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: vintage2,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: vintage3,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: vintage4,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: vintage5,
  },
];

const Vintage = () => {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {newData}
      </div>
    </div>
  );
};

export default Vintage;
