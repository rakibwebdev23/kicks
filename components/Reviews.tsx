"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "./ui/button";

const reviews = [
    {
        id: 1,
        title: "Good Quality",
        text: "I highly recommend shopping from kicks",
        rating: 5,
        ratingValue: "5.0",
        avatar: "/images/review-1.png",
        productImage: "/images/review-shoe-1.png",
    },
    {
        id: 2,
        title: "Good Quality",
        text: "I highly recommend shopping from kicks",
        rating: 5,
        ratingValue: "5.0",
        avatar: "/images/review-2.png",
        productImage: "/images/review-shoe-2.png",
    },
    {
        id: 3,
        title: "Good Quality",
        text: "I highly recommend shopping from kicks",
        rating: 5,
        ratingValue: "5.0",
        avatar: "/images/review-3.png",
        productImage: "/images/review-shoe-3.png",
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="pt-10 md:pt-24 pb-10 md:pb-16 bg-[#E7E7E3]">
            <CommonWrapper>
                <div className="flex justify-between items-center mb-8 md:mb-12">
                    <h2 className="font-heading font-semibold uppercase text-kicks-dark text-[24px] md:text-[74px] leading-[100%] md:leading-[95%]">
                        Reviews
                    </h2>
                    <Button className="bg-[#4A69E2] border-0 hover:bg-[#3a56c4] text-white rounded-lg px-8 py-3 text-sm font-semibold h-auto uppercase tracking-wide cursor-pointer">
                        See All
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="group bg-white rounded-[16px] md:rounded-[32px] overflow-hidden flex flex-col h-full shadow-sm"
                        >
                            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <Image
                                        src={review.avatar}
                                        alt="Reviewer"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="font-heading font-semibold text-kicks-dark text-[20px] md:text-[24px] leading-tight mb-2 pr-16 md:pr-20">
                                    {review.title}
                                </h3>

                                <p className="font-open-sans font-normal text-kicks-gray text-[14px] md:text-[16px] leading-[1.2] mb-4 max-w-[80%]">
                                    {review.text}
                                </p>

                                <div className="flex items-center gap-2 mt-auto">
                                    <div className="flex gap-1">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 md:w-5 md:h-5 fill-[#FFA52F] text-[#FFA52F]"
                                            />
                                        ))}
                                    </div>
                                    <span className="font-heading font-semibold text-kicks-dark text-sm md:text-base">
                                        {review.ratingValue}
                                    </span>
                                </div>
                            </div>

                            <div className="relative flex-1 w-full min-h-[229px] md:min-h-[325px] overflow-hidden">
                                <Image
                                    src={review.productImage}
                                    alt="Product"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out will-change-transform translate-z-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
}
