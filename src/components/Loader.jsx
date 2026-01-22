import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 2200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden"
                >
                    {/* Top Yellow Geometric Shape with Stripes - Full Width Stepped (Mirrored) */}
                    <div className="absolute top-0 left-0 right-0 h-32 md:h-64"
                        style={{
                            // Starts thick on left, steeper but smooth diagonal (10% span)
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 12%, 15% 12%, 5% 30%, 0% 30%)",
                            backgroundColor: "#FFCB00"
                        }}
                    >
                        {/* Stripes Overlay */}
                        <div className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 12px)"
                            }}
                        />
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <img
                            src="/assets/images/ribeiro-logo.png"
                            alt="RIBEIRO SRL"
                            className="w-56 md:w-80 h-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Bottom Yellow Geometric Shape with Stripes - Full Width Stepped */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64"
                        style={{
                            // Starts very thin/low on the left, steeper but smooth ramp up (10% span)
                            clipPath: "polygon(0% 100%, 0% 88%, 85% 88%, 95% 70%, 100% 70%, 100% 100%)",
                            backgroundColor: "#FFCB00"
                        }}
                    >
                        {/* Stripes Overlay */}
                        <div className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 12px)"
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
