import { Poppins } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import Category from './Category';
import BriefBlock from './BriefBlock';
import Footer from '../Footer';
import Link from 'next/link';
import { DesignId } from '@/db/schema';
import { db } from '@/db/db';
import { eq } from 'drizzle-orm';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "400", "300", "600", "500", "700", "800", "900"], // Specify the weights you want to use
  });




  
interface IDT {
  id: number; // Changed from Number to number
  Design: string;
}

interface DesignArticle {
  DesignId: number; // serial (auto-incrementing integer)
  DesignTypeID: string; // integer, not null
  User: string; // text, not null
  Description: string; // text, not null
  Overview: string; // text, not null
  Objectives: string; // text, not null
  Budget: number; // integer, not null
  Audience: string; // text, not null
  key: string; // text, not null
  Timeline: string; // text, not null
}

export default function SearchBar() {
  const [designs, setDesigns] = useState<DesignArticle[]>([])
  const DeisgnType = [
    {
      id : 1,
      key : "ui",
    },
    {
      id : 2,
      key : "ux"
    },
    {
      id : 3,
      key : "Logo"
    },
    {
      id : 4,
      key : "Web"
    },
    {
      id : 5,
      key : "Graphic"
    },
  ]

  const getData = async () => {
    const result = await db.select().from(DesignId)
  
    console.log(result);

    setDesigns(result)

  };

  useEffect(() => {
    getData(); // Fetch data on mount
  }, []);

  return (
    <section className={poppins.className} >
        <div className='w-full py-24 px-[120px] 2xl:px-[304px] '>
          <div className='flex flex-col gap-[48px]'>
            <div className='flex-col justify-start items-start gap-8 inline-flex'>
            <h1 className='font-bold text-zinc-950 text-[32px]'>
            Explore Briefs
            </h1>
            <Category/>
            </div>
            <div className='flex flex-col gap-16'>
            <div className='flex flex-row  gap-8 '>
              
            {
              designs.map((item) => (
                <Link key={item.DesignId} href={`/Clienteer/${DeisgnType[item.DesignTypeID].key}/${item.DesignId}`}>
                <BriefBlock key={item.DesignId} Description={item.Description} Name={item.User} DesignTypeId={DeisgnType[item.DesignTypeID].key} />
              
                </Link>))
            }


            </div>

            </div>
            
            
            </div>

        </div>
        <Footer bg='#FFFBEB'/>
    </section>
  )
}
