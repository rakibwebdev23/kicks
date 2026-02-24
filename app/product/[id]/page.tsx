"use client";

import { use, useState } from "react";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import ProductCarousel from "@/components/ProductCarousel";
import CommonWrapper from "@/common/CommonWrapper";
import { useGetSingleProductQuery, useGetAllProductsQuery } from "@/redux/api/api";
import ErrorState from "@/components/ui/ErrorState";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { addToCart } from "@/redux/store/cartSlice";
import { toggleLoginModal } from "@/redux/store/authSlice";

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const productId = parseInt(id);
    const dispatch = useAppDispatch();

    // Redux State
    const { showLoginModal } = useAppSelector((state) => state.auth);

    // API Queries
    const { data: product, isLoading, isError, refetch } = useGetSingleProductQuery(productId);
    const { data: allProducts } = useGetAllProductsQuery();

    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0); // Index of staticSizes

    // Mock constants for missing API data (colors, sizes, details)
    const staticColors = [0, 1, 2];
    const staticSizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
    const staticDetails = [
        "This product is excluded from all promotional offers and discounts.",
        "Sustainable materials used in production.",
        "Premium quality comfort and durability."
    ];

    if (isLoading) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-kicks-blue" />
            </div>
        );
    }

    if (isError || !product) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
                <ErrorState
                    message={isError ? "Failed to load product." : "Product not found."}
                    onRetry={refetch}
                />
                <Button asChild variant="outline" className="mt-6">
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: (product.images && product.images[0]) || "/images/placeholder.png",
            size: staticSizes[selectedSize],
            color: selectedColor,
            quantity: 1
        }));
        // Optional: show some feedback or redirect
    };

    const handleBuyNow = () => {
        dispatch(toggleLoginModal(true));
    };

    // Prepare carousel products (e.g., first 4 from all products)
    const carouselProducts = allProducts?.slice(0, 4) || [];

    return (
        <main className="pt-32 md:pt-40 pb-10 md:pb-24">
            <CommonWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-14 mb-20">

                    <ProductGallery images={product.images} productName={product.title} />

                    <div className="flex flex-col pt-0 lg:pt-4">
                        <span className="bg-kicks-blue text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg uppercase w-max mb-6 tracking-wider">
                            New Release
                        </span>

                        <h1 className="font-heading font-semibold text-[32px] leading-[100%] tracking-[0%] text-kicks-dark mb-2 uppercase">
                            {product.title}
                        </h1>

                        <p className="font-heading font-semibold text-[24px] leading-[100%] tracking-[0%] text-kicks-blue mb-10">
                            ${product.price}.00
                        </p>

                        <div className="mb-8">
                            <p className="font-heading font-semibold text-[16px] leading-[100%] tracking-[0%] uppercase text-kicks-dark mb-4">Color</p>
                            <div className="flex gap-3">
                                {staticColors.map((_: number, index: number) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedColor(index)}
                                        className={`rounded-full transition-all outline-none cursor-pointer flex items-center justify-center ${selectedColor === index
                                            ? "border-2 border-kicks-dark"
                                            : "border-2 border-transparent hover:border-kicks-light"
                                            }`}
                                        style={{ width: 44, height: 44, padding: 4 }}
                                    >
                                        <div
                                            className="rounded-full"
                                            style={{ width: 32, height: 32, backgroundColor: selectedColor === index ? "#253043" : "#707E6E" }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-4">
                                <p className="font-heading font-semibold text-[16px] leading-[100%] tracking-[0%] uppercase text-kicks-dark">Size</p>
                                <button className="text-[11px] font-bold text-kicks-dark uppercase underline underline-offset-4 hover:text-kicks-blue transition-colors cursor-pointer">Size Chart</button>
                            </div>
                            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                                {staticSizes.map((size: number, index: number) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(index)}
                                        className={`h-11 rounded-xl text-sm font-bold transition-all border outline-none cursor-pointer ${selectedSize === index
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
                                onClick={handleAddToCart}
                                className="flex-1 bg-kicks-dark hover:bg-kicks-dark/90 text-white h-14 font-bold uppercase tracking-wider rounded-xl text-sm cursor-pointer"
                            >
                                Add to Cart
                            </Button>
                            <Button variant="outline" size="icon" className="size-14 rounded-xl border-2 bg-kicks-dark text-white transition-all cursor-pointer hover:bg-kicks-blue">
                                <Heart className="size-5" />
                            </Button>
                        </div>

                        <Button
                            onClick={handleBuyNow}
                            className="w-full bg-kicks-blue hover:bg-[#3a56c4] text-white h-14 font-bold uppercase tracking-wider rounded-xl mb-12 text-sm cursor-pointer"
                        >
                            Buy It Now
                        </Button>

                        <div className="border-t border-kicks-light pt-8">
                            <p className="font-heading font-semibold text-[16px] leading-[100%] tracking-[0%] uppercase text-kicks-dark mb-2">About the Product</p>
                            <p className="font-['Open_Sans',sans-serif] font-normal text-[16px] leading-[100%] tracking-[0%] text-kicks-gray mb-6">{product.description}</p>
                            <ul className="list-none space-y-4">
                                {staticDetails.map((detail: string, index: number) => (
                                    <li key={index} className="font-['Open_Sans',sans-serif] font-normal text-[16px] leading-[100%] tracking-[0%] text-kicks-gray flex items-start gap-2">
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
                    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl relative">
                            <button
                                onClick={() => dispatch(toggleLoginModal(false))}
                                className="absolute top-6 right-6 text-kicks-dark hover:text-kicks-blue transition-colors cursor-pointer border-0 bg-transparent"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <h2 className="text-[32px] font-bold text-kicks-dark uppercase font-heading mb-4">Please Login</h2>
                            <p className="text-kicks-gray mb-8">You need to be logged in to add products to your bag or purchase them.</p>

                            <div className="space-y-4">
                                <Button
                                    onClick={() => dispatch(toggleLoginModal(false))}
                                    className="w-full bg-kicks-blue hover:bg-[#3a56c4] text-white h-14 font-bold uppercase rounded-xl border-0"
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => dispatch(toggleLoginModal(false))}
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
