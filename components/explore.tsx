const mapLegend = [
  { name: "Jatiluwih", color: "bg-white" },
  { name: "Batukaru", color: "bg-white" },
  { name: "Tanah Lot", color: "bg-white" },
  { name: "Bedugul", color: "bg-white" },
  { name: "Kerambitan", color: "bg-white" },
];

export default function ExploreMap() {
  return (
    <section id="map-section" className="w-full bg-primary px-8 py-24 md:px-16 lg:px-24">
      <div className="mt-4 mb-8 border-t border-border/40" />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-highlight">
          Culture 04
        </p>

        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-4xl text-highlight md:text-5xl">
              EXPLORE <span className="text-border">MAP</span>
            </h2>
            <p className="mt-3 text-md leading-6 text-highlight">
              Where will you go next?
            </p>
          </div>

          <p className="text-sm font-medium uppercase tracking-[0.05em] text-highlight/80">
            Tabanan is a living culture.
          </p>
        </div>

        {/* Embed Google Maps */}
        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Wisata Tabanan"
          />
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {mapLegend.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              <span className="text-sm text-highlight">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}