// ===== LANDING PAGE =====
// This is the main homepage that combines all section components
// Each section is a separate component for easy maintenance

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
      {/* Navigation Bar - sticky at top */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section: "DO IT RIGHT" + Nike Air Max */}
        <HeroBanner />

        {/* New Drops: Product cards grid */}
        <NewDrops />

        {/* Categories: Lifestyle & Basketball */}
        <Categories />

        {/* Customer Reviews */}
        <Reviews />

        {/* Newsletter CTA: "JOIN OUR KICKSPLUS CLUB" */}
        <Newsletter />
      </main>

      {/* Footer with links & social */}
      <Footer />
    </>
  );
}
