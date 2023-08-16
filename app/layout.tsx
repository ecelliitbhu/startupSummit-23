import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import Navbar from "@/components/main-nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Startup Summit Bangalore",
  description:
    "The Digital Startup Summit 2023 is a groundbreaking two-day event that brings together aspiring entrepreneurs, seasoned professionals, industry experts, and investors from across the globe to the vibrant city of Bengaluru.",
  keywords: [
    "Digital",
    "Startup",
    "Summit",
    "Summit 2023",
    "Bangalore",
    "Digital Summit",
    "Startup Summit",
    "Summit Bangalore",
    "Bangalore Startups",
    "Digital Bangalore",
    "Digital Startup Summit Bangalore",
    "IIT BHU E-Cell",
    "IIT BHU Entrepreneurship Cell",
    "Startup event Bangalore",
    "Bangalore entrepreneurship summit",
    "IIT BHU startup conference",
    "Digital innovation summit",
    "Technology startup event",
    "Startup ecosystem conference",
    "Bangalore technology conference",
    "Entrepreneurship networking event",
    "IIT BHU startup seminar",
    "Digital economy conference",
    "Tech startup showcase",
    "Innovators meet Bangalore",
    "E-Cell conference Bangalore",
    "Digital entrepreneurship seminar",
    "IIT BHU startup workshop",
    "Entrepreneurial insights Bangalore",
    "Startup pitch competition",
    "Emerging technology trends",
    "IIT BHU startup ecosystem",
    "Digital disruption summit",
    "Entrepreneurial success stories",
    "Bangalore business innovation",
    "Technology entrepreneurship event",
    "Digital transformation conference",
    "IIT BHU entrepreneurship summit",
    "Startup funding insights",
    "Innovation in digital startups",
    "E-Cell IIT BHU event",
    "Bangalore startup ecosystem",
    "Tech entrepreneurship panel",
    "IIT BHU startup mentorship",
    "Digital marketing strategies",
    "Startup growth strategies",
    "Bangalore innovation conference",
    "IIT BHU startup incubation",
    "Women in entrepreneurship panel",
    "Sustainability in startups",
    "Bangalore investor networking",
    "Startup accelerators talk",
    "IIT BHU startup pitch",
    "Artificial intelligence startups",
    "Future of digital startups",
    "Bangalore entrepreneurship trends",
    "Tech innovation showcase",
    "IIT BHU startup resources",
    "Digital commerce startups",
    "Startup collaboration strategies",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-min`}>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
