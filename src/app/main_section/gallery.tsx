"use cient";

import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import img from "/public/image/satria3.jpg";
import img2 from "/public/image/satria.jpg";
import img3 from "/public/image/ladaPapat.jpg";
import img4 from "/public/image/ladaPapat2.jpg";

const Gallery = () => {
  return (
    <div className="py-14 md:py-24 mx-[5%]">
      <div className="text-center animation">
        <h2 className="text-3xl">gallery</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">our gallery is full of stories</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 row-auto gap-4 mt-12 animation">
        <div className="md:col-span-2">
          <Image
            src={img}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
        <div className="">
          <Image
            src={img3}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
        <div className="">
          <Image
            src={img2}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
        <div className="md:col-span-2">
          <Image
            src={img4}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
      </div>
      <div className="mt-[4rem]">
        <Link href="gallery" className="py-4 px-7 bg-[#2d2d2d] text-white">
          more gallery
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
