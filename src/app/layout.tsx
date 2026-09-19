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
  title: "Kalarium | Elite Peer Mentorship & 2-Week Upgrade",
  description:
    "First-principles peer mentorship by leaders and scholars from IISER, IIT, and top medical colleges. Accelerate your academic and technical trajectory.",
  keywords: [
    "Kalarium",
    "Peer Mentorship",
    "IISER",
    "IIT",
    "First Principles",
    "Physics Mentorship",
    "Mathematics",
    "Medical College",
  ],
  openGraph: {
    title: "Kalarium | Elite Peer Mentorship",
    description: "Launch your 2-week upgrade with peer mentors from IISER, IIT, and premier institutes.",
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
      <body className="min-h-screen bg-[#06060a] text-[#f8fafc] antialiased selection:bg-purple-900/60 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
