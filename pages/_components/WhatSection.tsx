import { FC } from "react";
interface IndexProps { }


const WhatSection: FC<IndexProps> = () => {
  return (
    <div>
        <div className="w-full px-[16px] 2xl:px-[304px] xl:px-[120px] md:px-[32px]  py-24 flex-col justify-start items-start gap-6 inline-flex">
    <div className="text-center text-zinc-950 text-[32px] font-bold ">What is CLIENTEER</div>
    <div className="self-stretch text-zinc-950 text-xl font-normal ">Clienteer is a cutting-edge project briefs generator, designed to elevate your creative process and expand your design horizons. Created by some of the world&apos;s top designers, Clienteer provides carefully crafted briefs that challenge and inspire. Whether you&apos;re seeking to refine your skills, explore new styles, or tackle unique design challenges, Clienteer offers a wealth of opportunities to grow and succeed.<br/>Experience the expertise of globally renowned designers, who contribute their knowledge and creativity to create briefs that push boundaries and spark innovation. With Clienteer, you&apos;re not just completing projects; you&apos;re engaging with a tool that helps you evolve as a designer, exploring diverse aesthetics and design philosophies. Join a community of passionate creators and take your design journey to the next level with Clienteer.</div>
        </div>
    </div>
  )
}

export default WhatSection