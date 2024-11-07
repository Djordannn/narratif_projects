import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import logo from "/public/image/logo.png";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="mx-[5%] py-5 md:py-8">
      <div id="navbar">
        <div className="navlist flex items-center justify-between">
          <Link href="/" className="logo flex items-center gap-2">
            <Image
              src={logo}
              alt="img"
              className="w-[100%] h-[30px] 2xl:h-[40px]"
            />
            <h2 className="text-xl font-semibold 2xl:text-2xl">narratif</h2>
          </Link>
          <ul className="hidden md:flex items-center gap-5 text-lg 2xl:text-2xl uppercase">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/product">product</Link>
            </li>
            <li>
              <Link href="/customJersey">custom jersey</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/gallery">gallery</Link>
            </li>
            <li>
              <Link href="/link">contact</Link>
            </li>
          </ul>
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <FaBars className="text-2xl" />
              </SheetTrigger>
              <SheetContent className="bg-[#fff]">
                <SheetHeader>
                  <div className="bg-[#eeee] py-6 mt-5">
                    <Image src={logo} alt="img" className="w-[80px] mx-auto" />
                    <h2 className="mt-2">narratif.apparel</h2>
                  </div>
                  <SheetDescription>
                    <ul className="text-left mt-3 flex flex-col gap-4 text-lg 2xl:text-2xl uppercase text-[#2d2d2d]">
                      <li>
                        <Link href="/">home</Link>
                      </li>
                      <li>
                        <Link href="/product">product</Link>
                      </li>
                      <li>
                        <Link href="/customJersey">custom jersey</Link>
                      </li>
                      <li>
                        <Link href="/blog">blog</Link>
                      </li>
                      <li>
                        <Link href="/gallery">gallery</Link>
                      </li>
                      <li>
                        <Link href="/link">contact</Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
