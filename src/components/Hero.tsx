"use client"
import React, { useEffect, useState } from "react";

const Hero = () => {
    const [isLight, setIsLight] = useState(() => {
        if (typeof window !== "undefined") {
            return !document.documentElement.classList.contains("dark");
        }
        return true;
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsLight(!document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="flex flex-col items-center justify-center text-center px-4 md:px-8 w-full min-h-[90vh] lg:min-h-screen py-24 relative overflow-hidden"
            style={{
                background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('/images/hero-bg.jpg') center/cover no-repeat",
                color: "var(--theme-text)",
                transition: "background 0.3s, color 0.3s"
            }}
        >
            <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{
                    color: isLight ? "#fff" : "var(--theme-heading)",
                    transition: "color 0.3s"
                }}
            >
                Welcome to <span style={{ color: "var(--theme-primary)" }}>Flavora</span>
            </h1>
            <p
                className="text-lg md:text-2xl mb-8 max-w-2xl"
                style={{
                    color: isLight ? "#fff" : "var(--theme-paragraph)",
                    transition: "color 0.3s"
                }}
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

            <p className="text-xl md:text-2xl mt-8 max-w-2xl transition"
                style={{
                    color: isLight ? "#fff" : "var(--theme-paragraph)",
                    transition: "color 0.3s"
                }}>Open Daily: 10am - 10pm</p>
        </section>
    );
};

export default Hero;