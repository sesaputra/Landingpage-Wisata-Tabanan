import Image from "next/image";

export default function About() {
  return (
    <section id="about-section" className="w-full bg-tabanan-bg px-8 py-24 md:px-16 lg:px-24">
    <div className="mt-4 mb-8 border-t border-black" />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
          About 01
        </p>
        <div className="mt-4 mb-4 border-t border-black" />

        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          THE SOUL OF <span className="text-muted">TABANAN</span>
        </h2>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row">
          <p className="max-w-xs text-sm leading-relaxed text-foreground/80 md:text-base">
            Beyond the famous beaches,
            <br />
            there is another Bali waiting
            <br />
            to be discovered.
          </p>

          <p className="max-w-xs text-sm leading-relaxed text-foreground/80 md:text-right md:text-base">
            Rice fields.
            <br />
            Sacred temples.
            <br />
            Ancient forests.
            <br />
            Quiet villages.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">

  <figure className="flex flex-col gap-4">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <Image
        src="/images/bedugul-1.jpg"
        alt="Bedugul, Tabanan"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <figcaption className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
      Bedugul
    </figcaption>
  </figure>

  <figure className="flex flex-col gap-4">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <Image
        src="/images/bg-1.jpg"
        alt="Rice terraces in Tabanan"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <figcaption className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
      Rice Terraces
    </figcaption>
  </figure>

  <figure className="flex flex-col gap-4 md:col-span-2 md:mx-auto md:w-full md:max-w-sm">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <Image
        src="/images/pasut.jpg"
        alt="Pantai di Tabanan"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
    <figcaption className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
      Pantai
    </figcaption>
  </figure>
</div>
      </div>
    </section>
  );
}