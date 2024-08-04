import BriefDescription from '@/pages/_components/_Clienteer/BriefDescription';
import Footer from '@/pages/_components/Footer';
import Navbar from '@/pages/_components/Navbar';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "600", "500", "700", "800", "900"], // Specify the weights you want to use
});


const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={poppins.className}>
      <div className="flex justify-center items-center overflow-hidden">
        <Navbar />

      </div >
      <BriefDescription/>

        <Footer bg='#FFFBEB'/>
    </div>
  );
};

export default Index;
