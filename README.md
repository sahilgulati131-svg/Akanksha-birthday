# Birthday Wish App

A fun, interactive Next.js birthday surprise page with floating balloons, a photo gallery, and playful yes/no questions.

## Features

- **Dynamic config** — Edit one file to customize everything
- **Floating balloons** — Animated balloons across the screen
- **Photo gallery** — Carousel with stalking apology message
- **Interactive questions** — Yes/No buttons (the "No" button runs away!)
- **Confetti** — Bursts when they click "Yes"
- **Final surprise** — Special message after all questions are answered

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customize Everything

Edit **`config/birthday.ts`**:

```ts
export const birthdayConfig = {
  name: "Sarah",
  age: 25,
  birthdayMessage: "...",
  stalkingApology: "...",
  photos: [
    { src: "/photos/photo1.jpg", caption: "..." },
  ],
  questions: [
    {
      id: "q1",
      question: "Do you think you're amazing?",
      yesResponse: "Correct!",
      noResponse: "Wrong! Look at these photos",
    },
  ],
  finalMessage: "...",
};
```

## Add Their Photos

1. Save photos to `public/photos/`
2. Update the `photos` array in `config/birthday.ts`

## Deploy

```bash
npm run build
```

Deploy to Vercel for free.
