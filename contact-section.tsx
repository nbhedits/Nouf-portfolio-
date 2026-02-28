"use client"

import { Mail, MapPin, Instagram } from "lucide-react"
import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

export function ContactSection() {
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white text-balance">
            {"Let's Work Together"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-white/50 font-light leading-relaxed">
              Interested in collaborating? I&apos;d love to hear about your project.
              Reach out and let&apos;s create something extraordinary together.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:nbhedits@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-white/50 group-hover:text-gold transition-colors">
                  nbhedits@gmail.com
                </span>
              </a>

              <a
                href="https://instagram.com/bynouf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-white/50 group-hover:text-gold transition-colors">
                  @bynouf
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-white/50">Riyadh, KSA</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-6 transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white font-light focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white font-light focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white font-light focus:outline-none focus:border-gold/40 transition-colors resize-none placeholder:text-white/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="self-start border border-gold/40 px-8 py-3 text-sm uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-black transition-all duration-500"
            >
              {submitted ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
