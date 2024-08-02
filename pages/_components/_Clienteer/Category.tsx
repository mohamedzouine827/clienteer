import React, { useState, useReducer } from 'react';
import ArrowDown from '../Assets/ArrowDown';
import { Input } from "@/components/ui/input";

interface Design {
    id: number;
    type: string;
    clicked: boolean;
}

interface Action {
    type: 'TOGGLE_CLICK';
    id: number;
}

const initialDesigns: Design[] = [
    { id: 1, type: "UX Design", clicked: false },
    { id: 2, type: "UI Design", clicked: false },
    { id: 3, type: "Logo Design", clicked: false },
    { id: 4, type: "Web Design", clicked: false },
    { id: 5, type: "Graphic Design", clicked: false },
];

const reducer = (state: Design[], action: Action): Design[] => {
    switch (action.type) {
        case 'TOGGLE_CLICK':
            return state.map(design =>
                design.id === action.id ? { ...design, clicked: !design.clicked } : design
            );
        default:
            return state;
    }
};

const Category: React.FC = () => {
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const [designs, dispatch] = useReducer(reducer, initialDesigns);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    const handleDesignClick = (id: number) => {
        dispatch({ type: 'TOGGLE_CLICK', id });
    };

    return (
        <div className='flex flex-col gap-[24px]'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-2'>
                    <button
                        className="h-14 px-8 py-4 rounded-2xl border border-zinc-400 flex items-center gap-2.5 cursor-pointer"
                        onClick={handleClick}
                    >
                        <div className="text-zinc-950 text-base font-normal">All Designs</div>
                        <ArrowDown className={`transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`} />
                    </button>
                </div>
                <Input placeholder='Search for a specific Brief' type='text' className='text-zinc-950 text-base font-normal w-[591px] h-14 px-8 py-4 rounded-2xl border border-zinc-400 flex items-center' />
            </div>
            <div className='flex flex-row gap-4'>
                {designs.map((design) => (
                    <div
                        key={design.id}
                        className={`h-14 px-8 py-4 w-48 rounded-2xl border justify-center items-center flex text-base font-normal cursor-pointer transition-colors duration-300 ${isRotated ? 'visible' : 'hidden invisible'} ${design.clicked ? 'bg-[#FBBF24] text-zinc-700' : 'border-zinc-400'}`}
                        onClick={() => handleDesignClick(design.id)}
                    >
                        {design.type}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
