"use client";

import React, { useRef } from "react";
import Image from "../../../node_modules/next/image";
import img from "/public/image/imgMain.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const imgJumbotron = [
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img,
    link: "product",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img,
    link: "blog",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img,
    link: "#",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: img,
    link: "#",
  },
];
const Jumbotron = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const newImgJumbotron = imgJumbotron.map((value, index) => {
    return (
      <CarouselItem key={index} className="w-[100%] m-0 p-0">
        <div className="relative w-[100%]">
          <a href={value.link}>
            <Image
              src={value.imgUrl}
              alt="img"
              className="w-[100%] ml-4  h-[250px] md:h-[500px] 2xl:h-[600px] object-cover object-top"
            />
            {/* <div className="absolute left-8 bottom-5 md:left-16 md:bottom-10 text-white flex flex-col gap-3">
              <h1 className="text-5xl font-semibold tracking-wide">
                {value.title}
              </h1>
              <p className="w-[80%]">{value.text}</p>
            </div> */}
          </a>
        </div>
      </CarouselItem>
    );
  });
  return (
    <div className="relative">
      <Carousel
        plugins={[autoplay.current]}
        // options={{ loop: true, containScroll: "trimSnaps" }}
        className="w-[100%]"
      >
        <CarouselContent className="w-[100%]">
          {newImgJumbotron}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Jumbotron;
