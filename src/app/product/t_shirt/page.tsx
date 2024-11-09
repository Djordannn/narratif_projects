"use client";

import React from "react";
import Image from "../../../../node_modules/next/image";
import imgBlue from "/public/image/blue.png";
import imgRed from "/public/image/red.png";
import imgGreen from "/public/image/green.png";
import imgWhite from "/public/image/white.png";
import imgBlack from "/public/image/black.png";
import imgGrey from "/public/image/grey.png";

const data = [
  {
    title: "name",
    price: 99000,
    imgUrl: imgBlue,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgRed,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgGreen,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgWhite,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgBlack,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: imgGrey,
  },
];

const Tshirt = () => {
  const newData = data.map((value, index) => {
    return (
      <div key={index}>
        <Image
          src={value.imgUrl}
          alt="imgCard2.jpg"
          className="w-[100%] h-[200px] md:h-[180px] bg-[#eeee] object-contain pb-7 lg:h-[200px] xl:h-[250px] 2xl:h-[300px]"
        />
        <div className="mt-2">
          <h2 className="xl:text-xl font-thin">{value.title}</h2>
          <p className="xl:text-xl">
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

export default Tshirt;
