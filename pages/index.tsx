import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";

// Define the Poppins font, optionally specify weights, styles, etc.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400","300", "600","500","700","800","900"], // Specify the weights you want to use
});

export default function Home() {
  return (
    <section className={poppins.className}>
      <div className="flex justify-center">
      <Navbar />
      </div>
    </section>
  );
}
