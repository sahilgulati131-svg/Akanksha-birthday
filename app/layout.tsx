import type { Metadata } from "next";
import { Caveat, EB_Garamond, Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Akanksha! 🎂",
  description: "A special birthday surprise for Akanksha",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${caveat.variable} ${ebGaramond.variable} h-full`}
    >
      <body className="min-h-full font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
