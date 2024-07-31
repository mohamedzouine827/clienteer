import React, { useState } from 'react';
import ArrowDown from '../Assets/ArrowDown';

const Category: React.FC = () => {
    const [isRotated, setIsRotated] = useState<boolean>(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className='flex flex-row gap-[24px]'>
            <button
                className="h-14 px-8 py-4 rounded-2xl border border-zinc-400 flex items-center gap-2.5 cursor-pointer"
                onClick={handleClick}
            >
                <div className="text-zinc-950 text-base font-normal">All Designs</div>
                <ArrowDown className={`transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`} />
            </button>
            <div className="w-[591px] h-14 px-8 py-4 rounded-2xl border border-zinc-400 flex items-center">
                <input
                    className="text-zinc-950 text-base font-normal border-0 w-full pl-0 pr-2"
                    placeholder='Search for a specific brief'
                />
                <div className="w-6 h-6">
                    {/* Additional content can be added here if needed */}
                </div>
            </div>
        </div>
    );
}

export default Category;
