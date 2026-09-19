import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/images/bg-1.jpg"
        alt="Tabanan, Bali landscape"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />

      <div className="absolute top-0 right-15 bottom-10 left-15 overflow-hidden rounded-xl md:right-15 md:bottom-25 md:left-15">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(0,0,0,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        <div className="relative z-10 flex h-full flex-col justify-center pl-10 pr-8 md:pl-40 md:pr-16">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Tabanan - Bali Indonesia
          </div>

          <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
            WHERE <br />
            BALI <br />
            BREATHES.
          </h1>

          <p className="mt-6 max-w-sm text-sm text-white/80 md:text-base">
            Discover a quieter side of Bali,
            <br className="hidden md:block" />
            where mountains meet rice fields and traditions live on.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Explore Tabanan
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}