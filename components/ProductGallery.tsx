"use client";

import Image from "next/image";

// ===== TYPES =====
type ProductGalleryProps = {
    images: string[]; // Array of image URLs
    productName: string; // Used for alt text
};

// This component shows a premium product image gallery in a grid layout.
// Matches the Figma design where multiple large shots are shown together.
export default function ProductGallery({
    images,
    productName,
}: ProductGalleryProps) {
    // We'll show the top 4 images in a grid
    const displayImages = images.slice(0, 4);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayImages.map((image, index) => (
                <div
                    key={index}
                    className="relative aspect-[4/5] bg-[#F5F5F5] rounded-3xl overflow-hidden group hover:shadow-inner transition-all duration-500"
                >
                    <Image
                        src={image}
                        alt={`${productName} - View ${index + 1}`}
                        fill
                        className="object-cover p-0 group-hover:scale-110 transition-transform duration-700"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
