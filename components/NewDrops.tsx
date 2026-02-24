"use client";

import { Button } from "@/components/ui/button";
import CommonWrapper from "@/common/CommonWrapper";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery, Product } from "@/redux/api/api";
import { ProductCardSkeleton } from "./ui/LoadingSkeleton";
import ErrorState from "./ui/ErrorState";

export default function NewDrops() {
    const { data: products, isLoading, isError, refetch } = useGetAllProductsQuery();

    // Limit to 4 for the initial "New Drops" grid
    const featuredProducts = products?.slice(0, 4) || [];

    return (
        <section id="new-drops" className="py-10 md:py-24">
            <CommonWrapper>
                <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-6 md:gap-0 mb-8 md:mb-12">
                    <h2 className="font-semibold text-[#232321] uppercase font-['Rubik',sans-serif] leading-[100%] md:leading-[95%] tracking-[0%] text-[24px] md:text-[74px] max-w-[800px]">
                        NEW DROPS
                    </h2>
                    <Button className="bg-[#4A69E2] border-0 hover:bg-[#3a56c4] text-white rounded-lg px-8 py-3 text-sm font-semibold h-auto uppercase tracking-wide cursor-pointer w-full md:w-auto">
                        SHOP NEW DROPS
                    </Button>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                    </div>
                ) : isError ? (
                    <ErrorState onRetry={refetch} />
                ) : featuredProducts.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">No products found.</div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredProducts.map((product: Product) => (
                            <ProductCard key={product.id} {...product} isNew />
                        ))}
                    </div>
                )}
            </CommonWrapper>
        </section>
    );
}
