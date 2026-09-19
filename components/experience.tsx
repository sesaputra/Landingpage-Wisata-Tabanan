const experiences = [
  {
    number: "01",
    title: "Walk Through The Rice Fields",
    description: "Extensive experience in architecture and construction projects.",
  },
  {
    number: "02",
    title: "Chase The Mountain Mist",
    description: "Extensive experience in architecture and construction projects.",
  },
  {
    number: "03",
    title: "Discover Balinese Culture",
    description: "Extensive experience in architecture and construction projects.",
  },
  {
    number: "04",
    title: "Watch The Sun Set By The Sea",
    description: "Extensive experience in architecture and construction projects.",
  },
];

export default function Experience() {
  return (
    <section id="experience-section" className="w-full bg-primary px-8 py-24 md:px-16 lg:px-24">
      <div className="mt-4 mb-8 border-t border-border" />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-highlight">
          Experience 03
        </p>

        {/* Heading kiri + Paragraf kanan, sejajar */}
        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <h2 className="font-serif text-4xl text-border md:text-5xl">
            EXPERIENCE <span className="text-border">TABANAN</span>
          </h2>

          <p className="max-w-sm text-md leading-6 text-highlight md:text-right">
            Immerse yourself in authentic Balinese life where lush green landscapes, ancient cultural traditions, and serene natural beauty come together.
          </p>
        </div>

        <div className="mt-8 mb-8 border-t border-border" />
        
        <div className="mt-16 border-t border-border/40">
          {experiences.map((item) => (
            <div key={item.number} className="border-b border-border/40 py-8">
              <span className="text-sm text-highlight">{item.number}</span>
              <h3 className="mt-1 font-serif text-2xl text-border">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-highlight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}