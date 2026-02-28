"use client"

import { useInView } from "@/hooks/use-in-view"

const clientGroups = [
  {
    category: "Institutions",
    clients: [
      "Diriyah Company",
      "Diriyah Gate Development",
      "Ministry of Culture",
      "Sports Of All",
    ],
  },
  {
    category: "Restaurants",
    clients: [
      "Flamingo Room",
      "Somewhere",
      "Brunch & Cake",
      "Maiz",
      "Villa Mamas",
      "Angelina",
      "Joe & The Juice",
    ],
  },
  {
    category: "Events",
    clients: [
      "Diriyah Season",
      "Riyadh Marathon",
      "Defines Exhibit 2024",
      "LEAP Exhibition",
      "Global Health Exhibition 2025",
      "City Escape 2025",
    ],
  },
]

export function ClientsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="clients"
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white text-balance">
            Trusted By
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {clientGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-8 text-center">
                {group.category}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {group.clients.map((client, index) => (
                  <div
                    key={client}
                    className={`flex items-center justify-center px-6 py-4 border border-white/5 hover:border-gold/20 transition-all duration-700 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="text-sm font-light tracking-wide text-white/40 hover:text-gold transition-colors duration-300 whitespace-nowrap">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
