import React from 'react'

interface BriefBlockProps {
    DesignTypeId: number;
    Name: string;
    Description: string;
}

const BriefBlock: React.FC<BriefBlockProps> = ({ DesignTypeId, Name, Description }) => {
    return (
        <div className="group w-[378px] h-[200px] overflow-hidden hover:shadow-xl cursor-pointer transition-all duration-150 ease-in-out p-5 hover:bg-amber-100 bg-amber-50 rounded-[37px] border border-amber-200 flex-col justify-start items-start gap-4 inline-flex">
            <div className=" inline-flex justify-between w-full  ">
                <div className="text-center group-hover:text-zinc-700 text-black text-2xl font-semibold">{Name}</div>
                <div className="px-3 py-1.5 bg-amber-400 rounded-[29px] border border-black justify-center items-center gap-2.5 flex">
                    <div className="text-center text-black text-sm font-normal">{DesignTypeId} Design</div>
                </div>
            </div>
            <div className="self-stretch text-zinc-700 group-hover:text-zinc-500 text-sm font-normal">{Description}</div>
        </div>
    )
}

export default BriefBlock;
