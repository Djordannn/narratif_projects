"use client";

import Cardshirt from "@/app/main_section/cardShirt";
import Jumbotron from "@/app/main_section/jumbotron";
import Sectionabout from "./main_section/sectionAbout";
import CardProduct from "@/app/main_section/cardProduct";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Sectionabout />
      <Cardshirt />
      <CardProduct />
    </div>
  );
}
