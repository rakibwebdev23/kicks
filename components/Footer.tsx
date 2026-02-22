"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import CommonWrapper from "@/common/CommonWrapper";

export default function Footer() {
    return (
        <footer className="w-full bg-[#E7E7E3] pb-10">
            <CommonWrapper>
                <div className="w-full bg-[#4A69E2] rounded-[24px] md:rounded-[48px] px-4 py-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 min-h-[340px] md:min-h-[500px] mb-[-40px] md:mb-[-80px] pb-[60px] md:pb-[120px]">
                    <div className="flex flex-col gap-4 md:gap-8 max-w-[600px] w-full">
                        <h2 className="text-white font-heading font-semibold text-[32px] md:text-[48px] leading-[100%] uppercase tracking-normal">
                            JOIN OUR KICKSPLUS CLUB & GET 15% OFF
                        </h2>
                        <p className="text-white font-open-sans font-semibold text-[16px] md:text-[20px] leading-[100%]">
                            Sign up for free! Join the community.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2 mt-2 w-full max-w-[450px]">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border border-white rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none flex-grow"
                            />
                            <Button className="bg-[#232321] hover:bg-[#333] text-white rounded-lg px-8 py-3 text-sm font-semibold h-auto uppercase cursor-pointer">
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                    <div className="relative w-[200px] h-[61px] md:w-[367px] md:h-[112px]">
                        <Image
                            src="/images/top-logo.png"
                            alt="KICKS Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="relative z-10 w-full bg-[#232321] rounded-[24px] md:rounded-[48px] pt-12 px-4 pb-[120px] md:pt-20 md:px-10 md:pb-[300px] flex flex-col min-h-[720px] md:min-h-[591px] overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full items-start">
                        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[40%] shrink-0">
                            <h3 className="text-[#FFA52F] font-heading font-semibold text-[24px] md:text-[36px]">
                                About us
                            </h3>
                            <p className="text-[#E7E7E3] font-open-sans font-semibold text-[16px] md:text-[20px]">
                                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 w-full md:w-[60%] justify-between items-start">
                            <div className="flex flex-col gap-4 md:gap-6">
                                <h3 className="text-[#FFA52F] font-heading font-semibold text-[20px] md:text-[24px] ">
                                    Categories
                                </h3>
                                <ul className="flex flex-col gap-3 md:gap-4">
                                    {["Runners", "Sneakers", "Basketball", "Outdoor", "Golf", "Hiking"].map((link) => (
                                        <li key={link}>
                                            <Link href="#" className="text-[#E7E7E3] font-open-sans font-semibold text-[16px] md:text-[20px] leading-[100%] hover:text-[#FFA52F] transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4 md:gap-6">
                                <h3 className="text-[#FFA52F] font-heading font-semibold text-[20px] md:text-[24px]">
                                    Company
                                </h3>
                                <ul className="flex flex-col gap-3 md:gap-4">
                                    {["About", "Contact", "Blogs"].map((link) => (
                                        <li key={link}>
                                            <Link href="#" className="text-[#E7E7E3] font-open-sans font-semibold text-[16px] md:text-[20px] leading-[100%] hover:text-[#FFA52F] transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4 md:gap-6">
                                <h3 className="text-[#FFA52F] font-heading font-semibold text-[20px] md:text-[24px]">
                                    Follow us
                                </h3>
                                <div className="flex gap-4">
                                    <Facebook className="text-[#E7E7E3] hover:text-[#FFA52F] cursor-pointer" />
                                    <Instagram className="text-[#E7E7E3] hover:text-[#FFA52F] cursor-pointer" />
                                    <Twitter className="text-[#E7E7E3] hover:text-[#FFA52F] cursor-pointer" />
                                    <FaTiktok className="text-[#E7E7E3] hover:text-[#FFA52F] cursor-pointer flex items-center" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 max-w-[1320px] h-[150px] md:h-[300px] pointer-events-none px-4 md:px-10">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/bottom-logo.png"
                                alt="KICKS Large Logo"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm font-open-sans text-[#232321]/60">
                    © All rights reserved
                </div>
            </CommonWrapper>
        </footer>
    );
}
