"use client";

import Cardshirt from "@/app/main_section/cardShirt";
import Jumbotron from "@/app/main_section/jumbotron";
import Sectionabout from "@/app/main_section/SectionAbout";
import Sectionprov from "@/app/main_section/sectionProvider";
import Banner from "@/app/main_section/banner";
import CardProduct from "@/app/main_section/cardProduct";
import Gallery from "@/app/main_section/gallery";
import Review from "@/app/main_section/review";
import Footer from "@/app/main_section/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
