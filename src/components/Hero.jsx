import React from "react";
import { Button, Link } from "@heroui/react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <HeroUIProvider>
            <section className="relative w-full h-[calc(100vh-5.125rem)] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-surface">
                {/* Video Background */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.0 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                    >
                        <source src="/assets/videos/video_hero.mp4" type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                    </video>
                </motion.div>

                <div className="z-10 max-w-5xl flex flex-col items-center">
                    <div className="flex flex-col gap-0 items-center">
                        {/* Logo Icon for Hero if needed, generally kept in Navbar but user image shows logo top left */}
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 text-white leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                    >
                        Movimientos de Suelo y <br />
                        Obras Civiles
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl leading-relaxed"
                    >
                        Más de <span className="font-bold text-white">50 años de experiencia</span> en la Industria del Oil & Gas – Obras públicas, privadas y diversos servicios de Minería.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                    >
                        <Button
                            as={Link}
                            href="/unidades-de-negocios"
                            size="lg"
                            className="bg-primary text-black font-bold px-10 h-12 md:h-14 text-base md:text-lg hover:bg-primary-hover shadow-lg shadow-black/20"
                        >
                            Conocé Nuestros Servicios
                        </Button>
                        <Button
                            as={Link}
                            href="/la-empresa"
                            size="lg"
                            className="text-white font-semibold h-12 md:h-14 text-base md:text-lg group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all px-8 rounded-xl shadow-lg"
                        >
                            Sobre Nosotros <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <a
                        href="#features"
                        className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] font-medium">Conoce más</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown size={28} className="drop-shadow-lg" />
                        </motion.div>
                    </a>
                </motion.div>
            </section>
        </HeroUIProvider>
    );
}
