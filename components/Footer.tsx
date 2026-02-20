"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#232321] text-white pt-16">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* ===== Footer Links Grid ===== */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#333330]">
                    {/* Column 1: About Us */}
                    <div className="md:col-span-1">
                        <h3 className="text-base font-bold text-[#FFA52F] mb-4">
                            About us
                        </h3>
                        <p className="text-[13px] text-[#A0A09E] leading-relaxed max-w-[280px]">
                            We are the biggest hyperstore in the universe. We got you all
                            covered with our exclusive collections and latest drops.
                        </p>
                    </div>

                    {/* Column 2: Categories */}
                    <div>
                        <h3 className="text-base font-bold text-[#FFA52F] mb-4">
                            Categories
                        </h3>
                        <ul className="list-none p-0 space-y-2">
                            {[
                                "Runners",
                                "Sneakers",
                                "Basketball",
                                "Outdoor",
                                "Golf",
                                "Hiking",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="text-[13px] text-[#A0A09E] hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-base font-bold text-[#FFA52F] mb-4">
                            Company
                        </h3>
                        <ul className="list-none p-0 space-y-2">
                            {["About", "Contact", "Blogs"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="text-[13px] text-[#A0A09E] hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h3 className="text-base font-bold text-[#FFA52F] mb-4">
                            Follow us
                        </h3>
                        <div className="flex gap-3">
                            {/* Social icons using Shadcn Button ghost + icon */}
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Twitter, label: "Twitter" },
                                { Icon: Youtube, label: "YouTube" },
                                { Icon: FaTiktok, label: "TikTok" },
                            ].map(({ Icon, label }) => (
                                <Button
                                    key={label}
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                    className="size-9 rounded-full bg-[#333330] text-white hover:bg-[#4A69E2] hover:text-white"
                                >
                                    <a href="#" aria-label={label}>
                                        <Icon className="size-4" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== Large KICKS Logo at Bottom ===== */}
                <div className="pt-10 pb-5 text-center overflow-hidden">
                    <h2
                        className="font-black text-[#333330] leading-none tracking-wider select-none"
                        style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
                    >
                        KICKS
                    </h2>
                </div>

                {/* ===== Copyright ===== */}
                <div className="text-center py-4 border-t border-[#333330]">
                    <p className="text-xs text-[#70706E]">© All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
