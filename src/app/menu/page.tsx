"use client";
import React, { useState } from "react";
import menuItems from "@/data/menuItems";
import Image from "next/image";
import Link from "next/link";

// Extract unique subCategories from menuItems
const categories = Array.from(
    new Set(menuItems.map((item) => item.subCategory))
);

const MenuPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    // Filter items by selected subCategory
    const filteredItems = menuItems.filter((item) => item.subCategory === selectedCategory).slice(0, 3);

    // Filter popular items //
    const popularItems = menuItems.filter(item => item.isPopular).slice(0, 4);

    return (
        <section className="w-full min-h-screen flex flex-col items-center py-20 bg-[var(--theme-bg)] transition-colors duration-500">
            <h1 className="text-4xl md:text-5xl font-extrabold mt-6 mb-10 tracking-tight text-center" style={{ color: "var(--theme-primary)" }}>
                Menu
            </h1>

            {/* Category buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-3 py-1 rounded-full text-base transition shadow ${selectedCategory === cat
                            ? "bg-[var(--theme-primary)] text-white"
                            : "bg-[var(--theme-border)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white"
                            }`}
                        style={{
                            border: "none",
                            outline: "none",
                            transition: "background 0.3s, color 0.3s",
                        }}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu items */}
            <div className=" w-full md:max-w-7xl flex flex-col md:flex-row gap-8 items-start justify-between px-4 ">

                <div className="w-full text-start">
                    {filteredItems.length === 0 ? (
                        <div className="text-center text-lg text-[var(--theme-paragraph)] py-12">
                            No items found in this category.
                        </div>
                    ) : (
                        filteredItems.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/menu/${item.slug}`}
                                className="block"
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="flex items-start gap-4 md:gap-6 py-4 border-b border-[var(--theme-border)] hover:bg-[var(--theme-border)]/20 transition"
                                >
                                    <div className="w-32 h-28 md:h-32 bg-gray-100 flex-shrink-0 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={128}
                                            height={128}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-1 ">
                                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2" style={{ color: "var(--theme-primary)" }}>
                                            {item.title}
                                        </h2>
                                        <p className="mb-2 text-sm sm:text-base text-[var(--theme-paragraph)] max-w-2xl">{item.desc}</p>
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-xs text-[var(--theme-paragraph)] mb-1">{item.category}</div>
                                            <button
                                                className="px-4 py-1 rounded-full bg-[var(--theme-primary)] text-white text-xs font-semibold shadow hover:bg-[var(--theme-primary-hover)] transition"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    // Add order logic here if needed
                                                }}
                                            >
                                                Order Now
                                            </button>
                                            <div className="text-lg md:text-xl lg:text-2xl font-bold text-start min-w-[70px]" style={{ color: "var(--theme-primary)" }}>
                                                {item.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        ))
                    )}
                </div>

                {/* Best Choices */}
                <div className="w-full text-start">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: "var(--theme-primary)" }}>Best Choices</h2>

                    <div className="flex flex-col ">
                        {popularItems.map(item => (
                            <Link
                                key={item.slug}
                                href={`/menu/${item.slug}`}
                                className="flex items-center gap-3 py-3 border-b border-[var(--theme-border)] hover:bg-[var(--theme-border)]/30 transition"
                                style={{ textDecoration: "none" }}
                            >
                                <div className="w-32 h-28 md:w-14 md:h-14 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={56}
                                        height={56}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-[var(--theme-primary)]">{item.title}</div>
                                    <div className="text-xs text-[var(--theme-paragraph)]">{item.category}</div>
                                </div>
                                <div className="font-bold text-[var(--theme-primary)] mx-2 inline-block">{item.price}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuPage;