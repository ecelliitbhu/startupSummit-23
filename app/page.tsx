"use client";
import React from "react";
import HeroSection from "@/components/normal/hero";
import NavbarComponent from "../components/navbar/navbar";
import AuthWrapper from "@/components/auth/auth";
import MainCarousel from "@/components/carousel/carousel";
export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <MainCarousel/>
      <HeroSection />
    </main>
  );
}
