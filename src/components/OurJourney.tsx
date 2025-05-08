"use client"
import React from "react";

const OurJourney = () => {
    return (
        <section className="w-full py-20 bg-[var(--theme-bg)] transition-colors duration-500 flex justify-center">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-4">
                {/* Left: Inspiring Image */}
                <div className="flex-1 w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl relative">
                    <img
                        src="/images/chef-cooking.jpg"
                        alt="Chef cooking in kitchen"
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        style={{ borderRadius: "1.5rem" }}
                    />
                </div>
                {/* Right: Story Content */}
                <div className="flex-1 flex flex-col items-start justify-center">
                    <span className="uppercase tracking-widest text-sm font-semibold mb-2 text-[var(--theme-primary)]">
                        Our Culinary Journey
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                        style={{ color: "var(--theme-primary)" }}
                    >
                        Our Story Begins Here
                    </h2>
                    <p
                        className="text-lg md:text-xl mb-8 text-[var(--theme-paragraph)]"
                        style={{ transition: "color 0.3s" }}
                    >
                        At Flavora, our journey is woven from passion, tradition, and a relentless pursuit of culinary excellence.<br />

                        We believe food is more than sustenance—it's a bridge between cultures, a spark for memories, and a reason to gather.<br />
                        Join us as we continue to craft unforgettable experiences, one plate at a time.
                    </p>
                    <a
                        href="/about"
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
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;