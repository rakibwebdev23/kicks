"use client";

import { Button } from "./button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
}

export default function ErrorState({
    message = "Something went wrong. Please try again.",
    onRetry
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-red-50 rounded-xl border border-red-100">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-red-900 mb-2">Oops!</h3>
            <p className="text-red-700 mb-6">{message}</p>
            {onRetry && (
                <Button
                    onClick={onRetry}
                    variant="outline"
                    className="flex items-center gap-2 border-red-200 text-red-700 hover:bg-red-100"
                >
                    <RefreshCw className="w-4 h-4" />
                    Retry
                </Button>
            )}
        </div>
    );
}
