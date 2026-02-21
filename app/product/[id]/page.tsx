"use client";

import { use } from "react";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

import CommonWrapper from "@/common/CommonWrapper";

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Unwrap params using React.use()
    const { id } = use(params);

    // Find the product data using the ID from the URL
    const product = getProductById(parseInt(id));

    // If product not found, show a message
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

    // Get other products in the same category for the bottom section
    const relatedProducts = getRelatedProducts(product.id, product.category);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="py-6 md:py-10">
                <CommonWrapper>
                    {/* ===== PRODUCT TOP SECTION (Gallery + Info) ===== */}
                    {/* Gallery takes 1.5 parts, Info takes 1 part on large screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-14 mb-20">

                        {/* Left Side: Product Gallery (2x2 Grid) */}
                        <ProductGallery images={product.images} productName={product.name} />

                        {/* Right Side: Product Info */}
                        <div className="flex flex-col pt-0 lg:pt-4">
                            {/* New Release Badge (if applicable) */}
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

                            {/* Color Picker */}
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

                            {/* Size Picker */}
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

                            {/* Action Buttons */}
                            <div className="flex gap-3 mb-4">
                                <Button className="flex-1 bg-kicks-dark hover:bg-kicks-dark/90 text-white h-14 font-bold uppercase tracking-wider rounded-xl text-sm">
                                    Add to Cart
                                </Button>
                                <Button variant="outline" size="icon" className="size-14 rounded-xl border-2 border-kicks-dark bg-transparent hover:bg-kicks-dark hover:text-white transition-all">
                                    <Heart className="size-5" />
                                </Button>
                            </div>

                            <Button className="w-full bg-kicks-blue hover:bg-[#3a56c4] text-white h-14 font-bold uppercase tracking-wider rounded-xl mb-12 text-sm">
                                Buy It Now
                            </Button>

                            {/* About Product */}
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

                    {/* ===== "YOU MAY ALSO LIKE" SECTION ===== */}
                    <div className="mb-20">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-extrabold text-kicks-dark uppercase">
                                You may also like
                            </h2>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="size-10 border-kicks-dark hover:bg-kicks-dark hover:text-white">
                                    <ChevronLeft className="size-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="size-10 bg-kicks-dark text-white hover:bg-kicks-blue">
                                    <ChevronRight className="size-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                            {relatedProducts.map((relProduct) => (
                                <ProductCard key={relProduct.id} {...relProduct} />
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <Newsletter />
                </CommonWrapper>
            </main>

            <Footer />
        </div>
    );
}
