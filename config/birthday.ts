export type BirthdayConfig = {
  name: string;
  age?: number;
  birthdayMessage: string;
  cuteMessage: string;
  cuteMessageSignature?: string;
  photosIntro: string;
  photos: {
    src: string;
    caption?: string;
  }[];
  finalMessage: string;
  finalSignature: string;
};

export const birthdayConfig: BirthdayConfig = {
  name: "AKANKSHA",
  birthdayMessage: "Happy Birthday, Akanksha! 🎂",
  cuteMessage: `I know this is a little extra (okay, very extra 😄) — but you deserve every bit of it.

You're the kind of person who makes ordinary days feel special without even trying. Your smile, your energy, the way you light up a room… it's honestly unfair how amazing you are.

I hope today is filled with laughter, cake, and little moments that make you feel as loved as you make everyone around you feel.

You are so incredibly special, Akanksha. Never forget that. 🌸`,
  cuteMessageSignature: "— Your Goodwisher 💌",
  photosIntro: "A little celebration gallery, just for you, Akanksha 🎊",
  photos: [
    {
      src: "/photos/photo1.svg",
      caption: "Cake time! 🎂",
    },
    {
      src: "/photos/photo2.svg",
      caption: "A little gift for you 🎁",
    },
    {
      src: "/photos/photo3.svg",
      caption: "Up, up and away 🎈",
    },
    {
      src: "/photos/photo4.svg",
      caption: "Pop the confetti! 🎉",
    },
    {
      src: "/photos/photo5.svg",
      caption: "Fireworks in your honor 🎆",
    },
    {
      src: "/photos/photo6.svg",
      caption: "Party hats on! 🥳",
    },
    {
      src: "/photos/photo7.svg",
      caption: "Sweetest treat for the sweetest person 🧁",
    },
    {
      src: "/photos/photo8.svg",
      caption: "Cheers to you! 🥂",
    },
  ],
  finalMessage:
    "Akanksha, wishing you a day as amazing as you are. May this year bring you everything you've been dreaming of! 💖",
  finalSignature: "— Your Goodwisher 💌",
};
