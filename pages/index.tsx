import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import WhatSection from "./_components/WhatSection";
import HowTo from "./_components/HowTo";
import Footer from "./_components/Footer";

// Define the Poppins font, optionally specify weights, styles, etc.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "600", "500", "700", "800", "900"], // Specify the weights you want to use
});

export default function Home() {
  return (
    <section className={poppins.className}>
      <div className="flex justify-center items-center overflow-hidden">
        <Navbar />

      </div>
      <div className="overflow-hidden">
      <HeroSection />
      <WhatSection/>
      <HowTo/>
      <Footer/>
      </div>
    </section>
  );
}
