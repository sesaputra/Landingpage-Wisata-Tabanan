import Link from "next/link";

const navigation = [
  { name: "Discover", href: "/" },
  { name: "About", href: "#about-section" },
  { name: "Destination", href: "#destination-section" },
  { name: "Explore", href: "#explore-section" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-12">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-xl font-semibold tracking-[-0.02em] text-white">
              WISATA TABANAN
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-md text-white transition-colors duration-300 hover:text-muted">
                {item.name}
              </Link>
            ))}
             <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-3 rounded-xl border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:bg-muted hover:text-white"
          >
            <span className="text-white">Let&apos;s Explore</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 text-white"
            >
              →
            </span>
          </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="flex w-6 flex-col gap-1.5">
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-full bg-foreground" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
