import type { Metadata } from "next";
import { Inter, Instrument_Serif, Poppins, Newsreader } from "next/font/google"; // Newsreader added
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Newsreader (Production Type)
const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700"], /* Italic is auto-included or subset? usually yes */
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oriplex.tech"),
  title: "Oriplex | The Financial Exoskeleton",
  description: "AI Agents for deep financial analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${poppins.variable} ${newsreader.variable}`}
        suppressHydrationWarning
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
