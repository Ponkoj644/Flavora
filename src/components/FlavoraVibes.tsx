import React from 'react';
import DishSlider from './DishSlider';
const FlavoraVibes: React.FC = () => {
    return (
        <div className="py-12 px-4 bg-gray-100  ">
            <div className="w-full lg:max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-center" style={{ color: "var(--theme-primary)" }}>
                    Flavora Vibes
                </h2>
                <p className="text-lg md:text-xl text-[var(--theme-paragraph)]" style={{ transition: "color 0.3s" }}>
                    Experience the unique atmosphere of our restaurant, where every dish is a celebration of flavors and every moment is a cherished memory.
                </p>
            </div>
            <div className="mx-auto px-4 text-center ">
                <div className="">
                    <DishSlider />
                </div>
            </div>
        </div>
    );
};

export default FlavoraVibes;