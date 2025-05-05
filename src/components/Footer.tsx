import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-paragraph)] transition-colors duration-300"
      style={{
        fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
        transition: "background 0.3s, color 0.3s"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand & Social */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--theme-primary)" }}>
            Flavora
          </span>
          <p className="text-sm text-[var(--theme-paragraph)] max-w-xs text-center md:text-left">
            Savor the flavor. Experience the vibes. Your favorite spot for signature dishes and unforgettable moments.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--theme-border)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white transition-all duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--theme-border)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white transition-all duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--theme-border)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white transition-all duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03c0 .352.04.695.116 1.022A12.72 12.72 0 0 1 3.11 5.1a4.48 4.48 0 0 0 1.388 5.976 4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.697z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <h4 className="font-semibold text-[var(--theme-heading)] mb-2">Menu</h4>
            <ul className="space-y-1">
              <li><a href="/menu" className="hover:text-[var(--theme-primary)] transition-colors">All Dishes</a></li>
              <li><a href="/menu/signature-pizza" className="hover:text-[var(--theme-primary)] transition-colors">Signature Pizza</a></li>
              <li><a href="/menu/classic-burger" className="hover:text-[var(--theme-primary)] transition-colors">Classic Burger</a></li>
              <li><a href="/menu/fresh-salad" className="hover:text-[var(--theme-primary)] transition-colors">Fresh Salad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--theme-heading)] mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-[var(--theme-primary)] transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-[var(--theme-primary)] transition-colors">Contact</a></li>
              <li><a href="/careers" className="hover:text-[var(--theme-primary)] transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--theme-heading)] mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="/faq" className="hover:text-[var(--theme-primary)] transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-[var(--theme-primary)] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[var(--theme-primary)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[var(--theme-border)] py-4 text-center text-xs text-[var(--theme-paragraph)] bg-[var(--theme-bg)]">
        &copy; {new Date().getFullYear()} Flavora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;