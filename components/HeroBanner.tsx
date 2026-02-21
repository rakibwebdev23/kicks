"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import CommonWrapper from "@/common/CommonWrapper";

export default function HeroBanner() {
    return (
        <section id="hero-banner" className="pb-10">
            <CommonWrapper>
                {/* ===== "DO IT RIGHT" Tagline ===== */}
                <div className="mt-5 mb-5 md:mt-10 md:mb-10">
                    <h1
                        className="font-bold leading-[100%] uppercase w-full flex justify-between items-center"
                        style={{
                            fontSize: "clamp(60px, 15vw, 223.5px)",
                            fontFamily: "var(--font-heading)"
                        }}
                    >
                        <span className="text-[#232321]">DO IT</span>
                        <span className="text-[#4A69E2]">RIGHT</span>
                    </h1>
                </div>

                {/* ===== Featured Nike Air Max Section ===== */}
                <div className="relative rounded-3xl overflow-hidden flex min-h-[400px] md:min-h-[750px]">
                    {/* Main hero image */}
                    <div className="flex-1 relative min-h-[400px] md:min-h-[750px]">
                        <Image
                            src="/images/banner.jpg"
                            alt="Nike Air Max featured shoe on orange background"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Rotated "Nike product of the year" label */}
                        <div
                            className="absolute left-[-30px] top-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-medium text-white tracking-widest uppercase whitespace-nowrap"
                        >
                            Nike product of the year
                        </div>

                        {/* Bottom-left text overlay */}
                        <div className="absolute bottom-8 left-8 text-white">
                            <h2
                                className="font-extrabold leading-tight mb-2"
                                style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
                            >
                                NIKE AIR MAX
                            </h2>
                            <p className="text-sm opacity-90 max-w-[300px] mb-4">
                                Nike introducing the new air max for everyone&apos;s comfort
                            </p>

                            {/* Using Shadcn Button */}
                            <Button className="bg-[#4A69E2] hover:bg-[#3a56c4] text-white rounded-lg px-6 py-3 text-sm font-semibold">
                                SHOP NOW
                            </Button>
                        </div>
                    </div>

                    {/* Right side thumbnails (hidden on mobile) */}
                    <div className="hidden md:flex flex-col gap-2 p-2 w-[120px] bg-[#E7E7E3]">
                        <div className="rounded-xl overflow-hidden aspect-square relative bg-white">
                            <Image
                                src="/images/banner-up1.jpg"
                                alt="Nike Air Max thumbnail view 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden aspect-square relative bg-white">
                            <Image
                                src="/images/banner-up2.jpg"
                                alt="Nike Air Max thumbnail view 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
}
