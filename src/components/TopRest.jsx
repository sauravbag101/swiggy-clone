import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Cart from './Cart';

export default function TopRest() {

    // navigation button
    const [slide, setSlide] = useState(0);

    // Static array of restaurant data
    const data = [
        {
            name: "Restaurant 1",
            location: "Location 1",
            rating: 4.5,
        },
        {
            name: "Restaurant 2",
            location: "Location 2",
            rating: 4.2,
        },
        {
            name: "Restaurant 3",
            location: "Location 3",
            rating: 4.8,
        },
        {
            name: "Restaurant 4",
            location: "Location 4",
            rating: 4.1,
        },
    ];

    // button navigation function
    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex mt-12 items-center justify-between'>
                    <div className='text-[25px] font-semibold'>Top Restaurant chains in Delhi</div>
                    <div className='flex gap-5'>
                        <div className='w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer' onClick={prevSlide}>
                            <FaArrowLeft />
                        </div>
                        <div className='w-[35px] h-[35px] bg-[#e2e2e7] rounded-full flex justify-center items-center cursor-pointer' onClick={nextSlide}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 overflow-hidden'>
                    {data.length > 0 ? (
                        data.map((d, i) => <Cart {...d} key={i} />)
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
            </div>
        </>
    );
}
