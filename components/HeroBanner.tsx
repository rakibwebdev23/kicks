"use client";

import Image from "next/image";

import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "./ui/button";

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

                <div className="relative w-full rounded-[24px] md:rounded-[64px] overflow-hidden h-[382px] md:h-auto md:min-h-[750px]">
                    <Image
                        src="/images/banner.jpg"
                        alt="Nike Air Max featured shoe on orange background"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="md:hidden absolute left-0 top-[23px] z-10 origin-top-left -rotate-90 translate-y-[157px]">
                        <div className="w-[157px] h-[30px] bg-[#232321] rounded-b-[8px] flex items-center justify-center p-[8px]">
                            <span className="text-[white] font-['Rubik',sans-serif] font-[600] text-[12px] leading-[100%] whitespace-nowrap">
                                Nike product of the year
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:block absolute left-0 top-[80px] z-10">
                        <div className="bg-[#232321] text-white text-base font-semibold tracking-[0.15em] p-6 gap-[10px] whitespace-nowrap rounded-tl-[16px] rounded-bl-[16px] [writing-mode:vertical-lr] rotate-180">
                            Nike product of the year
                        </div>
                    </div>

                    <div className="absolute bottom-[24px] left-[30px] md:bottom-10 md:left-10 text-white z-10 md:pr-0">
                        <h2 className="text-[24px] md:text-[74px] font-[600] md:font-semibold leading-[100%] md:tracking-[0%] uppercase mb-[8px] md:mb-2 font-['Rubik',sans-serif]">
                            NIKE AIR MAX
                        </h2>
                        <p className="text-[14px] md:text-[24px] font-[600] md:font-semibold opacity-90 max-w-[200px] md:max-w-[473px] mb-[20px] md:mb-5 leading-[100%] md:tracking-[0%] font-['Open_Sans',sans-serif] text-[#E7E7E3] md:text-white">
                            Nike introducing the new air max for
                            everyone&apos;s comfort
                        </p>

                        <Button className="md:hidden bg-[#4A69E2] border-[0px] hover:bg-[#3a56c4] text-white rounded-[8px] px-[24px] py-[12px] text-[14px] font-[500] font-['Inter',sans-serif] leading-[100%] tracking-[0.25px] h-auto uppercase cursor-pointer">
                            SHOP NOW
                        </Button>

                        <Button className="hidden md:inline-flex bg-[#4A69E2] border-[0px] hover:bg-[#3a56c4] text-white rounded-lg px-8 py-3 text-sm font-semibold h-auto uppercase tracking-wide cursor-pointer">
                            SHOP NOW
                        </Button>
                    </div>

                    <div className="absolute bottom-[24px] right-[16px] md:top-[382px] md:left-[1128px] md:bottom-auto md:right-auto flex flex-col gap-[8px] md:gap-[16px] z-10">
                        <div className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-[8px] md:rounded-[32px] overflow-hidden relative border-[1px] border-white md:border-[3px] shadow-lg">
                            <Image
                                src="/images/banner-up1.jpg"
                                alt="Nike Air Max thumbnail view 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-[8px] md:rounded-[32px] overflow-hidden relative border-[1px] md:border-[#E7E7E3] border-white md:border-[3px] shadow-lg">
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
