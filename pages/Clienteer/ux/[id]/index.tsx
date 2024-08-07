import { db } from '@/db/db';
import { DesignId, DesignType } from '@/db/schema';
import BriefDescription from '@/pages/_components/_Clienteer/BriefDescription';
import Footer from '@/pages/_components/Footer';
import Navbar from '@/pages/_components/Navbar';
import { eq } from 'drizzle-orm';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IDT {
  id: number; // Changed from Number to number
  Design: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "600", "500", "700", "800", "900"], // Specify the weights you want to use
});



const Index = ( { } ) => {
  const router = useRouter();

  
  

  return (
    <div className={poppins.className}>
      <div className="flex justify-center items-center overflow-hidden">
        <Navbar />
      </div>
      <BriefDescription />

      <Footer bg='#FFFBEB' />
    </div>
  );
};

export default Index;
