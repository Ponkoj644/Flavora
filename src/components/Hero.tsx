"use client"
import React from "react";

const Hero = () => {
    return (
        <section
            className="flex flex-col items-center justify-center text-center py-24 px-4 md:px-8"
            style={{
                background: "var(--theme-bg)",
                color: "var(--theme-text)",
                minHeight: "60vh",
                transition: "background 0.3s, color 0.3s"
            }}
        >
            <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ color: "var(--theme-heading)", transition: "color 0.3s" }}
            >
                Welcome to <span style={{ color: "var(--theme-primary)" }}>Flavora</span>
            </h1>
            <p
                className="text-lg md:text-2xl mb-8 max-w-2xl"
                style={{ color: "var(--theme-paragraph)", transition: "color 0.3s" }}
            >
                Discover a world of taste. Enjoy our signature dishes and experience the vibes of Flavora!
            </p>
            <a
                href="/menu"
                className="inline-block px-8 py-3 rounded-full font-semibold text-lg transition"
                style={{
                    background: "var(--theme-primary)",
                    color: "#fff",
                    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
                    transition: "background 0.3s, color 0.3s"
                }}
                onMouseOver={e => (e.currentTarget.style.background = "var(--theme-primary-hover)")}
                onMouseOut={e => (e.currentTarget.style.background = "var(--theme-primary)")}
            >
                Explore Menu
            </a>
        </section>
    );
};

export default Hero;