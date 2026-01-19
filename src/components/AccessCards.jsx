import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { ArrowUpRight, ClipboardList, UserRoundSearch } from "lucide-react";

export default function AccessCards() {
    return (
        <HeroUIProvider>
            <section className="py-24 bg-primary relative overflow-hidden">
                {/* Background Pattern - Subtle dark dots */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
                        >
                            ¡Conectá con nosotros!
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-black"
                        >
                            Accesos
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Proveedores Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative bg-[#343434] p-10 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <ClipboardList size={120} className="text-white rotate-12" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl font-bold text-white mb-2">Proveedores</h3>
                                <div className="w-12 h-1 bg-primary mb-8" />

                                <p className="text-gray-200 text-lg leading-relaxed mb-10 flex-grow">
                                    ¿Te interesa formar parte de nuestra red de proveedores? <br className="hidden lg:block" />
                                    Invitamos a todos los comercios, empresas y organizaciones interesadas a completar el formulario para registrar sus productos o servicios.
                                </p>

                                <Button
                                    as={Link}
                                    href="/proveedores"
                                    className="w-full sm:w-fit bg-primary text-black font-bold py-7 px-8 rounded-2xl transition-all hover:bg-white shadow-xl"
                                    endContent={<ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />}
                                >
                                    FORMULARIO DE PROVEEDORES
                                </Button>
                            </div>
                        </motion.div>

                        {/* RRHH Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative bg-[#343434] p-10 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <UserRoundSearch size={120} className="text-white -rotate-12" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-3xl font-bold text-white mb-2">Recursos Humanos</h3>
                                <div className="w-12 h-1 bg-primary mb-8" />

                                <p className="text-gray-300 text-lg leading-relaxed mb-10 flex-grow">
                                    Si querés formar parte de nuestro equipo de trabajo, completá el formulario. <br className="hidden lg:block" />
                                    Nos pondremos en contacto con vos en caso de necesitar tus servicios. ¡Muchas gracias!
                                </p>

                                <Button
                                    as={Link}
                                    href="/rrhh"
                                    className="w-full sm:w-fit bg-primary text-black font-bold py-7 px-8 rounded-2xl transition-all hover:bg-white shadow-xl"
                                    endContent={<ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" />}
                                >
                                    FORMULARIO DE RRHH
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </HeroUIProvider>
    );
}
