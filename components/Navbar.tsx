"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
    // State to toggle mobile menu open/close
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav
            id="navbar"
            className="sticky top-0 z-50 bg-[#FAFAFA] border-b border-[#E7E7E3]"
        >
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[70px]">
                {/* ===== LEFT: Nav Links (Desktop only) ===== */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-[#232321] hover:text-[#4A69E2] transition-colors"
                    >
                        New Drops 🔥
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium text-[#232321] hover:text-[#4A69E2] transition-colors"
                    >
                        Men
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium text-[#232321] hover:text-[#4A69E2] transition-colors"
                    >
                        Women
                    </Link>
                </div>

                {/* ===== CENTER: Logo ===== */}
                <Link
                    href="/"
                    className="text-[28px] font-extrabold text-[#232321] tracking-[2px] hover:text-[#4A69E2] transition-colors"
                >
                    KICKS
                </Link>

                {/* ===== RIGHT: Action Icons ===== */}
                <div className="flex items-center gap-2">
                    {/* Search Button - using Shadcn ghost button */}
                    <Button variant="ghost" size="icon" aria-label="Search">
                        <Search className="size-5" />
                    </Button>

                    {/* User Account Button */}
                    <Button variant="ghost" size="icon" aria-label="User account">
                        <User className="size-5" />
                    </Button>

                    {/* Cart Button with orange badge count */}
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Shopping cart"
                        className="relative"
                    >
                        <HiOutlineShoppingBag className="size-5" />
                        {/* Shadcn Badge for cart count */}
                        <Badge className="absolute -top-1 -right-1 size-[18px] p-0 flex items-center justify-center bg-[#FFA52F] text-[#232321] text-[10px] font-bold border-0 hover:bg-[#FFA52F]">
                            0
                        </Badge>
                    </Button>

                    {/* Mobile Hamburger Menu Button (shown only on small screens) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle menu"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="size-6" />
                        ) : (
                            <Menu className="size-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* ===== MOBILE MENU DROPDOWN ===== */}
            {isMobileMenuOpen && (
                <div className="bg-[#FAFAFA] border-t border-[#E7E7E3] px-6 pb-4 md:hidden">
                    <Link
                        href="/"
                        className="block py-3 text-base font-semibold text-[#232321] border-b border-[#E7E7E3]"
                    >
                        New Drops 🔥
                    </Link>
                    <Link
                        href="/"
                        className="block py-3 text-base font-medium text-[#232321] border-b border-[#E7E7E3]"
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
    );
}
