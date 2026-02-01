# DAN Portal

A modern Next.js portal application that aggregates all DAN web links with beautiful minimal slide animations.

## Features

- 🎨 Modern, minimal design
- ✨ Smooth slide animations on hover
- 📱 Fully responsive
- 🌙 Dark mode support
- 🚀 Built with Next.js 14 and TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dan-portal/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Portal.tsx      # Main portal component
│   └── LinkCard.tsx    # Link card with slide animation
├── data/               # Data files
│   └── links.ts        # Portal links configuration
└── public/             # Static files
    └── images/         # Portal images
```

## Customization

Edit `data/links.ts` to add, remove, or modify portal links.

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios
