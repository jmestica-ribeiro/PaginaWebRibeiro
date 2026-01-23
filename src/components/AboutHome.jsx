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

export default function AboutHome() {
    const duplicatedLogos = [...logos, ...logos, ...logos];
    return (
        <HeroUIProvider>
            <section id="about-home" className="min-h-screen flex flex-col justify-center bg-white relative overflow-hidden py-10 md:py-0">
                {/* Decorative Dots */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
                    <div className="grid grid-cols-4 gap-6">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Integrated Client Logos Marquee */}
                    <div className="mb-16 md:mb-24">
                        <div className="text-center mb-8">
                            <h2 className="text-gray-900 font-bold tracking-[0.3em] text-sm md:text-base uppercase opacity-60">
                                Confían en nosotros
                            </h2>
                        </div>
                        <div className="relative flex overflow-x-hidden mask-linear-gradient">
                            <motion.div
                                className="flex items-center whitespace-nowrap gap-16 md:gap-24 py-4"
                                animate={{
                                    x: ["0%", "-33.33%"]
                                }}
                                transition={{
                                    duration: 35,
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
                                        className="h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-110"
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Image Column */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-2 z-0" />
                                <img
                                    src="/assets/images/inicio/fotogrupal inicio.jpg"
                                    alt="Equipo Ribeiro"
                                    className="relative z-10 w-full rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-all duration-700"
                                />
                            </motion.div>

                        </div>

                        {/* Text Column */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                                    Nosotros
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    ¿Quiénes somos?
                                </h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        Con más de 50 años construyendo el futuro energético y vial de la región, en RIBEIRO integramos experiencia y flexibilidad. Nos especializamos en servicios de Operación y Mantenimiento en Oil & Gas, infraestructura civil y vial para los sectores público y privado, y soporte clave para la industria minera. Nuestro compromiso es aportar valor con soluciones de ingeniería que aseguran el éxito de cada proyecto.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Certification Banner - Centered Page Wide */}
                    <div className="mt-16 flex justify-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative z-10 w-full max-w-xl"
                        >
                            <div className="bg-white border border-gray-100 rounded-2xl p-4 pr-8 flex items-center gap-6 shadow-sm w-fit mx-auto">
                                <div className="shrink-0 p-3 bg-gray-50 rounded-xl">
                                    <img
                                        src="/assets/images/inicio/prov. neuquino.png"
                                        alt="Sello Proveedor Neuquino"
                                        className="h-14 w-auto object-contain"
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-primary font-semibold text-[10px] uppercase tracking-wider mb-0.5">Certificado</span>
                                    <h3 className="text-gray-900 font-bold text-lg leading-tight">
                                        Proveedor Neuquino
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        Provincia del Neuquén
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </HeroUIProvider >
    );
}
