"use client";
import React from "react";
import Image from "../../../node_modules/next/image";
import img from "/public/image/ladaPapat.jpg";
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

const Gallery = () => {
  return (
    <div className="pt-14 pb-24">
      <div className="mb-[6rem] text-center">
        <h1 className="text-4xl uppercase font-bold">gallery</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[5%]">
        <Image
          src={img}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img2}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img8}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img10}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img5}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img8}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img13}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img3}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img7}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img4}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img6}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img5}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img9}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img11}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
        <Image
          src={img12}
          alt="img"
          className="w-[100%] object-cover h-[400px]"
        />
      </div>
    </div>
  );
};

export default Gallery;
