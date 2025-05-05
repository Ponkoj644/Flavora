"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";

// You may want to move this data to a separate file or fetch from an API in a real app
const menuItems = [
    {
        slug: "signature-pizza",
        title: "Signature Pizza",
        desc: "Hand-tossed dough, fresh ingredients, and our secret sauce make this a must-try.",
        img: "/images/menu-1.jpg",
        details: "Our Signature Pizza is made with a blend of mozzarella and cheddar, topped with pepperoni, olives, and a drizzle of our house-made sauce. Perfect for sharing or enjoying solo.",
        price: "$14.99",
        calories: 850
    },
    {
        slug: "classic-burger",
        title: "Classic Burger",
        desc: "Juicy beef patty, melted cheese, and crisp veggies in a toasted bun.",
        img: "/images/menu-2.jpg",
        details: "A classic favorite! 100% beef patty, cheddar cheese, lettuce, tomato, onion, and our special burger sauce on a toasted brioche bun.",
        price: "$11.49",
        calories: 720
    },
    {
        slug: "fresh-salad",
        title: "Fresh Salad",
        desc: "A vibrant mix of greens, veggies, and house-made dressing for a healthy bite.",
        img: "/images/menu-3.jpg",
        details: "A refreshing salad with mixed greens, cherry tomatoes, cucumbers, red onions, and a tangy vinaigrette. Add grilled chicken for extra protein.",
        price: "$9.99",
        calories: 320
    },
    {
        slug: "spicy-tacos",
        title: "Spicy Tacos",
        desc: "Three soft tacos filled with spicy beef, lettuce, cheese, and salsa.",
        img: "/images/menu-4.jpg",
        details: "Our Spicy Tacos are packed with flavor and heat, featuring seasoned beef, fresh lettuce, cheddar cheese, and a zesty salsa in soft tortillas.",
        price: "$10.99",
        calories: 600
    }
];

const MenuItemPage = () => {
    const params = useParams();
    const { slug } = params;

    const item = menuItems.find((item) => item.slug === slug);

    // For the "Most Popular Items" section, show 4 items (excluding the current one)
    const popularItems = menuItems.filter((i) => i.slug !== slug).slice(0, 4);

    if (!item) {
        return (
            <div className="w-full min-h-[60vh] flex items-center justify-center">
                <h2 className="text-2xl font-bold text-red-500">Menu item not found.</h2>
            </div>
        );
    }

    return (
        <section className="w-full min-h-screen flex flex-col items-center py-16 bg-[var(--theme-bg)] transition-colors duration-500">
            {/* Main Item Detail */}
            <div className="max-w-6xl w-full bg-[var(--theme-bg)]/90 dark:bg-[var(--theme-bg)]/80 rounded-3xl shadow-2xl p-0 md:p-6 flex flex-col md:flex-row items-center gap-0 md:gap-12 mb-16 transition-all duration-500 border border-[var(--theme-border)] backdrop-blur-md">
                <div className="w-full md:w-1/2 h-72 md:h-96 relative rounded-3xl overflow-hidden group">
                    <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: "var(--theme-primary)" }}>
                        {item.title}
                    </h1>
                    <div className="text-lg mb-3 text-[var(--theme-paragraph)]">{item.desc}</div>
                    <div className="mb-6 text-base text-[var(--theme-text)]">{item.details}</div>
                    <div className="flex gap-8 mb-8">
                        <span className="font-semibold text-2xl text-[var(--theme-primary)]">{item.price}</span>
                        <span className="text-base text-[var(--theme-paragraph)]">{item.calories} cal</span>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="px-6 py-3 rounded-full font-semibold text-base bg-[var(--theme-primary)] text-white shadow transition-all duration-200 hover:bg-[var(--theme-primary-hover)]"
                        >
                            Order Now
                        </button>
                        <button
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--theme-border)] text-[var(--theme-primary)] transition-all duration-300 hover:bg-[var(--theme-primary)] hover:text-white"
                            aria-label="Add to cart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke="currentColor" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Most Popular Items Section */}
            <div className="w-full max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: "var(--theme-heading)" }}>
                    Most Popular Items
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {popularItems.map((pop, idx) => (
                        <a
                            key={pop.slug}
                            href={`/menu/${pop.slug}`}
                            className="bg-[var(--theme-bg)]/90 dark:bg-[var(--theme-bg)]/80 border border-[var(--theme-border)] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--theme-primary)] cursor-pointer backdrop-blur-md"
                            style={{
                                minHeight: "340px",
                                textDecoration: "none"
                            }}
                        >
                            <div className="w-full h-40 bg-cover bg-center relative group">
                                <Image
                                    src={pop.img}
                                    alt={pop.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-5">
                                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--theme-primary)" }}>
                                    {pop.title}
                                </h3>
                                <p className="text-sm mb-2 text-[var(--theme-text)]" style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>
                                    {pop.desc}
                                </p>
                                <div className="text-xs text-[var(--theme-paragraph)] mb-2">
                                    <span className="font-semibold">{pop.price}</span> &middot; {pop.calories} cal
                                </div>
                                <div className="flex-1" />
                                <div className="flex gap-2 mt-3">
                                    <button
                                        className="px-4 py-2 rounded-full font-semibold text-xs bg-[var(--theme-primary)] text-white shadow transition-all duration-200 hover:bg-[var(--theme-primary-hover)]"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Order Now
                                    </button>
                                    <button
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--theme-border)] text-[var(--theme-primary)] transition-all duration-200 hover:bg-[var(--theme-primary)] hover:text-white"
                                        aria-label="Add to cart"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke="currentColor" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuItemPage;