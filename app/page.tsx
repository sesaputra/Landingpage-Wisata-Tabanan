import Hero from "@/components/hero";
import About from "@/components/about";
import Destination from "@/components/destination"
import Experience from "@/components/experience"
import Culture from "@/components/culture"
import Explore from "@/components/explore"

export default function Home() {
  return (
    <main>
    <Hero />
    <About />
    <Destination />
    <Experience />
    <Culture />
    <Explore />
    </main>
  );
}