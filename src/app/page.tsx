"use client";

import Cardshirt from "@/app/main_section/cardShirt";
import Jumbotron from "@/app/main_section/jumbotron";
import Sectionabout from "./main_section/sectionAbout";
import Sectionprov from "@/app/main_section/sectionProvider";
import CardProduct from "@/app/main_section/cardProduct";
import Gallery from "@/app/main_section/gallery";
import Review from "@/app/main_section/review";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Sectionabout />
      <Cardshirt />
      <Sectionprov />
      <CardProduct />
      <Gallery />
      <Review />
    </div>
  );
}
