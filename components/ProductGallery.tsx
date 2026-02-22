"use client";

import Image from "next/image";

type ProductGalleryProps = {
    images: string[];
    productName: string;
};

export default function ProductGallery({
    images,
    productName,
}: ProductGalleryProps) {
    const displayImages = images.slice(0, 4);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayImages.map((image, index) => {
                let radiusClass = "";
                if (index === 0) radiusClass = "rounded-tl-[24px] md:rounded-tl-[48px]";
                if (index === 1) radiusClass = "rounded-tr-[24px] md:rounded-tr-[48px]";
                if (index === 2) radiusClass = "rounded-bl-[24px] md:rounded-bl-[48px]";
                if (index === 3) radiusClass = "rounded-br-[24px] md:rounded-br-[48px]";

                return (
                    <div
                        key={index}
                        className={`relative aspect-[4/5] bg-[#F5F5F5] overflow-hidden group hover:shadow-inner transition-all duration-500 ${radiusClass}`}
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
    );
}
