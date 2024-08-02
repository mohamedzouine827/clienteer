import React from 'react'

export default function BriefBlock() {
    return (
        <div className="group w-[378px] hover:shadow-xl cursor-pointer transition-all duration-150 ease-in-out p-5 hover:bg-amber-100 bg-amber-50 rounded-[37px] border border-amber-200 flex-col justify-start items-start gap-4 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="text-center group-hover:text-zinc-700 text-black text-2xl font-semibold">Michelle Angelo</div>
                <div className="px-3 py-1.5 bg-amber-400 rounded-[29px] border border-black justify-center items-center gap-2.5 flex">
                    <div className="text-center text-black text-sm font-normal">UI Design</div>
                </div>
            </div>
            <div className="self-stretch text-zinc-700 group-hover:text-zinc-500 text-sm font-normal">In This project you are supposed to design a user interface for an app called MOUJI, that deliver foods to the people. </div>
        </div>
    )
}
