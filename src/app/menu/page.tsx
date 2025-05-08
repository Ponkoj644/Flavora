"use client";
import React, { useState } from "react";
import menuItems from "@/data/menuItems";
import Image from "next/image";

// Extract unique subCategories from menuItems
const categories = Array.from(
    new Set(menuItems.map((item) => item.subCategory))
);

const MenuPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    // Filter items by selected subCategory
    const filteredItems = menuItems.filter(
        (item) => item.subCategory === selectedCategory
    );

    return (
        <section className="w-full min-h-screen flex flex-col items-center py-20 bg-[var(--theme-bg)] transition-colors duration-500">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-center" style={{ color: "var(--theme-primary)" }}>
                Menu
            </h1>
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
            <div className="w-full max-w-4xl mx-2">
                {filteredItems.length === 0 ? (
                    <div className="text-center text-lg text-[var(--theme-paragraph)] py-12">
                        No items found in this category.
                    </div>
                ) : (
                    filteredItems.map((item) => (
                        <div
                            key={item.slug}
                            className="flex items-start gap-6 py-8 border-b border-[var(--theme-border)]"
                        >
                            <div className="w-32 h-32 bg-gray-100 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={128}
                                    height={128}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--theme-primary)" }}>
                                    {item.title}
                                </h2>
                                <p className="mb-2 text-[var(--theme-text)]">{item.desc}</p>
                                <div className="text-xs text-[var(--theme-paragraph)] mb-1">{item.category}</div>
                            </div>
                            <div className="text-2xl font-bold text-right min-w-[70px]" style={{ color: "var(--theme-primary)" }}>
                                {item.price}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default MenuPage;