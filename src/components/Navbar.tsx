"use client"

import React, { useEffect, useState } from "react";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Contact", href: "/contact" }
];

const Navbar = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("/");

    useEffect(() => {
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem("theme");
        const root = document.documentElement;
        if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme("dark");
            root.classList.add("dark");
        } else {
            setTheme("light");
            root.classList.remove("dark");
        }
        setActivePath(window.location.pathname);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (theme === "light") {
            setTheme("dark");
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleMenuClick = (href: string) => {
        setMenuOpen(false);
        setActivePath(href);
    };

    return (
        <nav
            className="w-full flex items-center justify-between px-6 py-4 shadow-md fixed top-0 left-0 z-50"
            style={{
                background: "var(--theme-bg)",
                color: "var(--theme-text)",
                borderBottom: "1px solid var(--theme-border)"
            }}
        >
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold" style={{ color: "var(--theme-heading)" }}>Flavora</span>
            </div>
            <ul className="hidden md:flex gap-8 items-center">
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            style={{
                                color: activePath === item.href ? "var(--theme-primary)" : "var(--theme-text)",
                                position: "relative",
                                transition: "color 0.3s"
                            }}
                            className="group px-2 py-1"
                            onClick={() => handleMenuClick(item.href)}
                        >
                            {item.label}
                            <span
                                className="block absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
                                style={{
                                    background: "var(--theme-primary)",
                                    opacity: activePath === item.href ? 1 : 0,
                                    transition: "opacity 0.3s"
                                }}
                            />
                            <style>
                                {`
                                .group:hover {
                                    color: var(--theme-primary-hover) !important;
                                }
                                .group:hover span {
                                    opacity: 0.7 !important;
                                }
                                `}
                            </style>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 flex items-center justify-center rounded-full transition"
                    style={{
                        background: "var(--theme-border)",
                        color: "var(--theme-primary)"
                    }}
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        // Sun icon for light mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                            <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                        </svg>
                    )}
                </button>
                {/* Hamburger menu button for mobile */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded transition"
                    style={{
                        background: "var(--theme-border)",
                        color: "var(--theme-primary)"
                    }}
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        // Close icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
            {/* Mobile menu */}
            <div
                className={`absolute top-full left-0 w-full bg-[var(--theme-bg)] border-t border-[var(--theme-border)] flex flex-col items-center md:hidden shadow-lg
          ${menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}
        `}
                style={{
                    zIndex: 100,
                    transition: "var(--menu-transition)"
                }}
            >
                {menuItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="py-3 w-full text-center group"
                        style={{
                            color: activePath === item.href ? "var(--theme-primary)" : "var(--theme-text)",
                            background: activePath === item.href ? "var(--theme-border)" : "transparent",
                            transition: "color 0.3s, background 0.3s"
                        }}
                        onClick={() => handleMenuClick(item.href)}
                    >
                        {item.label}
                        <style>
                            {`
                            .group:hover {
                                color: var(--theme-primary-hover) !important;
                                background: var(--theme-border) !important;
                            }
                            `}
                        </style>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;