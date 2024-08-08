import React, { useState, useEffect } from 'react';
import BackIcon from '../Assets/BackIcon';
import { db } from '@/db/db';
import { DesignType, DesignId } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/router';

interface DesignArticle {
  DesignId: number;
  DesignTypeID: string;
  User: string;
  Description: string;
  Overview: string;
  Objectives: string;
  Budget: number;
  Audience: string;
  key: string;
  Timeline: string;
}

export default function BriefDescription() {
  const [design, setDesign] = useState<DesignArticle[]>([]);

  const DesignTypes = [
    { id: 1, key: "ui" },
    { id: 2, key: "ux" },
    { id: 3, key: "Logo" },
    { id: 4, key: "Web" },
    { id: 5, key: "Graphic" },
  ];

  const router = useRouter();
  const routeParts = router.route.split('/');
  console.log(router.query.id)
  const DesignTP = routeParts[2]; // Indexing starts at 0
  console.log(DesignTP);
  

  useEffect(() => {
    // Example async function to fetch data
    


  }, []);

  // Example data
  

  return (
    <div>
      <div className="w-[1440px] h-[1891px] px-[120px] py-24 flex-col justify-start items-start gap-12 inline-flex">
        <div className="h-12 flex-col justify-start items-start gap-8 flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <BackIcon />
            <div className="text-zinc-950 text-[32px] font-bold">Home</div>
          </div>
        </div>
        <div className="self-stretch h-[1603px] flex-col justify-start items-start gap-16 flex">
          <div className="self-stretch justify-start items-center gap-16 inline-flex">
            <div className="grow shrink basis-0 p-6 bg-amber-50 rounded-[37px] border border-amber-200 flex-col justify-start items-start gap-16 inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-center text-black text-[32px] font-semibold">Michelle Angelo</div>
                <div className="px-3 py-1.5 bg-amber-400 rounded-[29px] border border-black justify-center items-center gap-2.5 flex">
                  <div className="text-center text-black text-sm font-normal">UI Design</div>
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-black text-2xl font-semibold">Project Overview<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  Michelle Angelo, a seasoned entrepreneur, is looking to redesign her e-commerce platform, “Michelle’s Artisan Crafts,” which specializes in handmade, eco-friendly products. The current website lacks a modern design and intuitive user experience, which is impacting user engagement and sales. The goal is to create a visually appealing, user-friendly, and responsive website that reflects the brand’s values and enhances the overall shopping experience.<br />
                </span>
                <span className="text-black text-base font-medium"><br /><br /></span>
                <span className="text-black text-xl font-semibold">Project Objectives<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  Improve User Experience (UX): Streamline the user journey, making it easier for customers to browse, search, and purchase products.<br />
                  Enhance Visual Design: Update the website’s aesthetics to align with current design trends and the brand’s identity.<br />
                  Increase Conversion Rates: Optimize the design to encourage more visitors to make purchases.<br />
                  Mobile Responsiveness: Ensure the website is fully responsive and provides a seamless experience across all devices.<br />
                </span>
                <span className="text-black text-xl font-semibold"><br />Target Audience<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  Primary Audience: Eco-conscious consumers, aged 25-45, interested in handmade and sustainable products.<br />
                  Secondary Audience: Gift buyers looking for unique and meaningful items.<br />
                </span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-black text-xl font-semibold">Key Deliverables<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  Wireframes: Initial sketches and layouts for the main pages (Home, Product Listing, Product Detail, Checkout, About Us, Contact).<br />
                  High-Fidelity Mockups: Detailed visual designs of the approved wireframes.<br />
                  Interactive Prototypes: Clickable prototypes to demonstrate the user flow and interactions.<br />
                  ClassName Guide: A comprehensive guide detailing the color scheme, typography, iconography, and other visual elements.<br />
                  User Testing Reports: Feedback and analysis from usability tests, with recommendations for improvements.<br />
                  Final Design Files: All design assets, including icons, images, and graphics, provided in a format ready for development.<br />
                </span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-black text-xl font-semibold">Project Timeline<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  Discovery & Research: 1 week<br />
                  Wireframing & Prototyping: 2 weeks<br />
                  Design Iteration & Finalization: 3 weeks<br />
                  User Testing & Feedback: 1 week<br />
                  Handover & Documentation: 1 week<br />
                </span>
                <span className="text-zinc-600 text-base font-medium">Total Duration: 8 weeks<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-black text-xl font-semibold">Budget<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  The estimated budget for the project is [Your Budget Estimate], which includes design, user testing, and project management fees.<br />
                  Assumptions & Dependencies<br />
                </span>
                <span className="text-zinc-600 text-base font-medium">
                  Content: The client will provide all necessary content, including product descriptions, images, and any other text.<br />
                  Development: This brief covers the design phase only. Development and implementation will be managed separately.<br />
                </span>
                <span className="text-zinc-600 text-base font-medium">
                  Communication & Collaboration<br />
                  Regular updates will be provided to Michelle Angelo via email and scheduled meetings. Key milestones and deliverables will be reviewed and approved by the client.<br />
                </span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-black text-xl font-semibold">Next Steps<br /></span>
                <span className="text-black text-base font-medium"><br /></span>
                <span className="text-zinc-600 text-base font-medium">
                  Approval of Project Brief: Confirm the scope, objectives, and timeline.<br />
                  Kickoff Meeting: Discuss project details, clarify any questions, and finalize timelines.<br />
                  Research & Discovery: Begin with market research and user analysis.<br />
                </span>
                <span className="text-zinc-600 text-base font-medium">
                  This project brief is intended to provide a clear understanding of the project’s goals, scope, and expectations. Please review and provide any feedback or approvals.<br />
                </span>
                <span className="text-black text-base font-medium">[Your Name] UI/UX Designer [Your Contact Information]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
