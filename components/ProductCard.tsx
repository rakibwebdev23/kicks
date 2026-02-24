"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
    id: number;
    name?: string;
    title?: string;
    price: number;
    image?: string;
    images?: string[];
    isNew?: boolean;
    mobileVariant?: boolean;
};

export default function ProductCard({
    id,
    name,
    title,
    price,
    image,
    images,
    isNew = false,
    mobileVariant = false,
}: ProductCardProps) {
    const productName = name || title || "Product Name";
    const productImage = image || (images && images[0]) || "/images/placeholder.png";

    if (mobileVariant) {
        return (
            <div className="flex flex-col">
                <Link href={`/product/${id}`} className="block">
                    <div className="w-full p-2 bg-kicks-white rounded-3xl">
                        <div
                            className="relative bg-[#ECEEF0] overflow-hidden flex items-center justify-center"
                            style={{ height: 164, borderRadius: 12 }}
                        >
                            <Image
                                src={productImage}
                                alt={productName}
                                fill
                                className="object-cover"
                                sizes="155px"
                            />
                            {isNew && (
                                <span className="absolute top-0 left-0 w-11.5 h-7 bg-kicks-blue text-white text-[10px] font-semibold flex items-center justify-center border-0 uppercase font-heading leading-[100%] rounded-br-xl">
                                    New
                                </span>
                            )}
                        </div>
                    </div>
                </Link>
                <div className="mt-2">
                    <h3 className="line-clamp-2 font-heading font-semibold text-[16px] leading-[100%] tracking-[0%] text-kicks-dark uppercase">
                        {productName}
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className="group flex flex-col h-full">
            <Link href={`/product/${id}`} className="relative h-full block">
                <div className="relative aspect-square bg-[#ECEEF0] rounded-[28px] overflow-hidden flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-8 border-white">
                    <Image
                        src={productImage}
                        alt={productName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {isNew && (
                        <span className="absolute top-0 left-0 w-14.5 h-9.5 bg-kicks-blue text-white text-[12px] font-semibold flex items-center justify-center p-0 border-0 uppercase font-heading leading-[100%] rounded-br-[24px]">
                            New
                        </span>
                    )}
                </div>
            </Link>

            <div className="flex flex-col grow gap-4">
                <h3 className="line-clamp-2 text-[16px] md:text-[24px] font-semibold text-kicks-dark uppercase leading-[120%] md:leading-[100%] font-heading">
                    {productName}
                </h3>

                <Button asChild className="w-full h-12 bg-kicks-dark hover:bg-[#333] text-white rounded-lg flex items-center justify-center gap-1 transition-colors border-0">
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
