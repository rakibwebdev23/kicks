import HeroBanner from "@/components/HeroBanner";
import NewDrops from "@/components/NewDrops";
import Categories from "@/components/Categories";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="pt-24 md:pt-[140px] pb-10 md:pb-24">
      <HeroBanner />
      <NewDrops />
      <Categories />
      <Reviews />
    </main>
  );
}
