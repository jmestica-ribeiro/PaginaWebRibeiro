import React from "react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "@heroui/react";

export default function Footer() {
    return (
        <HeroUIProvider>
            <footer className="w-full py-8 mt-auto border-t border-divider">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-small text-default-500 text-center md:text-left">
                        &copy; 2026 - Ribeiro SRL. Todos los derechos reservados.
                    </div>
                    <div className="flex gap-4">

                        <Link isExternal href="https://www.instagram.com/ribeiro.srl/" aria-label="Instagram">
                            <Instagram className="text-default-500" size={20} />
                        </Link>
                        <Link isExternal href="https://www.linkedin.com/company/ribeiro-srl" aria-label="LinkedIn">
                            <Linkedin className="text-default-500" size={20} />
                        </Link>
                    </div>
                </div>
            </footer>
        </HeroUIProvider>
    );
}
