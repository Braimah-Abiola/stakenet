"use client";

import Hero from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navbar";
import PainPoint from "@/components/sections/pain-point";
import Faq from "@/components/ui/faq";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main>
      <div id="home" className="h-[7.2rem]" />
      <Hero />
      <div className="h-[25rem]" />

      <PainPoint />
      <div className="h-[10rem]" />

      <Faq />
    </main>
  );
}