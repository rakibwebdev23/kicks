"use client";

import { Button } from "@/components/ui/button";
import CommonWrapper from "@/common/CommonWrapper";
import ProductCard from "@/components/ProductCard";

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
        <section id="new-drops" className="py-10 md:py-24">
            <CommonWrapper>
                <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-6 md:gap-0 mb-8 md:mb-12">
                    <h2 className="font-semibold text-[#232321] uppercase font-['Rubik',sans-serif] leading-[100%] md:leading-[95%] tracking-[0%] text-[24px] md:text-[74px] max-w-[800px]">
                        NEW DROPS
                    </h2>
                    <Button className="bg-[#4A69E2] border-0 hover:bg-[#3a56c4] text-white rounded-lg px-8 py-3 text-sm font-semibold h-auto uppercase tracking-wide cursor-pointer w-full md:w-auto">
                        SHOP NEW DROPS
                    </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {newDropsProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
}
