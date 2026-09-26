import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalarium — Learn. Explore. Grow.",
  description:
    "A place to learn, explore, and grow — without the pressure. Relatable mentors, guidance shaped around your interests and strengths.",
  keywords: [
    "Kalarium",
    "Peer Mentorship",
    "Self-Directed Learning",
    "IISER",
    "IIT",
    "First Principles",
    "Physics Mentorship",
    "Mathematics",
    "Medical College",
    "Student Well-being",
  ],
  openGraph: {
    title: "Kalarium — Learn. Explore. Grow.",
    description:
      "A place to learn, explore, and grow — without the pressure. Relatable mentors, guidance shaped around your interests and strengths.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#06060a] text-[#f8fafc] font-sans antialiased selection:bg-purple-900/60 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}

