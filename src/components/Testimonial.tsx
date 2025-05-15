import React from "react";
import testimonials from "@/data/testimonials";

type TestimonialType = {
    name: string;
    text: string;
    image?: string;
    role?: string;
};

const TestimonialCard: React.FC<TestimonialType> = ({ name, text, image, role }) => (
    <div
        className="bg-white dark:bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--theme-primary)] cursor-pointer backdrop-blur-md"
    >
        {image && (
            <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[var(--theme-primary)]"
            />
        )}
        <p className="text-lg text-[var(--theme-paragraph)] mb-4">“{text}”</p>
        <span className="font-bold text-[var(--theme-primary)]">{name}</span>
        {role && <span className="text-sm text-gray-500">{role}</span>}
    </div>
);

const Testimonial: React.FC = () => (
    <section className="w-full py-20 bg-[var(--theme-bg)] flex flex-col items-center">
        <div className="max-w-2xl text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-center" style={{ color: "var(--theme-primary)" }}>
                What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl text-[var(--theme-paragraph)]" style={{ transition: "color 0.3s" }}>
                Real stories from real guests. We love making you happy!
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
            {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
            ))}
        </div>
    </section>
);

export default Testimonial;