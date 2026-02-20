"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ===== STATIC DATA =====
// Category data for the categories section
const categories = [
    {
        id: 1,
        name: "LIFESTYLE SHOES",
        image: "/images/category-lifestyle.png",
    },
    {
        id: 2,
        name: "BASKETBALL SHOES",
        image: "/images/category-basketball.png",
    },
];

export default function Categories() {
    return (
        <section id="categories" className="py-16">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* ===== Section Header ===== */}
                <div className="flex items-center justify-between mb-8">
                    <h2
                        className="font-bold text-[#232321] uppercase"
                        style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
                    >
                        Categories
                    </h2>

                    {/* Navigation arrows using Shadcn Button */}
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Previous category"
                            className="border-2 border-[#232321] bg-transparent hover:bg-[#232321] hover:text-white rounded-lg size-10 transition-all"
                        >
                            <ArrowLeft className="size-[18px]" />
                        </Button>
                        <Button
                            size="icon"
                            aria-label="Next category"
                            className="bg-[#232321] text-white hover:bg-[#4A69E2] rounded-lg size-10 transition-all"
                        >
                            <ArrowRight className="size-[18px]" />
                        </Button>
                    </div>
                </div>

                {/* ===== Categories Grid ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative bg-[#E7E7E3] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                            style={{ aspectRatio: "16/10" }}
                        >
                            {/* Category Image */}
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover"
                            />

                            {/* Category Name Overlay */}
                            <div className="absolute bottom-6 left-6">
                                <h3
                                    className="font-bold text-[#232321] uppercase"
                                    style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
                                >
                                    {category.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
