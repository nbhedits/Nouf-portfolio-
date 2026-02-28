import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold opacity-0 animate-fade-in-up">
          Content Creator
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] uppercase text-white opacity-0 animate-fade-in-up animation-delay-200 text-balance">
          Nouf
        </h1>
        <p className="mt-6 max-w-md text-base font-light text-white/50 opacity-0 animate-fade-in-up animation-delay-400 leading-relaxed">
          Visual storytelling for brands that demand excellence
        </p>
        <a
          href="#portfolio"
          className="mt-10 inline-block border border-gold/40 px-8 py-3 text-sm uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-black transition-all duration-500 opacity-0 animate-fade-in-up animation-delay-600"
        >
          View Portfolio
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  )
}
