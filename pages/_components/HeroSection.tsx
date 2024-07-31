import Link from "next/link";
import { FC } from "react";

interface IndexProps {}

const HeroSection: FC<IndexProps> = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-64 py-12 md:py-24 bg-[#fffcf1] flex flex-col justify-start items-center  gap-12">
      <div className="flex flex-col justify-start items-center gap-4 ">
        <div className="text-center text-amber-800 text-3xl md:text-4xl lg:text-5xl font-semibold">
          “Unique Project Briefs for Designers”
        </div>
        <div className="w-full max-w-3xl text-center text-zinc-500 text-lg md:text-xl lg:text-2xl font-medium px-4">
          Unleash Your Design Potential with Tailored Challenges That Inspire Innovation and Creativity
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 ">
        <Link href="/Clienteer">
        <button className="w-[140px] hover:bg-[#92400e] hover:text-[#fef3c7] sm:w-[163px] transition-all duration-150 ease-in-out px-6 py-3 bg-amber-600 rounded-lg text-neutral-50 text-base  sm:text-lg font-medium">
          Get Started
        </button>
        </Link>
        <button className="w-[140px] sm:w-[163px] px-6 py-3 rounded-lg border border-zinc-600 text-[#0b090a]  text-base sm:text-lg font-medium">
          Socials
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
