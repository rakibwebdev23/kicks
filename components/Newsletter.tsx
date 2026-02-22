"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CommonWrapper from "@/common/CommonWrapper";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    return (
        <section id="newsletter" className="py-16">
            <CommonWrapper>
                <div className="bg-[#232321] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 text-center md:text-left">
                        <h2
                            className="font-extrabold text-white leading-tight mb-3 uppercase"
                            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                        >
                            JOIN OUR KICKSPLUS
                            <br />
                            CLUB & GET 15% OFF
                        </h2>
                        <p className="text-sm text-[#A0A09E] mb-6">
                            Sign up for free! Join the community.
                        </p>

                        <div className="flex gap-2 max-w-[400px] mx-auto md:mx-0">
                            <Input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-[#333330] border-0 text-white placeholder:text-[#70706E] rounded-lg h-11 focus-visible:ring-[#4A69E2]"
                            />
                            <Button
                                variant="outline"
                                className="bg-[#232321] text-white border-2 border-white hover:bg-white hover:text-[#232321] rounded-lg px-6 h-11 font-semibold transition-all"
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <span
                            className="font-black text-white tracking-wider"
                            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
                        >
                            KICKS
                        </span>
                    </div>
                </div>
            </CommonWrapper>
        </section>
    );
}
