"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Category = "All" | "Cultural" | "Sports" | "Restaurants" | "Events"

interface PortfolioItem {
  src: string
  alt: string
  category: Exclude<Category, "All">
  caption: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    src: "/images/portfolio/cultural-1.jpg",
    alt: "Diriyah heritage architecture at golden hour",
    category: "Cultural",
    caption: "Diriyah & Ministry of Culture",
    description:
      "Heritage storytelling through cinematic visuals that honor Saudi Arabia's rich cultural legacy.",
  },
  {
    src: "/images/portfolio/cultural-2.jpg",
    alt: "Modern cultural exhibition with digital art installations",
    category: "Cultural",
    caption: "Ministry of Culture Exhibition",
    description:
      "Immersive cultural exhibition coverage bridging traditional art with modern digital experiences.",
  },
  {
    src: "/images/portfolio/sports-1.jpg",
    alt: "Dynamic marathon coverage in Riyadh",
    category: "Sports",
    caption: "Riyadh Marathon",
    description:
      "High-energy coverage capturing the spirit and determination of Saudi Arabia's growing sports scene.",
  },
  {
    src: "/images/portfolio/sports-2.jpg",
    alt: "Sports event atmosphere and crowd energy",
    category: "Sports",
    caption: "Sports Of All Events",
    description:
      "Dynamic sports event documentation showcasing the passion and energy of live athletics.",
  },
  {
    src: "/images/portfolio/restaurant-1.jpg",
    alt: "Luxury dining experience at Riyadh restaurant",
    category: "Restaurants",
    caption: "Riyadh Fine Dining",
    description:
      "Mood visuals for top Riyadh dining spots that capture the essence of culinary excellence.",
  },
  {
    src: "/images/portfolio/restaurant-2.jpg",
    alt: "Stylish brunch cafe interior",
    category: "Restaurants",
    caption: "Brunch & Cafe Culture",
    description:
      "Lifestyle food and interior photography celebrating Riyadh's thriving cafe and dining scene.",
  },
  {
    src: "/images/portfolio/events-1.jpg",
    alt: "Glamorous gala event in Riyadh",
    category: "Events",
    caption: "Diriyah Season",
    description:
      "Live event coverage and activations for Saudi Arabia's premier cultural and entertainment seasons.",
  },
  {
    src: "/images/portfolio/events-2.jpg",
    alt: "Tech exhibition with interactive displays",
    category: "Events",
    caption: "LEAP Exhibition",
    description:
      "Professional documentation of large-scale tech expos and innovation exhibitions.",
  },
]

const categories: Category[] = [
  "All",
  "Cultural",
  "Sports",
  "Restaurants",
  "Events",
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)
  const { ref, isInView } = useInView()

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <section
        id="portfolio"
        ref={ref}
        className="relative bg-[#0f0f0f] py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white text-balance">
              Selected Work
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeCategory === cat
                    ? "border-gold text-gold bg-gold/5"
                    : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <button
                key={item.src}
                onClick={() => setLightbox(item)}
                className={`group relative aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                    {item.category}
                  </p>
                  <p className="text-lg font-light text-white text-center text-balance">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/0 group-hover:bg-gold/40 transition-all duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.caption} - ${lightbox.description}`}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                {lightbox.category}
              </p>
              <h3 className="text-xl font-light text-white mb-3">
                {lightbox.caption}
              </h3>
              <p className="text-sm text-white/50 font-light max-w-lg mx-auto leading-relaxed">
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
