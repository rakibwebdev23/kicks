"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

// ===== TYPES =====
// Define the shape of data each ProductCard expects
type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    isNew?: boolean; // Optional "New" badge
};

export default function ProductCard({
    id,
    name,
    price,
    image,
    isNew = false,
}: ProductCardProps) {
    return (
        // Using Shadcn Card component for the product container
        <Card className="overflow-hidden border-0 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white rounded-2xl">
            {/* ===== Product Image ===== */}
            <Link href={`/product/${id}`}>
                <div className="relative aspect-square bg-[#F5F5F5]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover p-3"
                    />
                    {/* "New" badge using Shadcn Badge */}
                    {isNew && (
                        <Badge className="absolute top-3 left-3 bg-[#4A69E2] text-white text-[11px] font-bold px-2.5 py-1 rounded-md hover:bg-[#4A69E2] border-0 uppercase">
                            New
                        </Badge>
                    )}
                </div>
            </Link>

            {/* ===== Product Info ===== */}
            <CardContent className="p-4">
                <h3 className="text-[13px] font-bold text-[#232321] uppercase leading-tight mb-3">
                    {name}
                </h3>

                {/* View Product Button - using Link for navigation */}
                <Button asChild className="w-full bg-[#232321] hover:bg-[#4A69E2] text-white rounded-lg px-3.5 py-5 text-xs font-semibold flex items-center justify-between transition-colors">
                    <Link href={`/product/${id}`}>
                        <span>VIEW PRODUCT -</span>
                        {/* Price badge */}
                        <span className="bg-[#FFA52F] text-[#232321] px-2.5 py-1 rounded-md font-bold text-xs">
                            ${price}
                        </span>
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
