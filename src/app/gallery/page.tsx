"use client";

import React from "react";
import Image from "../../../node_modules/next/image";
import img1 from "/public/image/ladaPapat.jpg";
import img2 from "/public/image/satria.jpg";
import img3 from "/public/image/paskib.jpg";
import img4 from "/public/image/pati.webp";
import img5 from "/public/image/pati2.webp";
import img6 from "/public/image/pati3.webp";
import img7 from "/public/image/runner2.jpg";
import img8 from "/public/image/paskib2.jpg";
import img9 from "/public/image/satria2.jpg";
import img10 from "/public/image/satria4.jpg";
import img11 from "/public/image/pati4.webp";
import img12 from "/public/image/hopeful.jpg";
import img13 from "/public/image/ladaPapat2.jpg";

const data = [
  {
    imgUrl: img1,
  },
  {
    imgUrl: img2,
  },
  {
    imgUrl: img3,
  },
  {
    imgUrl: img4,
  },
  {
    imgUrl: img5,
  },
  {
    imgUrl: img6,
  },
  {
    imgUrl: img7,
  },
  {
    imgUrl: img8,
  },
  {
    imgUrl: img9,
  },
  {
    imgUrl: img10,
  },
  {
    imgUrl: img11,
  },
  {
    imgUrl: img12,
  },
  {
    imgUrl: img13,
  },
];

const Gallery = () => {
  const newData = data.map((value, index) => {
    return (
      <div key={index}>
        <Image
          src={value.imgUrl}
          alt="img"
          className="w-[100%] object-cover h-[200px] md:h-[400px] 2xl:h-[500px]"
        />
      </div>
    );
  });
  return (
    <div className="pt-8 md:pt-14 pb-24">
      <div className="mb-[3rem] md:mb-[6rem] text-center">
        <h1 className="text-4xl uppercase font-bold">gallery</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-[5%]">
        {newData}
      </div>
    </div>
  );
};

export default Gallery;
