"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    title: "Concept",
    description: "Align on brand voice, target audience, and creative direction.",
  },
  {
    number: "02",
    title: "Capture",
    description:
      "Filmed on iPhone for authentic, mobile-first quality that feels native to the platform.",
  },
  {
    number: "03",
    title: "Edit",
    description:
      "Quick turnaround editing optimized for Reels, TikTok, and Stories.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Ready-to-post content delivered digitally, formatted for every platform.",
  },
]

export function ProcessSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="process"
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white text-balance">
            How I Work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex flex-col gap-4 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-5xl font-extralight text-gold/20">
                {step.number}
              </span>
              <h3 className="text-sm font-medium uppercase tracking-widest text-white">
                {step.title}
              </h3>
              <div className="w-8 h-px bg-gold/30" />
              <p className="text-sm text-white/40 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
