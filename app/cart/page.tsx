"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/ProductCarousel";
import { useGetAllProductsQuery } from "@/redux/api/api";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { removeFromCart, updateQuantity, CartItem } from "@/redux/store/cartSlice";
import { toggleLoginModal } from "@/redux/store/authSlice";

export default function CartPage() {
    const dispatch = useAppDispatch();
    const { items: cartItems } = useAppSelector((state) => state.cart);
    const { showLoginModal } = useAppSelector((state) => state.auth);
    const { data: products } = useGetAllProductsQuery();

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryFee = cartItems.length > 0 ? 6.99 : 0;
    const total = subtotal + deliveryFee;

    const handleCheckout = () => {
        dispatch(toggleLoginModal(true));
    };

    // Prepare carousel products
    const carouselProducts = products?.slice(0, 4) || [];

    return (
        <main className="min-h-screen pt-24 md:pt-[140px] pb-10 md:pb-24">
            <CommonWrapper>
                <div className="mb-10">
                    <h1 className="text-[28px] md:text-[36px] font-semibold text-[#232321] font-heading mb-2">
                        Saving to celebrate
                    </h1>
                    <p className="text-[#232321] text-[14px] md:text-[16px] font-medium font-open-sans">
                        Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
                    </p>
                    <p className="text-[#232321] text-[14px] md:text-[16px] font-medium font-open-sans mt-1">
                        <Link href="#" className="underline">Join us</Link> or <Link href="#" className="underline">Sign-in</Link>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[65%]">
                        <div className="bg-white rounded-[24px] p-6 md:p-8">
                            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#232321] font-heading mb-2">
                                Your Bag
                            </h2>
                            <p className="text-[#70706E] text-[14px] md:text-[16px] font-open-sans mb-8">
                                {cartItems.length === 0
                                    ? "Your bag is empty."
                                    : "Items in your bag not reserved- check out now to make them yours."}
                            </p>

                            <div className="flex flex-col gap-10">
                                {cartItems.map((item: CartItem) => (
                                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex flex-col sm:row gap-6">
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="w-full sm:w-[200px] aspect-square bg-[#F4F5F4] rounded-[16px] flex items-center justify-center relative flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-contain p-4"
                                                    sizes="(max-width: 768px) 100vw, 200px"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#232321] font-heading uppercase leading-tight">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[#70706E] text-[16px] font-open-sans mt-2">
                                                            Men&apos;s Road Running Shoes
                                                        </p>
                                                        <p className="text-[#70706E] text-[16px] font-open-sans">
                                                            Color Category: {item.color}
                                                        </p>

                                                        <div className="flex items-center gap-6 mt-4">
                                                            <div className="flex items-center gap-2 text-[16px] font-semibold text-[#232321]">
                                                                Size {item.size}
                                                            </div>
                                                            <div className="flex items-center gap-2 text-[16px] font-semibold text-[#232321]">
                                                                Quantity {item.quantity}
                                                                <div className="flex gap-1 ml-2">
                                                                    <button
                                                                        onClick={() => dispatch(updateQuantity({ ...item, quantity: Math.max(1, item.quantity - 1) }))}
                                                                        className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                                                                    >-</button>
                                                                    <button
                                                                        onClick={() => dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 }))}
                                                                        className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                                                                    >+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="text-[20px] md:text-[24px] font-semibold text-[#4A69E2] font-heading">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 mt-6">
                                                    <button className="text-[#232321] hover:text-[#4A69E2] transition-colors cursor-pointer border-0 bg-transparent">
                                                        <Heart className="w-6 h-6" />
                                                    </button>
                                                    <button
                                                        onClick={() => dispatch(removeFromCart(item))}
                                                        className="text-[#232321] hover:text-red-500 transition-colors cursor-pointer border-0 bg-transparent"
                                                    >
                                                        <Trash2 className="w-6 h-6" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[35%]">
                        <div className="p-6 md:p-8">
                            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#232321] font-heading mb-6">
                                Order Summary
                            </h2>

                            <div className="flex flex-col gap-4 text-[16px] font-open-sans font-medium text-[#232321] mb-6">
                                <div className="flex justify-between uppercase">
                                    <span>{cartItems.length} ITEM{cartItems.length !== 1 ? 'S' : ''}</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span>${deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sales Tax</span>
                                    <span>-</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-[20px] md:text-[24px] font-semibold text-[#232321] font-heading mb-8 uppercase">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <Button
                                onClick={handleCheckout}
                                disabled={cartItems.length === 0}
                                className="w-full h-[56px] md:h-[64px] bg-[#232321] hover:bg-[#333] text-white rounded-[8px] flex items-center justify-center transition-colors border-0 mb-4 cursor-pointer"
                            >
                                <span className="text-[14px] md:text-[16px] font-semibold uppercase font-['Rubik',sans-serif] tracking-wider">
                                    CHECKOUT
                                </span>
                            </Button>

                            <Link href="#" className="text-[16px] font-semibold text-[#232321] underline font-open-sans inline-block">
                                Use a promo code
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 md:mt-32">
                    <ProductCarousel
                        title="You may also like"
                        products={carouselProducts}
                    />
                </div>

                {showLoginModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
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
                            <p className="text-kicks-gray mb-8">You need to be logged in to proceed to checkout.</p>

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
