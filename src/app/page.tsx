import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import Footer from "@/components/Footer";
import OurJourney from "@/components/OurJourney";
import SignatureDishes from "@/components/SignatureDishes";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <MenuPreview />
      <OurJourney />
      <SignatureDishes />
      {/* <Footer /> */}
    </>
  );
}
