"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import CommonWrapper from "@/common/CommonWrapper";

const categories = [
    {
        id: 1,
        name: "LIFESTYLE SHOES",
        image: "/images/categories-1.png",
    },
    {
        id: 2,
        name: "BASKETBALL SHOES",
        image: "/images/categories-2.png",
    },
];

export default function Categories() {
    return (
        <section id="categories" className="overflow-hidden bg-[#232321] pt-10 md:pt-20">
            <div className="left-0 w-full h-full" />
            <div className="" />

            <div className="">
                <CommonWrapper>
                    <div className="flex items-center justify-between mb-8 md:mb-10">
                        <h2 className="font-['Rubik',sans-serif] font-semibold text-[24px] md:text-[74px] leading-[100%] md:leading-[95%] tracking-[0%] uppercase text-white">
                            CATEGORIES
                        </h2>

                        <div className="flex gap-[8px]">
                            <button
                                aria-label="Previous category"
                                className="bg-white/30 hover:bg-white/40 text-[#E7E7E3] rounded-[8px] flex justify-center items-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] transition-colors cursor-pointer"
                            >
                                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button
                                aria-label="Next category"
                                className="bg-white hover:bg-gray-100 text-[#232321] rounded-[8px] flex justify-center items-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] transition-colors cursor-pointer"
                            >
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                    </div>
                </CommonWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 xl:pl-[305px]">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`relative w-full h-[350px] md:h-[600px] flex flex-col justify-between group cursor-pointer overflow-hidden ${category.id === 1 ? "bg-[#ECEEF0] rounded-none md:rounded-tl-[64px]" : "bg-[#F6F6F6] rounded-none"
                                }`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="relative w-full h-full md:w-[480px] md:h-[600px]">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-contain md:object-cover sm:object-contain transition-transform duration-500 ${category.id === 1 ? "-scale-x-100" : ""}`}
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-[24px] left-[24px] right-[24px] md:bottom-[40px] md:left-[40px] md:right-[40px] flex justify-between items-end">
                                <h3 className="font-['Rubik',sans-serif] font-semibold text-[16px] md:text-[24px] leading-[100%] tracking-[0%] uppercase text-[#232321] max-w-[150px] md:max-w-[200px]">
                                    {category.name}
                                </h3>

                                <button className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#232321] text-white flex items-center justify-center rounded-[8px] hover:bg-[#4A69E2] transition-colors duration-300 cursor-pointer">
                                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
