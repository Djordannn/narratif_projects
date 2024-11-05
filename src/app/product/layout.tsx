import React, { ReactNode } from "react";
import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import imgBanner from "/public/image/photo.jpeg";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div>
      <div className="pb-[36px] mx-[5%]">
        <div className="mb-[3rem] relative">
          <Image
            src={imgBanner}
            alt="img"
            className="w-[100%] h-[250px] object-cover object-center"
          />
          <h1 className="absolute bottom-[1rem] left-[1.5rem] text-3xl text-white tracking-wider">
            Product
          </h1>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="w-[20%]">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/product/t_shirt">T-Shirt</Link>
              </li>
              <li>
                <Link href="/product/jersey">jersey</Link>
              </li>
              <li>
                <Link href="/product/vintage">vintage</Link>
              </li>
              <li>
                <Link href="#">school sport</Link>
              </li>
              <li>
                <Link href="#">varsity jacket</Link>
              </li>
            </ul>
          </div>
          <div className="w-[80%]">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
