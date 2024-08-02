import React from 'react'
import Navbar from '../_components/Navbar'
import { Poppins } from "next/font/google";
import SearchBar from '../_components/_Clienteer/SearchBar';
import BriefBlock from '../_components/_Clienteer/BriefBlock';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "600", "500", "700", "800", "900"], // Specify the weights you want to use
});


function index() {
  return (
    <div className={poppins.className}>
      <div className="flex justify-center items-center overflow-hidden">
        <Navbar />

      </div >

        <SearchBar />


    </div>
  )
}

export default index