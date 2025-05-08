"use client"
import React from "react";
import Link from "next/link";
import dishes from "@/data/dishes";
import Image from "next/image";

const SignatureDishes = () => {
  return (
    <section className="w-full py-20 bg-[var(--theme-bg)] transition-colors duration-500 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-center" style={{ color: "var(--theme-primary)" }}>
        Signature Dishes
      </h2>

      <p
        className="mb-10 text-center max-w-3xl px-4 mx-auto text-lg md:text-xl text-[var(--theme-paragraph)] "
        style={{ transition: "color 0.3s" }}
      >
        Experience our chef's finest creations, crafted with passion to delight your senses.
      </p>

      {/* Grid of dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
        {dishes.map((dish) => (
          <a
            key={dish.slug}
            href={`/signaturedish/${dish.slug}`}
            className="bg-[var(--theme-bg)]/90 dark:bg-[var(--theme-bg)]/80 border border-[var(--theme-border)] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--theme-primary)] cursor-pointer backdrop-blur-md"
            style={{
              minHeight: "420px",
              textDecoration: "none"
            }}
          >
            <div className="w-full h-52 bg-cover bg-center relative group">
              <Image
                src={dish.img}
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw,"
              />
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--theme-primary)" }}>
                {dish.name}
              </h3>
              <p className="text-sm mb-2 text-[var(--theme-text)]" style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {dish.desc}
              </p>
              <div className="text-xs text-[var(--theme-paragraph)] mb-2">
                <span className="font-semibold">{dish.price}</span> &middot; {dish.calories} cal
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
      <div className="flex justify-center mt-12">
        <Link
          href="/signaturedish"
          className="px-7 py-3 rounded-full font-semibold text-base bg-[var(--theme-primary)] text-white shadow transition-all duration-200 hover:bg-[var(--theme-primary-hover)]"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default SignatureDishes;