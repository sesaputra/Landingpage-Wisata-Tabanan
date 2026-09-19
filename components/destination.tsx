import Image from "next/image";

const destinations = [
  {
    name: "Jatiluwih",
    category: "Rice terraces",
    badge: "UNESCO World Heritage",
    image: "/images/bg-1.jpg",
  },
  {
    name: "Tanah Lot",
    category: "Coastal temple",
    badge: "UNESCO World Heritage",
    image: "/images/tanah lot.jpeg",
  },
  {
    name: "Bedugul",
    category: "Coastal temple",
    badge: "UNESCO World Heritage",
    image: "/images/bedugul-1.jpg",
  },
];

export default function Destination() {
    return (
        <section id="destination-section" className="w-full bg-secondary px-8 py-24 md:px-16 lg:px-24">
            <div className="mt-4 mb-8 border-t border-muted" />
            <div className="mx-auto max-w-6xl">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    Destination 02
                </p>
                <h2 className="mt-3 font-serif text-4xl text-border md:text-5xl">
                    EXPLORE <span className="italic text-foreground">tabanan</span>
                </h2>
                <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row">
                    <p className="mt-3 max-w-sm text-md leading-6">
                    Beyond the famous beaches lies Tabanan, a tranquil haven of endless rice terraces, sacred temples, and untamed natural beauty.
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-20">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16"
            >

              <div className="w-full max-w-[200px] shrink-0">
                <h3 className="border-b border-muted pb-2 text-lg font-semibold uppercase tracking-[0.05em] text-foreground">
                  {item.name}
                </h3>
                <p className="mt-2 text-md text-muted">{item.category}</p>
                <p className="mt-1 text-md text-foreground">{item.badge}</p>
              </div>

              <div className="relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-2xl">
  <Image
    src={item.image}
    alt={item.name}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 700px"
  />
</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="rounded-full border border-muted px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-white"
          >
            More Destination
            <span aria-hidden="true" className="ml-2">→</span>
          </button>
        </div>
      </div>
        </section>
    );
}