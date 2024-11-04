"use client";

import Image from "../../../node_modules/next/image";
// import Img from "/public/image/img-about.webp";

const Sectionabout = () => {
  return (
    <div id="sectionAbout" className="mx-[5%] animation hidden md:block">
      <div className="py-[84px]">
        {/* <div className="w-[50%]">
          <Image
            src={Img}
            alt="img-about"
            className="w-[100%] h-[550px] object-cover object-top"
          />
        </div> */}
        <div className="w-[70%] mx-auto text-center">
          <h1 className="text-4xl">
            we are present <br />
            for your story
          </h1>
          {/* <div className="border-about h-1 mt-5 w-[30%] rounded-sm"></div> */}
          <p className="mt-3 text-center text-sm">
            everyone has a memorable moment in every corner of their life, the
            clothes/clothes you wear become one of the objects to remember that
            moment. Narratif Apparel is committed to being a friend in every
            moment of yours. which realizes custom apparel so that later it will
            become a separate story for the wearer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectionabout;
