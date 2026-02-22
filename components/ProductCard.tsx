"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    isNew?: boolean;
};

export default function ProductCard({
    id,
    name,
    price,
    image,
    isNew = false,
}: ProductCardProps) {
    return (
        <div className="group flex flex-col h-full">
            <Link href={`/product/${id}`} className="block">
                <div className="w-full aspect-[318/350] p-2 bg-[#FAFAFA] rounded-[28px]">
                    <div className="relative w-full h-full bg-[#ECEEF0] rounded-[24px] overflow-hidden flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                priority={id <= 2}
                            />
                        </div>
                        {isNew && (
                            <span className="absolute top-0 left-0 w-[58px] h-[38px] bg-[#4A69E2] text-white text-[12px] font-semibold flex items-center justify-center p-0  hover:bg-[#4A69E2] border-0 uppercase font-['Rubik',sans-serif] leading-[100%] rounded-br-[24px]">
                                New
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            <div className="mt-4 flex flex-col flex-grow gap-4">
                <h3 className="line-clamp-2 text-[16px] md:text-[24px] font-semibold text-[#232321] uppercase leading-[120%] md:leading-[100%] font-['Rubik',sans-serif]">
                    {name}
                </h3>

                <Button asChild className="w-full h-[48px] bg-[#232321] hover:bg-[#333] text-white rounded-[8px] flex items-center justify-center gap-[4px] transition-colors border-0">
                    <Link href={`/product/${id}`}>
                        <span className="text-[14px] font-medium uppercase font-['Rubik',sans-serif] leading-[100%] tracking-[0.25px]">
                            VIEW PRODUCT -
                        </span>
                        <span className="text-[14px] font-medium uppercase font-['Rubik',sans-serif] leading-[100%] tracking-[0.25px] text-[#FFA52F]">
                            ${price}
                        </span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
