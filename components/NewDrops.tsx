"use client";

import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

// ===== STATIC DATA =====
// This is the product data for the "New Drops" section
// In a real app, this would come from an API or database
const newDropsProducts = [
    {
        id: 1,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-1.png",
        isNew: true,
    },
    {
        id: 2,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-2.png",
        isNew: true,
    },
    {
        id: 3,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-3.png",
        isNew: true,
    },
    {
        id: 4,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-4.png",
        isNew: true,
    },
];

export default function NewDrops() {
    return (
        <section id="new-drops" className="py-16">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* ===== Section Header ===== */}
                <div className="flex items-end justify-between mb-8">
                    {/* Left: Title */}
                    <h2
                        className="font-extrabold text-[#232321] leading-tight max-w-[400px]"
                        style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                    >
                        DON&apos;T MISS OUT
                        <br />
                        NEW DROPS
                    </h2>

                    {/* Right: "Shop New Drops" button using Shadcn Button */}
                    <Button className="bg-[#4A69E2] hover:bg-[#3a56c4] text-white rounded-lg px-6 text-sm font-semibold">
                        SHOP NEW DROPS
                    </Button>
                </div>

                {/* ===== Products Grid ===== */}
                {/* 4 columns on desktop, 2 on tablet/mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {newDropsProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
