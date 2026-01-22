import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { motion } from "framer-motion";

export default function AboutHome() {
    return (
        <HeroUIProvider>
            <section id="about-home" className="py-10 md:py-24 bg-white relative overflow-hidden">
                {/* Decorative Dots */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
                    <div className="grid grid-cols-4 gap-6">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
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
                            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 shadow-lg relative overflow-hidden group">
                                <img
                                    src="/assets/images/inicio/prov. neuquino.png"
                                    alt="Sello Proveedor Neuquino"
                                    className="h-24 w-auto object-contain relative z-10"
                                />

                                <div className="flex flex-col relative z-10 text-center sm:text-left">
                                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Certificación Oficial</span>
                                    <h3 className="text-gray-900 font-bold text-2xl md:text-3xl leading-tight mb-2">
                                        Proveedor Neuquino
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-500 max-w-xs sm:max-w-none">
                                        Empresa certificada por la provincia del Neuquén.
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
