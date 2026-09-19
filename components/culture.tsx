import Image from "next/image";

export default function Culture() {
  return (
    <section id="culture-section" className="w-full bg-tabanan-bg px-8 py-24 md:px-16 lg:px-24">
      <div className="mt-4 mb-8 border-t border-black" />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Culture 04
        </p>
        <h2 className="mt-3 font-serif text-4xl text-border md:text-5xl">
          CULTURE
        </h2>

        {/* Subtitle kiri + teks kanan, sejajar */}
        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="mt-3 max-w-sm text-md leading-6">
            More than a destination.
          </p>

          <p className="text-md max-w-sm text-foreground">
            Tabanan is a living culture.
          </p>
        </div>

        {/* Galeri 2 gambar besar, bertumpuk vertikal */}
        <div className="mt-12 flex flex-col gap-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/puri.jpg"
              alt="Balinese culture in Tabanan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/pasut.jpg"
              alt="Traditional Balinese architecture in Tabanan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}