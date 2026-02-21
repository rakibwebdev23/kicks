"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ===== STATIC DATA =====
// Review data - in a real app this would come from an API
const reviews = [
    {
        id: 1,
        name: "Good Quality",
        text: "I highly recommend shopping here. The quality is amazing and they have a wide selection of sneakers.",
        rating: 5,
        avatar: "/images/reviewer-1.png",
    },
    {
        id: 2,
        name: "Good Quality",
        text: "I highly recommend shopping here. The quality is amazing and customer service is top notch.",
        rating: 5,
        avatar: "/images/reviewer-1.png",
    },
    {
        id: 3,
        name: "Good Quality",
        text: "I highly recommend shopping here. The delivery was fast and the shoes were exactly as pictured.",
        rating: 5,
        avatar: "/images/reviewer-1.png",
    },
];

import CommonWrapper from "@/common/CommonWrapper";

export default function Reviews() {
    return (
        <section id="reviews" className="py-16">
            <CommonWrapper>
                {/* ===== Section Header ===== */}
                <h2
                    className="font-bold text-[#232321] uppercase mb-8"
                    style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
                >
                    Reviews
                </h2>

                {/* ===== Reviews Grid ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((review) => (
                        // Using Shadcn Card for each review
                        <Card
                            key={review.id}
                            className="border-0 shadow-none hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl bg-white"
                        >
                            <CardContent className="p-6">
                                {/* Star Rating - using Lucide Star icons */}
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-4 fill-[#FFA52F] text-[#FFA52F]"
                                        />
                                    ))}
                                </div>

                                {/* Review Title */}
                                <h3 className="text-base font-bold text-[#232321] mb-2">
                                    {review.name}
                                </h3>

                                {/* Review Text */}
                                <p className="text-[13px] text-[#70706E] leading-relaxed mb-4">
                                    {review.text}
                                </p>

                                {/* Reviewer Avatar */}
                                <div className="size-10 rounded-full overflow-hidden relative">
                                    <Image
                                        src={review.avatar}
                                        alt="Reviewer avatar"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CommonWrapper>
        </section>
    );
}
