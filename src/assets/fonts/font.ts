import { Inter, Roboto } from "next/font/google";

// when loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// this is not a variable font, so we need to specify the font weight
export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
