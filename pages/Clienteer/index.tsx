import React, { useEffect, useState } from 'react'
import Navbar from '../_components/Navbar'
import { Poppins } from "next/font/google";
import SearchBar from '../_components/_Clienteer/SearchBar';
import BriefBlock from '../_components/_Clienteer/BriefBlock';
import { db } from '@/db/db';
import { DesignId, DesignType } from '@/db/schema';
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
  DesignTypeID: number; // integer, not null
  User: string; // text, not null
  Description: string; // text, not null
  Overview: string; // text, not null
  Objectives: string; // text, not null
  Budget: number; // integer, not null
  Audience: string; // text, not null
  key: string; // text, not null
  Timeline: string; // text, not null
}


function Index() {

  const [designType, setDesignType] = useState<IDT[]>([]); // Initialize as an empty array
  const [designs, setDesigns] = useState<DesignArticle[]>([])

  const getData = async () => {
    const result = await db.select().from(DesignType);
    const result1 = await db.select().from(DesignId);
    console.log(result1);
    setDesignType(result);
    setDesigns(result1)

  };

  useEffect(() => {
    getData(); // Fetch data on mount
  }, []); // Empty dependency array ensures this runs once on mount
  return (
    <div className={poppins.className}>
      <div className="flex justify-center items-center overflow-hidden">
        <Navbar />

      </div >

        <SearchBar />


    </div>
  )
}

export default Index