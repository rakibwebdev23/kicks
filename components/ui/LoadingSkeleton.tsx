"use client";

import { cn } from "@/lib/utils";

export function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-muted/20 bg-gray-200", className)}
            {...props}
        />
    );
}

export function ProductCardSkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[280px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
}

export function CategorySkeleton() {
    return (
        <Skeleton className="w-full h-[350px] md:h-[600px]" />
    );
}
