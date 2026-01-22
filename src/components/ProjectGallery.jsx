import React from "react";
import { motion } from "framer-motion";
import { HeroUIProvider } from "../providers/HeroUIProvider";

export default function ProjectGallery({
    title,
    subtitle,
    images = [],
    id
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
    };

    // Determine optimal width based on image count
    const getItemWidth = (count) => {
        if (count === 1) return "w-full max-w-4xl";
        if (count === 2) return "w-full md:w-[calc(50%-1rem)]";
        if (count === 4) return "w-full md:w-[calc(50%-1rem)] lg:max-w-[45%]";
        return "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]";
    };

    if (!images.length) return null;

    return (
        <HeroUIProvider>
            <section id={id} className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    {(title || subtitle) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12 md:mb-16"
                        >
                            {title && (
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {title}
                                </h2>
                            )}
                            {subtitle && (
                                <p className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">
                                    {subtitle}
                                </p>
                            )}
                            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                        </motion.div>
                    )}

                    <motion.div
                        className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {images.map((image, index) => {
                            const src = typeof image === 'string' ? image : image.src;
                            const alt = typeof image === 'string'
                                ? `${title || 'Proyecto'} - Imagen ${index + 1}`
                                : image.alt;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    transition={{ duration: 0.5 }}
                                    className={`group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer ${getItemWidth(images.length)} ${images.length === 1 ? 'h-[400px] md:h-[500px]' : 'h-72 md:h-80'
                                        }`}
                                >
                                    <motion.img
                                        loading="lazy"
                                        src={src}
                                        alt={alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </HeroUIProvider>
    );
}
