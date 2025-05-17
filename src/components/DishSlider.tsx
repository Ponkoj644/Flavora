"use client"
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import { useRouter } from 'next/navigation';

const dishes = [
    { image: '/images/menu-1.jpg', name: 'Dish 1', description: 'Delicious dish 1' },
    { image: '/images/menu-2.jpg', name: 'Dish 2', description: 'Delicious dish 2' },
    { image: '/images/menu-3.jpg', name: 'Dish 3', description: 'Delicious dish 3' },
    // Add more dishes as needed
];

const DishSlider: React.FC = () => {
    const router = useRouter();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,

    };

    return (
        <>
            <Slider {...settings}>
                {dishes.map((dish, index) => (
                    <div key={index} className="relative">
                        <img src={dish.image} alt={dish.name} className="w-full h-auto max-h-96 object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 md:p-4 ">
                            <div className='flex items-center justify-between'>
                                <div className='text-start'>
                                    <h3 className="text-xl font-bold text-white">{dish.name}</h3>
                                    <p className='mb-5 text-white'>{dish.description}</p>
                                </div>
                                <a
                                    onClick={() => router.push('/menu')}
                                    className="px-4 py-2 rounded-full font-semibold text-base bg-[var(--theme-primary)] text-white shadow transition-all duration-200 hover:bg-[var(--theme-primary-hover)]"
                                >
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default DishSlider;