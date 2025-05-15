import React from 'react';

const images = [
    '/images/chef-cooking.jpg',
    '/images/hero-bg.jpg',
    '/images/menu-1.jpg',
    '/images/menu-2.jpg',
    '/images/menu-3.jpg',
    '/images/menu-4.jpg',
    '/images/menu-5.jpg',
    '/images/menu-6.jpg',
    '/images/menu-7.jpg',
    '/images/menu-8.jpg',
];

const Gallery: React.FC = () => {
    return (
        <section className="py-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-center" style={{ color: "var(--theme-primary)" }}>
                    Our Gallery
                </h2>
                <p className="text-lg md:text-xl text-[var(--theme-paragraph)]" style={{ transition: "color 0.3s" }}>
                    Explore the ambiance and dishes of our restaurant
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;