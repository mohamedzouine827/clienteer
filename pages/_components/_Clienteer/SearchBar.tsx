import { Poppins } from 'next/font/google';
import React from 'react'
import Category from './Category';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "400", "300", "600", "500", "700", "800", "900"], // Specify the weights you want to use
  });
  

export default function SearchBar() {
  return (
    <section className={poppins.className} >
        <div className='w-full py-24 px-[120px] 2xl:px-[304px] '>
            <div className='flex-col justify-start items-start gap-12 inline-flex'>
            <h1 className='font-bold text-zinc-950 text-[32px]'>
            Explore Briefs
            </h1>
            <Category/>
            </div>
            

        </div>
    </section>
  )
}
