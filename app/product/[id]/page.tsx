"use client";

import { getProductById, carouselProducts } from "@/data/products";
import { useState, use } from "react";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import ProductCarousel from "@/components/ProductCarousel";

import CommonWrapper from "@/common/CommonWrapper";

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);

    const product = getProductById(parseInt(id));

    const [showLoginModal, setShowLoginModal] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <Button asChild variant="outline">
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        );
    }

    const handleActionClick = () => {
        setShowLoginModal(true);
    };

    return (
        <main className="pt-24 md:pt-[160px] pb-10 md:pb-24">
            <CommonWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-14 mb-20">

                    <ProductGallery images={product.images} productName={product.name} />

                    <div className="flex flex-col pt-0 lg:pt-4">
                        {product.isNew && (
                            <span className="bg-kicks-blue text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg uppercase w-max mb-6 tracking-wider">
                                New Release
                            </span>
                        )}

                        <h1 className="text-[28px] md:text-[36px] font-extrabold text-kicks-dark leading-[1.1] mb-2 uppercase tracking-tight">
                            {product.name}
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-kicks-blue mb-10">
                            ${product.price}.00
                        </p>

                        <div className="mb-8">
                            <p className="text-sm font-bold text-kicks-dark uppercase mb-4 tracking-wide">Color</p>
                            <div className="flex gap-3">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        className={`size-10 rounded-full border-[3px] transition-all p-1 outline-none ${index === 0 ? "border-kicks-dark" : "border-transparent hover:border-kicks-light"
                                            }`}
                                    >
                                        <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm font-bold text-kicks-dark uppercase tracking-wide">Size</p>
                                <button className="text-[11px] font-bold text-kicks-dark uppercase underline underline-offset-4 hover:text-kicks-blue transition-colors">Size Chart</button>
                            </div>
                            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                                {product.sizes.map((size, index) => (
                                    <button
                                        key={size}
                                        className={`h-11 rounded-xl text-sm font-bold transition-all border outline-none ${index === 0
                                            ? "bg-kicks-dark text-white border-kicks-dark"
                                            : "bg-white text-kicks-dark border-kicks-light hover:border-kicks-dark"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 mb-4">
                            <Button
                                onClick={handleActionClick}
                                className="flex-1 bg-kicks-dark hover:bg-kicks-dark/90 text-white h-14 font-bold uppercase tracking-wider rounded-xl text-sm cursor-pointer"
                            >
                                Add to Cart
                            </Button>
                            <Button variant="outline" size="icon" className="size-14 rounded-xl border-2 border-kicks-dark bg-transparent hover:bg-kicks-dark hover:text-white transition-all cursor-pointer">
                                <Heart className="size-5" />
                            </Button>
                        </div>

                        <Button
                            onClick={handleActionClick}
                            className="w-full bg-kicks-blue hover:bg-[#3a56c4] text-white h-14 font-bold uppercase tracking-wider rounded-xl mb-12 text-sm cursor-pointer"
                        >
                            Buy It Now
                        </Button>

                        <div className="border-t border-kicks-light pt-8">
                            <p className="text-sm font-bold text-kicks-dark uppercase mb-2 tracking-wide">About the Product</p>
                            <p className="text-[14px] font-medium text-kicks-gray mb-6">{product.description}</p>
                            <ul className="list-none space-y-4">
                                {product.details.map((detail, index) => (
                                    <li key={index} className="text-[13px] text-kicks-gray leading-relaxed flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-kicks-gray shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="mt-20">
                    <ProductCarousel
                        title="You may also like"
                        products={carouselProducts}
                    />
                </div>

                {showLoginModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl relative">
                            <button
                                onClick={() => setShowLoginModal(false)}
                                className="absolute top-6 right-6 text-kicks-dark hover:text-kicks-blue transition-colors cursor-pointer border-0 bg-transparent"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <h2 className="text-[32px] font-bold text-kicks-dark uppercase font-heading mb-4">Please Login</h2>
                            <p className="text-kicks-gray mb-8">You need to be logged in to add products to your bag or purchase them.</p>

                            <div className="space-y-4">
                                <Button className="w-full bg-kicks-blue hover:bg-[#3a56c4] text-white h-14 font-bold uppercase rounded-xl border-0">
                                    Login
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowLoginModal(false)}
                                    className="w-full border-kicks-dark text-kicks-dark h-14 font-bold uppercase rounded-xl"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </CommonWrapper>
        </main>
    );
}
