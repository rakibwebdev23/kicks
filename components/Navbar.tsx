"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import CommonWrapper from "@/common/CommonWrapper";
import { FaUser } from "react-icons/fa";
import { useAppSelector } from "@/redux/store/hook";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const cartItems = useAppSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "pt-0" : "pt-8"}`}>
            <CommonWrapper>
                <nav
                    id="navbar"
                    className={`bg-white transition-all duration-300 px-4 py-4 md:px-8 ${scrolled
                        ? "rounded-none md:rounded-b-3xl md:py-4 shadow-sm"
                        : "rounded-[24px] md:rounded-3xl md:py-8"
                        }`}
                >
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Toggle menu"
                                className="md:hidden rounded-full hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="size-6 text-[#232321]" />
                                ) : (
                                    <Menu className="size-6 text-[#232321]" />
                                )}
                            </Button>

                            <div className="hidden md:flex items-center gap-[40px]">
                                <Link
                                    href="/"
                                    className="text-base font-semibold text-[#232321] hover:text-[#4A69E2] transition-colors font-['Rubik',sans-serif] leading-[100%] tracking-[0%]"
                                >
                                    New Drops 🔥
                                </Link>
                                <Link
                                    href="/"
                                    className="text-base font-semibold text-[#232321] hover:text-[#4A69E2] transition-colors font-['Rubik',sans-serif] leading-[100%] tracking-[0%] flex items-center gap-1"
                                >
                                    Men
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#232321" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/"
                                    className="text-base font-semibold text-[#232321] hover:text-[#4A69E2] transition-colors font-['Rubik',sans-serif] leading-[100%] tracking-[0%] flex items-center gap-1"
                                >
                                    Women
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#232321" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/"
                            className="absolute left-1/2 -translate-x-1/2"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="KICKS logo"
                                width={128}
                                height={32}
                                className="w-[80px] h-[20px] md:w-[128px] md:h-[32px]"
                                priority
                            />
                        </Link>

                        <div className="flex items-center gap-[16px] md:gap-[40px]">
                            <Button variant="ghost" size="icon" aria-label="Search" className="hidden md:flex rounded-full hover:bg-gray-100">
                                <Search className="size-5 text-[#232321]" />
                            </Button>

                            <Button variant="ghost" size="icon" aria-label="User account" className="rounded-full hover:bg-gray-100">
                                <FaUser className="size-5 text-[#232321]" />
                            </Button>

                            <Link href="/cart">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Shopping cart"
                                    className="relative rounded-full hover:bg-gray-100"
                                >
                                    <Badge className="w-[32px] h-[32px] p-[10px] gap-[10px] flex items-center justify-center bg-[#FFA52F] text-[#232321] text-[16px] font-bold border-0 hover:bg-[#FFA52F] rounded-full">
                                        {cartCount}
                                    </Badge>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="border-t border-[#f0f0ee] mt-4 pt-2 pb-2 md:hidden">
                            <Link
                                href="/"
                                className="block py-3 text-base font-semibold text-[#232321] border-b border-[#f0f0ee]"
                            >
                                New Drops 🔥
                            </Link>
                            <Link
                                href="/"
                                className="block py-3 text-base font-medium text-[#232321] border-b border-[#f0f0ee]"
                            >
                                Men
                            </Link>
                            <Link
                                href="/"
                                className="block py-3 text-base font-medium text-[#232321]"
                            >
                                Women
                            </Link>
                        </div>
                    )}
                </nav>
            </CommonWrapper>
        </div>
    );
}
