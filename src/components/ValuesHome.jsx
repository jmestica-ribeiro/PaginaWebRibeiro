import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, CheckCircle2 } from "lucide-react";

const values = [
    {
        title: "Solidez financiera",
        description: "Desarrollamos como política, la inversión en equipamientos propios y la diversificación de los servicios, dando una respuesta eficaz a los diversos requerimientos de nuestros clientes.",
        icon: <ShieldCheck className="text-primary w-8 h-8" />,
    },
    {
        title: "Compromiso Ambiental",
        description: "Cumplir legislación vigente para implementar los distintos requerimientos a la prevención de riesgos e impactos ambientales, identificar los peligros ambientales, evaluarlos y gestionarlos.",
        icon: <Leaf className="text-primary w-8 h-8" />,
    },
    {
        title: "Calidad Garantizada",
        description: "Ofrecemos a todos nuestros clientes la satisfacción de un trabajo bien realizado, en manos de personas capacitadas para cumplir todas sus exigencias en tiempo y forma.",
        icon: <CheckCircle2 className="text-primary w-8 h-8" />,
    },
];

export default function ValuesHome() {
    return (
        <HeroUIProvider>
            <section className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden py-16 md:py-0">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4 block"
                        >
                            Nuestros Valores
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-white"
                        >
                            Excelencia en cada proyecto
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all group hover:-translate-y-2 duration-500"
                            >
                                <div className="mb-8 w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <div className="scale-110">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-5 transition-colors group-hover:text-primary">
                                    {value.title}
                                </h3>
                                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
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
