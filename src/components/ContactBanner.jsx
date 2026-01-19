import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { MessageSquare } from "lucide-react";

export default function ContactBanner() {
    return (
        <HeroUIProvider>
            <section className="relative py-24 overflow-hidden">
                {/* Background Image with Overlays */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/inicio/moto-nieve.jpg"
                        alt="Maquinaria en nieve"
                        className="w-full h-full object-cover object-[center_25%]"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    {/* Elegant bottom blur/gradient - extremely subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            ¿Necesitás más información <br className="hidden md:block" />
                            sobre nuestros servicios?
                        </h2>

                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Dejanos tu mensaje y nos contactaremos a la brevedad para asesorarte en lo que necesites.
                        </p>

                        <Button
                            as={Link}
                            href="/contacto"
                            className="bg-primary text-black font-bold h-16 px-12 text-lg rounded-2xl shadow-xl hover:scale-105 transition-all"
                            startContent={<MessageSquare size={24} />}
                        >
                            Contactanos ahora
                        </Button>
                    </motion.div>
                </div>

                {/* Decorative border at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
            </section>
        </HeroUIProvider>
    );
}
