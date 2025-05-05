"use client"
import React from "react";
import Link from "next/link";

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

const MenuPreview = () => {
    return (
        <section className="w-full py-20 bg-[var(--theme-bg)] flex flex-col items-center">
            <div className="max-w-2xl text-center mb-12">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-normal"
                    style={{ color: "var(--theme-heading)", transition: "color 0.3s" }}
                >
                    Signature Experiences
                </h2>
                <p
                    className="text-lg md:text-xl text-[var(--theme-paragraph)]"
                    style={{ transition: "color 0.3s" }}
                >
                    Explore what makes our dining experience unforgettable.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
                {menuItems.map((item, idx) => (
                    <Link
                        key={item.slug}
                        href={`/menu/${item.slug}`}
                        className="group"
                        style={{ textDecoration: "none" }}
                    >
                        <div
                            className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-3xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-xl hover:border-[var(--theme-primary)] cursor-pointer"
                            style={{
                                minHeight: "420px"
                            }}
                        >
                            <div
                                className="w-full h-52 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    transition: "filter 0.3s"
                                }}
                            />
                            <div className="flex flex-col flex-1 p-7">
                                <h3
                                    className="text-2xl font-bold mb-2"
                                    style={{
                                        color: "var(--theme-primary)",
                                        transition: "color 0.3s"
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-base mb-2"
                                    style={{
                                        color: "var(--theme-text)",
                                        transition: "color 0.3s",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}
                                >
                                    {item.desc}
                                </p>
                                <div className="text-sm text-[var(--theme-paragraph)] mb-4">
                                    <span className="font-semibold">{item.price}</span> &middot; {item.calories} cal
                                </div>
                                <div className="flex-1" />
                                <div className="flex gap-3 mt-4">
                                    <button
                                        className="px-5 py-2 rounded-full font-semibold text-sm bg-[var(--theme-primary)] text-white shadow transition-all duration-200 hover:bg-[var(--theme-primary-hover)]"
                                        style={{
                                            transition: "background 0.3s, color 0.3s"
                                        }}
                                        onClick={e => { e.preventDefault(); window.location.href = `/menu/${item.slug}?order=1`; }}
                                    >
                                        Order Now
                                    </button>
                                    <button
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--theme-border)] text-[var(--theme-primary)] transition-all duration-200 hover:bg-[var(--theme-primary)] hover:text-white"
                                        aria-label="Add to cart"
                                        style={{
                                            transition: "background 0.3s, color 0.3s"
                                        }}
                                        onClick={e => { e.preventDefault(); /* Add to cart logic here */ }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke="currentColor" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <a
                href="/menu"
                className="mt-12 inline-block px-8 py-3 rounded-full font-semibold text-lg transition bg-[var(--theme-primary)] text-white shadow hover:bg-[var(--theme-primary-hover)]"
                style={{
                    transition: "background 0.3s, color 0.3s"
                }}
            >
                Discover More
            </a>
        </section>
    );
};

export default MenuPreview;