"use client";
import React from "react";
import HeroSection from "@/components/normal/hero";
import NavbarComponent from "../components/navbar/navbar";
import AuthWrapper from "@/components/auth/auth";

export default function Home() {
  return (
    <main>
      <AuthWrapper>
        <NavbarComponent />
        <HeroSection />
      </AuthWrapper>
    </main>
  );
}
