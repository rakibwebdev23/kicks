"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import CommonWrapper from "@/common/CommonWrapper";
import { useGetAllCategoriesQuery, Category } from "@/redux/api/api";
import { CategorySkeleton } from "./ui/LoadingSkeleton";
import ErrorState from "./ui/ErrorState";

export default function Categories() {
    const { data: categoriesData, isLoading, isError, refetch } = useGetAllCategoriesQuery();

    // Filter and limit categories to 2 as per the original design grid (but usually 2 or 4 works well)
    // The design has a 2-column grid. Let's stick to 2.
    const categories = categoriesData?.filter((cat: Category) => cat.image && !cat.image.includes("placeimg.com")).slice(0, 2) || [];

    return (
        <section id="categories" className="overflow-hidden bg-[#232321] pt-10 md:pt-20">
            <CommonWrapper>
                <div className="flex items-center justify-between mb-8 md:mb-10">
                    <h2 className="font-['Rubik',sans-serif] font-semibold text-[24px] md:text-[74px] leading-[100%] md:leading-[95%] tracking-[0%] uppercase text-white">
                        CATEGORIES
                    </h2>

                    <div className="flex gap-[8px]">
                        <button
                            aria-label="Previous category"
                            className="bg-[#858582] rounded-[8px] flex justify-center items-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] transition-colors cursor-pointer border-0"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#232321]" />
                        </button>
                        <button
                            aria-label="Next category"
                            className="bg-[#E7E7E3] rounded-[8px] flex justify-center items-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] transition-colors hover:bg-[#4A69E2] cursor-pointer border-0 group"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#232321] group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>
            </CommonWrapper>

            {isLoading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 pl-[18px] xl:pl-[305px]">
                    {[1, 2].map((i) => (
                        <CategorySkeleton key={i} />
                    ))}
                </div>
            ) : isError ? (
                <div className="px-4 pb-20">
                    <ErrorState onRetry={refetch} />
                </div>
            ) : categories.length === 0 ? (
                <div className="text-center py-20 text-gray-400">No categories found.</div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 pl-[18px] xl:pl-[305px]">
                    {categories.map((category: Category, index: number) => (
                        <div
                            key={category.id}
                            className={`relative w-full h-[350px] md:h-[600px] flex flex-col justify-between group cursor-pointer overflow-hidden ${index === 0 ? "bg-[#ECEEF0] rounded-tl-[24px] md:rounded-tl-[64px] " : "bg-[#F6F6F6] rounded-none"
                                }`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="relative w-full h-full md:w-[480px] md:h-[600px]">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-contain md:object-cover sm:object-contain transition-transform duration-500 ${index === 0 ? "-scale-x-100" : ""}`}
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-[24px] left-[24px] right-[24px] md:bottom-[40px] md:left-[40px] md:right-[40px] flex justify-between items-end">
                                <h3 className="font-['Rubik',sans-serif] font-semibold text-[16px] md:text-[24px] leading-[100%] tracking-[0%] uppercase text-[#232321] max-w-[150px] md:max-w-[200px]">
                                    {category.name}
                                </h3>

                                <button className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#232321] text-white flex items-center justify-center rounded-[8px] hover:bg-[#4A69E2] transition-colors duration-300 cursor-pointer border-0">
                                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
