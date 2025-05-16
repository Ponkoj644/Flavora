
import React from "react";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import OurJourney from "@/components/OurJourney";
import SignatureDishes from "@/components/SignatureDishes";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery";
import FlavoraVibes from "@/components/FlavoraVibes";


export default function Home() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <OurJourney />
      <SignatureDishes />
      <Testimonial />
      <Gallery />
      <FlavoraVibes />
    </>
  );
}
