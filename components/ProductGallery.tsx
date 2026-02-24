"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
    images: string[];
    productName: string;
};

export default function ProductGallery({
    images,
    productName,
}: ProductGalleryProps) {
    const displayImages = images.slice(0, 4);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <div className="block sm:hidden">
                <div
                    className="relative mx-auto bg-[#F5F5F5] overflow-hidden"
                    style={{
                        width: 358,
                        height: 273,
                        borderRadius: 16,
                    }}
                >
                    <Image
                        src={displayImages[selectedIndex]}
                        alt={`${productName} - View ${selectedIndex + 1}`}
                        fill
                        className="object-cover p-0"
                        priority
                    />
                </div>

                <div className="flex gap-2 mt-4 justify-center">
                    {displayImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`relative shrink-0 overflow-hidden bg-[#F5F5F5] cursor-pointer border-2 transition-all ${selectedIndex === index
                                    ? "border-kicks-blue"
                                    : "border-transparent"
                                }`}
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: 8,
                            }}
                        >
                            <Image
                                src={image}
                                alt={`${productName} - Thumbnail ${index + 1}`}
                                fill
                                className="object-cover p-0"
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="hidden sm:grid grid-cols-2 gap-4">
                {displayImages.map((image, index) => {
                    let radiusClass = "";
                    if (index === 0) radiusClass = "rounded-tl-[48px]";
                    if (index === 1) radiusClass = "rounded-tr-[48px]";
                    if (index === 2) radiusClass = "rounded-bl-[48px]";
                    if (index === 3) radiusClass = "rounded-br-[48px]";

                    return (
                        <div
                            key={index}
                            className={`relative aspect-[429/510] bg-[#F5F5F5] overflow-hidden group hover:shadow-inner transition-all duration-500 ${radiusClass}`}
                        >
                            <Image
                                src={image}
                                alt={`${productName} - View ${index + 1}`}
                                fill
                                className="object-cover p-0 group-hover:scale-110 transition-transform duration-700"
                                priority={index === 0}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
