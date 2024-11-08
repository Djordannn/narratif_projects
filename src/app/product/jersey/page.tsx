"use client";

import React from "react";
import Image from "../../../../node_modules/next/image";
import tennis from "/public/image/tennis.png";
import boxing from "/public/image/boxing.png";
import boxing2 from "/public/image/boxingWhite.png";
import boxing3 from "/public/image/boxing2.png";
import uns from "/public/image/uns.png";
import undip from "/public/image/undip.png";

const data = [
  {
    title: "name",
    price: 99000,
    imgUrl: tennis,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: boxing,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: boxing2,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: boxing3,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: uns,
  },
  {
    title: "name",
    price: 99000,
    imgUrl: undip,
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {newData}
      </div>
    </div>
  );
};

export default Jersey;
