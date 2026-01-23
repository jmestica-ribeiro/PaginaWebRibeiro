import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { motion } from "framer-motion";

const logos = [
    { name: "Cliente Petrolera 1", url: "/assets/images/inicio/clientes/cliente.png" },
    { name: "Cliente Construcción 2", url: "/assets/images/inicio/clientes/cliente (2).png" },
    { name: "Cliente Oil & Gas 3", url: "/assets/images/inicio/clientes/cliente (3).png" },
    { name: "Cliente Energía 4", url: "/assets/images/inicio/clientes/cliente (4).png" },
    { name: "Cliente Minería 5", url: "/assets/images/inicio/clientes/cliente (5).png" },
    { name: "Cliente Infraestructura 6", url: "/assets/images/inicio/clientes/cliente (6).png" },
    { name: "Cliente Vaca Muerta 7", url: "/assets/images/inicio/clientes/cliente (7).png" },
    { name: "Cliente Servicios 8", url: "/assets/images/inicio/clientes/cliente (8).jpg" },
    { name: "Cliente Industria 9", url: "/assets/images/inicio/clientes/cliente (9).png" },
    { name: "Cliente Patagonia 10", url: "/assets/images/inicio/clientes/cliente (10).png" },
];

export default function ClientLogos() {
    // Duplicate logos for infinite scroll effect
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <HeroUIProvider>
            <section className="h-screen flex flex-col justify-center bg-white overflow-hidden snap-start">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container mx-auto px-6 mb-12 text-center">
                        <h2 className="text-gray-900 font-bold tracking-[0.3em] text-sm md:text-base uppercase opacity-90">
                            Confían en nosotros
                        </h2>
                    </div>

                    <div className="relative flex overflow-x-hidden">
                        <motion.div
                            className="flex items-center whitespace-nowrap gap-16 md:gap-24 py-4"
                            animate={{
                                x: ["0%", "-33.33%"]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.url}
                                    loading="lazy"
                                    alt={logo.name}
                                    className="h-10 md:h-14 w-auto object-contain transition-all duration-300 hover:scale-110"
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </HeroUIProvider>
    );
}
