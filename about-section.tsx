"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className={`relative aspect-[3/4] overflow-hidden transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/images/nouf-portrait.jpg"
              alt="Portrait of Nouf, content creator based in Riyadh"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-gold/20" />
          </div>
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white">
              I create visual content that drives engagement.
            </h2>
            <div className="w-12 h-px bg-gold/40" />
            <p className="text-white/50 font-light leading-relaxed">
              Based in Riyadh, I collaborate with Saudi Arabia&apos;s most
              prominent brands, cultural institutions, and dining destinations to
              produce compelling visual narratives. From heritage storytelling at
              Diriyah to high-energy sports coverage and luxury restaurant
              content, every frame is crafted with intention.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              My approach is simple: authentic, mobile-first content designed for
              the platforms where audiences live. Shot on iPhone, edited for
              impact, delivered ready to post.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
