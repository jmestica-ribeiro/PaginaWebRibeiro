import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { motion } from "framer-motion";
import { Settings, Truck, Route, Building2, Users, Tractor } from "lucide-react";

const stats = [
    { label: "HP DE POTENCIA", value: "+90 MIL", icon: Settings },
    { label: "EQUIPOS PESADOS", value: "+250", icon: Truck },
    { label: "KM RECORRIDOS / MES", value: "+600 MIL", icon: Route },
    { label: "BASES Y OFICINAS", value: "+10", icon: Building2 },
    { label: "COLABORADORES", value: "+700", icon: Users },
    { label: "EQUIPOS TOTALES", value: "+700", icon: Tractor },
];

export default function EquipmentHome() {
    return (
        <HeroUIProvider>
            <section id="equipment" className="pt-4 pb-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Header Part */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-8">
                        <div className="w-full lg:w-1/2 relative">
                            {/* Subtle Glow behind text */}
                            <div className="absolute -top-20 -left-20 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

                            <motion.div
                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10"
                            >
                                <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
                                    Nuestro Equipamiento
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    Potencia, eficiencia y robustez para los desafíos más exigentes.
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                    En <span className="font-bold text-gray-900">Ribeiro S.R.L.</span> ponemos a disposición nuestra flota de maquinaria de última generación para acompañar el desarrollo de tus proyectos con la máxima fiabilidad.
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 5, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <img
                                    loading="lazy"
                                    src="/assets/images/inicio/foto-topador.png"
                                    alt="Maquinaria Pesada Ribeiro"
                                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                                />
                            </motion.div>
                            {/* Decorative background element moved/refined */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gray-50 rounded-full blur-3xl -z-0 opacity-30" />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 border-t border-gray-100 pt-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                    <stat.icon size={28} />
                                </div>
                                <span className="text-3xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </HeroUIProvider>
    );
}
