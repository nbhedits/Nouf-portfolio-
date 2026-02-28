import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#"
          className="text-sm font-light tracking-[0.3em] uppercase text-white/40"
        >
          Nouf
        </a>

        <div className="flex items-center gap-6">
          <a
            href="mailto:nbhedits@gmail.com"
            className="text-white/30 hover:text-gold transition-colors"
            aria-label="Email Nouf"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href="https://instagram.com/bynouf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-gold transition-colors"
            aria-label="Nouf on Instagram"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>

        <p className="text-xs text-white/20 tracking-wide">
          {"2025 All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
