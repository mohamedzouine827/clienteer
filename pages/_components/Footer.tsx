import { FC } from "react";
import FooterLogo from "./Assets/FooterLogo";
interface IndexProps { }


const Footer: FC<IndexProps> = () => {
    return (
        <div>
            <div className="w-full max-w-[1920px] px-8 md:px-8 lg:px-[120px] 2xl:px-[304px] py-8 md:py-16 lg:py-24 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12">
                <FooterLogo/>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                    <div className="text-zinc-500 text-sm md:text-base font-medium ">Home</div>
                    <div className="text-zinc-500 text-sm md:text-base font-medium ">Briefs</div>
                    <div className="text-zinc-500 text-sm md:text-base font-medium ">Support</div>
                    <div className="text-zinc-500 text-sm md:text-base font-medium ">Socials</div>
                </div>
                <div className="text-zinc-500 text-xs md:text-sm font-medium  text-center md:text-left">All Rights reserved to CLIENTEER ©</div>
            </div>
        </div>
    )
}

export default Footer