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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface IProduct {
//   name: string;
//   price: number;
//   imgUrl: string;
// }

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
      <CarouselItem key={index} className="basis-[29%] flex-shrink-0">
        <Card className="w-[100%]">
          <CardHeader className="bg-[#eeee]">
            <Image
              src={value.imgUrl}
              alt="img"
              className="w-[100%] object-contain pb-[1.5rem] md:pb-[2.7rem] xl:h-[330px] 2xl:pb-[2.5rem] 2xl:h-[360px]"
            />
          </CardHeader>
          <CardContent>
            <div className="mt-2">
              <CardTitle className="text-md md:text-lg">{value.name}</CardTitle>
              <p className="text-lg md:text-xl">
                {value.price.toLocaleString("id", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    );
  });

  return (
    <div className="py-16 md:py-24 mb-[4rem] mx-[5%]">
      <div className="text-center animation">
        <h2 className="text-3xl">popular products</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">we present products with the best quality</p>
      </div>
      <Carousel className="py-12">
        <CarouselContent className="flex w-[100%] gap-1">
          {newDataProduct}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>

      <div>
        <Link href="product" className="py-4 px-7 bg-[#2d2d2d] text-white">
          more products
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
