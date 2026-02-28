"use client"

import { Film, Camera, Heart, Handshake } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Film,
    title: "Social Media Content",
    description:
      "Reels, Shorts, and Stories crafted for maximum engagement on every platform.",
  },
  {
    icon: Camera,
    title: "Event Coverage",
    description:
      "Recaps and highlights that capture the energy and atmosphere of live events.",
  },
  {
    icon: Heart,
    title: "Lifestyle",
    description:
      "Authentic lifestyle content that resonates with modern, engaged audiences.",
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    description:
      "Sponsored content and collaborations that align with your brand voice and values.",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white text-balance">
            What I Do
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group flex flex-col items-center text-center p-8 border border-white/5 hover:border-gold/20 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/30 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <service.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-white">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
