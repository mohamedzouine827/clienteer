import Logo from "./Assets/Logo";
import { FC } from "react";

interface IndexProps { }

const Navbar: FC<IndexProps> = () => {
  return (
    <div className="h-20 px-[120px] py-2.5 flex flex-row justify-center items-center gap-16 inline-flex">


      <div className="w-[188px] h-6 justify-between items-center inline-flex">
        <div className="text-zinc-500 text-base font-medium ">Home</div>
        <div className="text-zinc-500 text-base font-medium ">Briefs</div>
      </div>
      <Logo />
      <div className="w-[188px] h-6 justify-between items-center inline-flex">
    <div className="text-zinc-500 text-base font-medium ">Support</div>
    <div className="text-zinc-500 text-base font-medium ">Social</div>
</div>
    </div>
  );
};

export default Navbar;
