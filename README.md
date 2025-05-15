This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## Homepage Layout Plan (Order)
- Navbar (sticky)
- Hero Section (Big welcome + CTA Button)
- Menu Preview (some popular dishes)
- About Preview (small intro)
- Testimonials Preview (happy customers)
- Gallery Preview (beautiful photos)
- Footer (contact, address, social links)


## 🔥 Final Project Structure Plan
flavora-v2.0/
├── public/                       # Static assets (images, logos)
│   ├── images/                   # Food, dishes, people, etc.
│   └── icons/                    # SVGs or favicon
│
├── src/
│   ├── app/                      # App Router directory
│   │   ├── layout.tsx           # Root layout (includes header/footer/theme)
│   │   ├── page.tsx             # Homepage (Flavora landing page)
│   │   ├── about/               # About page
│   │   ├── menu/                # Menu page
│   │   ├── contact/             # Contact page
│   │   └── ...                  # Other routes
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── ...
│   │
│   ├── sections/                # Page-specific sections
│   │   ├── SignatureDishes.tsx
│   │   ├── OurJourney.tsx
│   │   ├── FlavoraVibes.tsx
│   │   └── ...
│   │
│   ├── styles/                  # CSS or Tailwind layer files
│   │   ├── globals.css
│   │   ├── variables.css        # Custom props (colors, typography)
│   │   └── ...
│   │
│   ├── lib/                     # Utility functions (e.g., theme toggle, formatters)
│   │   └── theme.ts
│   │
│   ├── constants/               # Static data / dummy API for now
│   │   └── testimonials.ts
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useTheme.ts
│   │
│   └── types/                   # TypeScript interfaces
│       └── testimonial.ts
│
├── .env.local                   # Environment variables
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── package.json
└── README.md
