"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import CommonWrapper from "@/common/CommonWrapper";

export default function HeroBanner() {
    return (
        <section id="hero-banner" className="pb-10">
            <CommonWrapper>
                <div className="mt-5 mb-5 md:mt-8 md:mb-8">
                    <h1
                        className="uppercase w-full flex justify-between items-center text-[clamp(60px,15vw,223.5px)] font-['Rubik',sans-serif] font-bold leading-[100%] tracking-[0%]"
                    >
                        <span className="text-[#232321]">DO IT</span>
                        <span className="text-[#4A69E2]">RIGHT</span>
                    </h1>
                </div>

                {/* ===== Featured Nike Air Max Section ===== */}
                <div className="relative rounded-[64px] overflow-hidden min-h-[382px] lg:min-h-[750px]">
                    {/* Main hero image */}
                    <Image
                        src="/images/banner.jpg"
                        alt="Nike Air Max featured shoe on orange background"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Rotated "Nike product of the year" vertical label */}
                    <div className="absolute left-0 top-[80px] z-10">
                        <div
                            className="bg-[#232321] text-white text-[10px] md:text-base font-semibold tracking-[0.15em] uppercase p-6 gap-[10px] whitespace-nowrap rounded-tl-[16px] rounded-bl-[16px] [writing-mode:vertical-lr] rotate-180"
                        >
                            Nike product of the year
                        </div>
                    </div>

                    {/* Bottom-left text overlay */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                        <h2
                            className="text-[24px] md:text-[74px] font-semibold leading-[100%] tracking-[0%] uppercase mb-2 font-['Rubik',sans-serif]"
                        >
                            NIKE AIR MAX
                        </h2>
                        <p className="text-[14px] md:text-[24px] font-semibold opacity-90 max-w-[473px] mb-5 leading-[100%] tracking-[0%] font-['Open_Sans',sans-serif]">
                            Nike introducing the new air max for
                            everyone&apos;s comfort
                        </p>

                        <Button className="bg-[#4A69E2] hover:bg-[#3a56c4] text-white rounded-lg px-7 py-3 text-sm font-medium tracking-wide h-auto transition-all duration-200 hover:scale-[1.02]">
                            SHOP NOW
                        </Button>
                    </div>

                    {/* Right side thumbnail images - overlaid on the banner */}
                    <div className="absolute top-[230px] left-[278px] w-[64px] h-[136px] md:top-[382px] md:left-[1128px] md:w-[160px] md:h-[336px] flex flex-col gap-[8px] md:gap-[16px] z-10">
                        <div className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-[8px] md:rounded-[32px] overflow-hidden relative border-[1px] border-[#E7E7E3] md:border-[3px] shadow-lg">
                            <Image
                                src="/images/banner-up1.jpg"
                                alt="Nike Air Max thumbnail view 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-[8px] md:rounded-[32px] overflow-hidden relative border-[1px] border-[#E7E7E3] md:border-[3px] shadow-lg">
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
