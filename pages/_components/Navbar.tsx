'use client'
import Link from "next/link";
import Logo from "./Assets/Logo";
import { FC } from "react";
import { usePathname } from 'next/navigation'


interface IndexProps {}

const Navbar: FC<IndexProps> = () => {
  const pathname = usePathname();
  return (
    <div className="h-20 px-[16px] py-2.5 gap-12 flex flex-row md:gap-12 justify-between items-center md:px-[32px] xl:px-[120px] 2xl:px-[304px]">
      {/* Left Elements for Desktop */}
      <div className="hidden lg:flex flex-grow justify-start items-center gap-8">
        <Link href="/">
        <div className="text-zinc-500 hover:text-zinc-700 transition-all cursor-pointer duration-150 text-base font-medium mr-4">Home</div>
        </Link>
        <Link href="/Clienteer">
        <div className={`text-zinc-500 hover:text-zinc-700 transition-all cursor-pointer duration-150 ${pathname === "/Clienteer" ?  '' : "animate-pulse" } text-base font-medium`}>Briefs</div>
        </Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center w-full">
        <Logo />
      </div>

      {/* Right Elements for Desktop */}
      <div className="hidden lg:flex flex-grow justify-end items-center gap-8">
        <div className="text-zinc-500 text-base hover:text-zinc-700 transition-all cursor-pointer *:duration-150 font-medium mr-4">Support</div>
        <div className="text-zinc-500 text-base hover:text-zinc-700 cursor-pointer transition-all duration-150 font-medium">Social</div>
      </div>

      {/* Elements for Tablet */}
      <div className="hidden sm:flex lg:hidden flex-grow gap-4 justify-between items-center">
        <div className="text-zinc-500 text-base hover:text-zinc-700 transition-all cursor-pointer duration-150 font-medium">Home</div>
        <div className="text-zinc-500 text-base hover:text-zinc-700 transition-all cursor-pointer duration-150 font-medium">Briefs</div>
        <div className="text-zinc-500 text-base hover:text-zinc-700 transition-all cursor-pointer duration-150 font-medium">Support</div>
        <div className="text-zinc-500 text-base hover:text-zinc-700 transition-all cursor-pointer duration-150 font-medium">Social</div>
      </div>
    </div>
  );
};

export default Navbar;
