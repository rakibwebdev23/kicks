"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    isNew?: boolean;
}

interface ProductCarouselProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    products: Product[];
    actionButton?: React.ReactNode;
}

export default function ProductCarousel({
    title,
    subtitle,
    products,
    actionButton,
}: ProductCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const totalPages = Math.ceil(products.length / 4);

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-6 md:gap-0 mb-8 md:mb-12">
                <div>
                    {subtitle && (
                        <h2 className="font-semibold text-[#232321] uppercase font-['Rubik',sans-serif] leading-[100%] md:leading-[95%] tracking-[0%] text-[24px] md:text-[74px] max-w-[800px]">
                            {subtitle}
                        </h2>
                    )}
                    <h2 className="font-semibold text-[#232321] uppercase font-['Rubik',sans-serif] leading-[100%] md:leading-[95%] tracking-[0%] text-[24px] md:text-[74px] max-w-[800px]">
                        {title}
                    </h2>
                </div>

                <div className="hidden md:flex gap-[8px] items-center">
                    {actionButton}

                    <div className="flex gap-[8px]">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={isBeginning}
                            className={`w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-[8px] flex justify-center items-center transition-colors cursor-pointer border-0
                                ${isBeginning
                                    ? "bg-[#858582] text-[#E7E7E3] cursor-not-allowed"
                                    : "bg-[#232321] text-white hover:bg-[#4A69E2]"
                                }
                            `}
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            disabled={isEnd}
                            className={`w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-[8px] flex justify-center items-center transition-colors cursor-pointer border-0
                                ${isEnd
                                    ? "bg-[#858582] text-[#E7E7E3] cursor-not-allowed"
                                    : "bg-[#232321] text-white hover:bg-[#4A69E2]"
                                }
                            `}
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile: 2-column grid */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} mobileVariant />
                ))}
            </div>

            {/* Desktop: Swiper carousel */}
            <div className="hidden md:block">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="w-full !overflow-visible md:!overflow-hidden"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {!actionButton && (
                <div className="flex justify-center items-center gap-2 mt-12 md:mt-16">
                    {Array.from({ length: totalPages }).map((_, index) => {
                        const isDotActive = Math.floor(activeIndex / 4) === index;
                        return (
                            <div
                                key={index}
                                className={`w-[48px] h-1 rounded-full transition-colors ${isDotActive ? "bg-[#4A69E2]" : "bg-black/10"
                                    }`}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
