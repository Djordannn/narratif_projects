import React, { ReactNode } from "react";
import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import imgBanner from "/public/image/photo.jpeg";
import Sidebar from "./sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div>
      <div className="pb-[36px] mx-[5%]">
        <div className="md:mb-[3rem] relative">
          <Image
            src={imgBanner}
            alt="img"
            className="w-[100%] h-[170px] md:h-[250px] object-cover object-center"
          />
          <h1 className="absolute bottom-[1rem] left-[1.5rem] text-xl md:text-3xl text-white tracking-wider">
            Product
          </h1>
        </div>
        <div className="md:hidden py-6 flex justify-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="T-Shirt" />
            </SelectTrigger>
            <SelectContent className="bg-[#eeee]">
              <Link href="/product/t_shirt">
                <SelectItem value="T-Shirt">T-Shirt</SelectItem>
              </Link>
              <Link href="/product/jersey">
                <SelectItem value="Jersey">Jersey</SelectItem>
              </Link>
              <Link href="/product/vintage">
                <SelectItem value="Vintage">Vintage</SelectItem>
              </Link>
              <Link href="/product/#">
                <SelectItem value="School Sport">School Sport</SelectItem>
              </Link>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4">
          <Sidebar />
          <div className="md:w-[80%]">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
