import React from "react";
import { motion } from "framer-motion";
import { HeroUIProvider } from "../providers/HeroUIProvider";

const values = [
    {
        title: "Calidad",
        description: "Comprometidos con la mejora continua, trabajamos para ofrecer servicios de la más alta calidad."
    },
    {
        title: "Preocupación por el Entorno",
        description: "Promovemos prácticas responsables, cuidando el impacto de nuestras acciones en el medio ambiente y la comunidad."
    },
    {
        title: "Responsabilidad Social",
        description: "Asumimos un compromiso activo con la sociedad, impulsando iniciativas que generan un impacto positivo y sostenible."
    },
    {
        title: "Solidez Financiera",
        description: "Contamos con una gestión financiera responsable que garantiza estabilidad y confianza a largo plazo."
    },
    {
        title: "Orientación al Cliente",
        description: "Ponemos al cliente en el centro de nuestras decisiones, brindando respuestas a medida y atención de calidad."
    },
    {
        title: "Innovación",
        description: "Innovación como motor de crecimiento, buscando constantemente nuevas y mejores formas de hacer las cosas."
    },
    {
        title: "Cuidado de las Personas",
        description: "Fomentamos un entorno seguro y respetuoso, priorizando el bienestar físico, emocional y profesional de las personas."
    },
    {
        title: "Trabajo en Equipo",
        description: "Creemos en la colaboración como clave del éxito, potenciando el talento colectivo para alcanzar objetivos comunes."
    }
];

export default function CompanyValues() {
    return (
        <HeroUIProvider>
            <section className="py-16 md:py-24 bg-black relative overflow-hidden">
                {/* Background Pattern similar to Home */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
                            Nuestra Cultura
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Nuestros Valores
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 md:p-8 rounded-[2rem] bg-[#1a1a1a] border border-white/5 hover:border-primary/50 transition-all group hover:-translate-y-1 duration-300 flex flex-col h-full"
                            >
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-primary rounded-full group-hover:w-20 transition-all duration-300"></div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </HeroUIProvider>
    );
}
