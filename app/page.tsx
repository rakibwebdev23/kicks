import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import NewDrops from "@/components/NewDrops";
import Categories from "@/components/Categories";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <HeroBanner />
        <NewDrops />
        <Categories />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
