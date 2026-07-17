import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Parv Kajla | AI & ML Engineer – Portfolio",
  description:
    "Portfolio of Parv Kajla — an AI & ML Engineer passionate about building AI-powered applications that create real-world impact. Specializing in Computer Vision, Full-Stack Development, and Cloud Technologies.",
  keywords: [
    "Parv Kajla",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Parv Kajla" }],
  openGraph: {
    title: "Parv Kajla | AI & ML Engineer",
    description:
      "Building AI-powered applications that create real-world impact.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
