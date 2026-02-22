"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/ProductCarousel";

const cartCarouselProducts = [
    {
        id: 1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "/images/shoe-1.png",
        isNew: true,
    },
    {
        id: 2,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "/images/shoe-2.png",
        isNew: true,
    },
    {
        id: 3,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "/images/shoe-3.png",
        isNew: true,
    },
    {
        id: 4,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "/images/shoe-4.png",
        isNew: true,
    },
    {
        id: 5,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "/images/shoe-1.png",
        isNew: true,
    },
    {
        id: 6,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: 125,
        image: "/images/shoe-2.png",
        isNew: true,
    },
];

export default function CartPage() {
    return (
        <main className="min-h-screen pt-24 md:pt-[140px] pb-10 md:pb-24">
            <CommonWrapper>
                <div className="mb-10">
                    <h1 className="text-[28px] md:text-[36px] font-semibold text-[#232321] font-heading mb-2">
                        Saving to celebrate
                    </h1>
                    <p className="text-[#232321] text-[14px] md:text-[16px] font-medium font-open-sans">
                        Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
                    </p>
                    <p className="text-[#232321] text-[14px] md:text-[16px] font-medium font-open-sans mt-1">
                        <Link href="#" className="underline">Join us</Link> or <Link href="#" className="underline">Sign-in</Link>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[65%]">
                        <div className="bg-white rounded-[24px] p-6 md:p-8">
                            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#232321] font-heading mb-2">
                                Your Bag
                            </h2>
                            <p className="text-[#70706E] text-[14px] md:text-[16px] font-open-sans mb-8">
                                Items in your bag not reserved- check out now to make them yours.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="w-full sm:w-[200px] aspect-square bg-[#F4F5F4] rounded-[16px] flex items-center justify-center relative flex-shrink-0">
                                    <Image
                                        src="/images/shoe-1.png"
                                        alt="Dropset Trainer Shoes"
                                        layout="fill"
                                        objectFit="contain"
                                        className="p-4"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#232321] font-heading uppercase leading-tight">
                                                DROPSET TRAINER SHOES
                                            </h3>
                                            <p className="text-[#70706E] text-[16px] font-open-sans mt-2">
                                                Men's Road Running Shoes
                                            </p>
                                            <p className="text-[#70706E] text-[16px] font-open-sans">
                                                Enamel Blue/ University White
                                            </p>

                                            <div className="flex items-center gap-6 mt-4">
                                                <div className="flex items-center gap-2 text-[16px] font-semibold text-[#232321]">
                                                    Size 10
                                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L6 6L11 1" stroke="#232321" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center gap-2 text-[16px] font-semibold text-[#232321]">
                                                    Quantity 1
                                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L6 6L11 1" stroke="#232321" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-[20px] md:text-[24px] font-semibold text-[#4A69E2] font-heading">
                                            $130.00
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button className="text-[#232321] hover:text-[#4A69E2] transition-colors">
                                            <Heart className="w-6 h-6" />
                                        </button>
                                        <button className="text-[#232321] hover:text-red-500 transition-colors">
                                            <Trash2 className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[35%]">
                        <div className="p-6 md:p-8">
                            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#232321] font-heading mb-6">
                                Order Summary
                            </h2>

                            <div className="flex flex-col gap-4 text-[16px] font-open-sans font-medium text-[#232321] mb-6">
                                <div className="flex justify-between uppercase">
                                    <span>1 ITEM</span>
                                    <span>$130.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span>$6.99</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sales Tax</span>
                                    <span>-</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-[20px] md:text-[24px] font-semibold text-[#232321] font-heading mb-8 uppercase">
                                <span>Total</span>
                                <span>$136.99</span>
                            </div>

                            <Button className="w-full h-[56px] md:h-[64px] bg-[#232321] hover:bg-[#333] text-white rounded-[8px] flex items-center justify-center transition-colors border-0 mb-4">
                                <span className="text-[14px] md:text-[16px] font-semibold uppercase font-['Rubik',sans-serif] tracking-wider">
                                    CHECKOUT
                                </span>
                            </Button>

                            <Link href="#" className="text-[16px] font-semibold text-[#232321] underline font-open-sans inline-block">
                                Use a promo code
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 md:mt-32">
                    <ProductCarousel
                        title="You may also like"
                        products={cartCarouselProducts}
                    />
                </div>
            </CommonWrapper>
        </main>
    );
}
