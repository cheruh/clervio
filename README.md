# Clervio Landing Page

A modern, responsive landing page for Clervio - a behavioral intelligence platform that helps websites understand how users think, feel, and decide.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 📧 Integrated waitlist functionality with Loops email service
- 🎭 Smooth animations with Framer Motion
- 📱 Progressive Web App (PWA) support
- 🔍 SEO optimized with proper meta tags and sitemap
- 🚀 Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS and shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Loops account for email service (optional for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clervio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Loops API key:
```
LOOPS_API_KEY=your_loops_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment on Vercel

### 1. Prepare for Deployment

Ensure your code is committed and pushed to your Git repository.

### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "New Project" and import your repository
3. Configure environment variables in Vercel dashboard:
   - `LOOPS_API_KEY`: Your Loops API key
   - `NEXT_PUBLIC_SITE_URL`: Your production domain

### 3. Configure Loops Email Service

1. Sign up at [Loops](https://loops.so)
2. Get your API key from Settings > API
3. Add the API key to your Vercel environment variables
4. Configure your domain DNS records to point to Loops (if using custom domain)

### 4. Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── waitlist/      # Waitlist API endpoint
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── demo/              # SDK demo page
│   ├── docs/              # Documentation page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── analytics/         # Analytics components
│   ├── layout/           # Layout components (header, footer)
│   ├── sections/         # Page sections (hero, features, etc.)
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
```

## Key Components

- **Hero Section**: Main landing area with value proposition
- **Features**: Showcase of platform capabilities
- **Use Cases**: Real-world applications
- **Testimonials**: Customer feedback and social proof
- **Pricing**: Subscription plans and pricing tiers
- **CTA**: Call-to-action with waitlist signup
- **SDK Demo**: Interactive demonstration of the Clervio SDK

## Environment Variables

| Variable | Description | Required |
|----------|-------------|---------|
| `LOOPS_API_KEY` | Loops email service API key | Yes (for waitlist) |
| `NEXT_PUBLIC_SITE_URL` | Your site's URL | Yes (for SEO) |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Clervio.
