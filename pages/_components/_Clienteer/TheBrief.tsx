import React, { useEffect, useState } from 'react';
import BackIcon from '../Assets/BackIcon';
import { db } from '@/db/db';
import { DesignId, DesignType } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

interface BriefBlockProps {
    id: number;
    designT: string;
}

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

const TheBrief: React.FC<BriefBlockProps> = ({ id, designT }) => {
    const MyDesigns = [
        {
            id : 1,
            type : "ux"
        },
        {
            id : 2,
            type : "ui"
        },
        {
            id : 3,
            type : "logo"
        },
        {
            id : 4,
            type : "web"
        },
        {
            id : 5,
            type : "graphic"
        },
    ]
    const [data, setData] = useState<DesignArticle>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const design = MyDesigns.find(d => d.type === designT);
                
                if (design) {
                    const results = await db
                        .select()
                        .from(DesignId)
                        .where(and(eq(DesignId.DesignId, id), eq(DesignId.DesignTypeID, String(design.id))));

                    setData(results[0]); // Assuming `results` is an array, use the first item
                    console.log(results);
                } else {
                    console.error("Design type not found.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [designT, id]); // Run when designT or id changes // Run when designT or id changes

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
                                <div className="text-center text-black text-[32px] font-semibold">{data?.User}</div>
                                <div className="px-3 py-1.5 bg-amber-400 rounded-[29px] border border-black justify-center items-center gap-2.5 flex">
                                <div className="text-center text-black text-sm font-normal">
    {MyDesigns.find(design => design.id === parseInt(data?.DesignTypeID))?.type ? `${MyDesigns.find(design => design.id === parseInt(data?.DesignTypeID))?.type} Design` : 'Unknown Design Type'}
</div>
                                </div>
                            </div>
                            <div className="self-stretch">
                                <h1 className="text-black text-2xl font-semibold">Project Overview<br /></h1>
                                <span className="text-black text-base font-medium"><br /></span>
                                <span className="text-zinc-600 text-base font-medium">
                                    {data?.Overview}
                                </span>
                                <span className="text-black text-base font-medium"><br /><br /></span>
                                <h1 className="text-black text-xl font-semibold">Project Objectives<br /></h1>
                                <span className="text-black text-base font-medium"><br /></span>
                                <span className="text-zinc-600 text-base font-medium">
                                    {data?.Objectives}
                                </span>
                                <h1 className="text-black text-xl font-semibold"><br />Target Audience<br /></h1>
                                <span className="text-black text-base font-medium"><br /></span>
                                <span className="text-zinc-600 text-base font-medium">
                                    {data?.Audience}
                                </span>
                                <span className="text-black text-base font-medium"><br /></span>
                                <h1 className="text-black text-xl font-semibold"><br />Key Deliverables</h1>

                                <span className="text-zinc-600 text-base font-medium">
                                <br />{data?.key}
                                    </span>
                                <span className="text-black text-base font-medium"></span>
                                <h1 className="text-black text-xl font-semibold"><br />Project Timeline<br /></h1>
                                <span className="text-black text-base font-medium"><br /></span>
                                <span className="text-zinc-600 text-base font-medium">
                                    {data?.Timeline}
                                </span>
                                
                                <h1 className="text-black text-xl font-semibold"><br />Budget<br /></h1>

                                <span className="text-zinc-600 text-base font-medium">
                                <br />The estimated budget for the project is {data?.Budget}, which includes design, user testing, and project management fees.<br />
                                    Assumptions & Dependencies<br />
                                </span>

                                <span className="text-black text-base font-medium"><br /></span>
                                
                                <span className="text-zinc-600 text-base font-medium">
                                    <br/>
                                    This project brief is intended to provide a clear understanding of the project’s goals, scope, and expectations. Please review and provide any feedback or approvals.<br />
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheBrief;
