"use client";

import React from "react";
import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import img1 from "/public/image/white.png";
import img2 from "/public/image/green.png";
import img3 from "/public/image/red.png";
import img4 from "/public/image/blue.png";
import img5 from "/public/image/black.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const dataProduct = [
  {
    name: "T-shirt white",
    price: 99000,
    imgUrl: img1,
  },
  {
    name: "T-shirt green",
    price: 99000,
    imgUrl: img2,
  },
  {
    name: "T-shirt red",
    price: 99000,
    imgUrl: img3,
  },
  {
    name: "T-shirt blue",
    price: 99000,
    imgUrl: img4,
  },
  {
    name: "T-shirt black",
    price: 99000,
    imgUrl: img5,
  },
];

const CardProduct = () => {
  const newDataProduct = dataProduct.map((value, index) => {
    return (
      <div key={index}>
        <div className="bg-[#eeee]">
          <Image
            src={value.imgUrl}
            alt="img"
            className="h-[200px] object-contain pb-9"
          />
        </div>
        <div className="mt-2">
          <h3>{value.name}</h3>
          <p>
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
    <div className="py-8 md:py-24 mb-[4rem] mx-[5%]">
      <div className="text-center animation">
        <h2 className="text-3xl">popular products</h2>
        <hr className="h-1 w-[20%] md:w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">we present products with the best quality</p>
      </div>
      <div className="grid mt-12 grid-cols-2 gap-4 md:hidden">
        {newDataProduct}
      </div>
      <div className="hidden md:block">
        <Carousel className="py-12">
          <CarouselContent className="flex w-full gap-2">
            {dataProduct.map((value, index) => (
              <CarouselItem key={index} className="basis-[29%] flex-shrink-0">
                <div className="bg-[#eeee]">
                  <Image
                    src={value.imgUrl}
                    alt="img"
                    width={400}
                    height={400}
                    className="w-full h-[320px] object-contain pb-10"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-lg">{value.name}</h3>
                  <p className="text-xl">
                    {value.price.toLocaleString("id", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>

        <div className="mt-5">
          <Link href="product" className="py-4 px-7 bg-[#2d2d2d] text-white">
            more products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
