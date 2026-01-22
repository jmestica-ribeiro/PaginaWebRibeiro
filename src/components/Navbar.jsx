import React, { useState, useRef } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@heroui/react";
import { HeroUIProvider } from "../providers/HeroUIProvider";
import { ChevronDown } from "lucide-react";

export default function SiteNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dropdown states
    const [isMenuOpenUN, setIsMenuOpenUN] = useState(false);
    const [isMenuOpenTN, setIsMenuOpenTN] = useState(false);
    const timerRefUN = useRef(null);
    const timerRefTN = useRef(null);

    const handleMouseEnterUN = () => {
        if (timerRefUN.current) clearTimeout(timerRefUN.current);
        setIsMenuOpenUN(true);
    };
    const handleMouseLeaveUN = () => {
        timerRefUN.current = setTimeout(() => setIsMenuOpenUN(false), 300);
    };

    const handleMouseEnterTN = () => {
        if (timerRefTN.current) clearTimeout(timerRefTN.current);
        setIsMenuOpenTN(true);
    };
    const handleMouseLeaveTN = () => {
        timerRefTN.current = setTimeout(() => setIsMenuOpenTN(false), 300);
    };

    const menuItems = [
        { name: "Inicio", href: "/" },
        { name: "La Empresa", href: "/la-empresa" },
        { name: "Servicios Petroleros", href: "/servicios-petroleros" },
        { name: "Obra Pública", href: "/obra-publica" },
        { name: "Proveedores", href: "/proveedores" },
        { name: "Recursos Humanos", href: "/rrhh" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <HeroUIProvider>
            <Navbar
                height="5rem"
                maxWidth="xl"
                className="absolute w-full z-50 bg-transparent py-4"
                isBlurred={false}
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                {/* Mobile Menu Toggle */}
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} />
                </NavbarContent>

                {/* Brand Logo */}
                <NavbarBrand className="pr-3 h-full flex items-center">
                    <Link href="/" className="flex items-center gap-2 text-inherit hover:opacity-80 transition-opacity h-full">
                        <img
                            src="/assets/images/ribeiro-logo.png"
                            alt="RIBEIRO SRL - Servicios Petroleros y Construcción en Vaca Muerta, Neuquén y La Pampa"
                            className="h-10 md:h-14 w-auto py-1 object-contain"
                        />
                    </Link>
                </NavbarBrand>

                {/* Desktop Navigation */}
                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    <NavbarItem>
                        <Link className="text-foreground hover:text-primary transition-colors font-semibold text-base" href="/" aria-current="page">
                            Inicio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-foreground hover:text-primary transition-colors font-semibold text-base" href="/la-empresa">
                            La Empresa
                        </Link>
                    </NavbarItem>

                    {/* Unidades de Negocio Dropdown */}
                    <Dropdown
                        isOpen={isMenuOpenUN}
                        offset={-5}
                        placement="bottom"
                    >
                        <NavbarItem
                            onMouseEnter={handleMouseEnterUN}
                            onMouseLeave={handleMouseLeaveUN}
                            className="h-full flex items-center"
                        >
                            <DropdownTrigger>
                                <Button
                                    as={Link}
                                    href="/unidades-de-negocios"
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-foreground hover:text-primary transition-colors font-semibold text-base h-full"
                                    endContent={<ChevronDown size={16} />}
                                    radius="sm"
                                    variant="light"
                                >
                                    Unidades de Negocio
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="Unidades de Negocio"
                            className="w-[260px] bg-black/95 border border-white/10"
                            onMouseEnter={handleMouseEnterUN}
                            onMouseLeave={handleMouseLeaveUN}
                            itemClasses={{
                                base: "gap-4",
                                title: "text-md font-semibold text-white hover:text-primary transition-colors"
                            }}
                            onAction={() => setIsMenuOpenUN(false)}
                        >
                            <DropdownItem key="servicios_petroleros" href="/servicios-petroleros">
                                Servicios Petroleros
                            </DropdownItem>
                            <DropdownItem key="obra_publica" href="/obra-publica">
                                Obra Pública
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/* Trabajá con Nosotros Dropdown */}
                    <Dropdown
                        isOpen={isMenuOpenTN}
                        offset={-5}
                        placement="bottom"
                    >
                        <NavbarItem
                            onMouseEnter={handleMouseEnterTN}
                            onMouseLeave={handleMouseLeaveTN}
                            className="h-full flex items-center"
                        >
                            <DropdownTrigger>
                                <Button
                                    as={Link}
                                    href="#"
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-foreground hover:text-primary transition-colors font-semibold text-base h-full"
                                    endContent={<ChevronDown size={16} />}
                                    radius="sm"
                                    variant="light"
                                >
                                    Trabajá con nosotros
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="Trabajá con nosotros"
                            className="w-[220px] bg-black/95 border border-white/10"
                            onMouseEnter={handleMouseEnterTN}
                            onMouseLeave={handleMouseLeaveTN}
                            itemClasses={{
                                base: "gap-4",
                                title: "text-md font-semibold text-white hover:text-primary transition-colors"
                            }}
                            onAction={() => setIsMenuOpenTN(false)}
                        >
                            <DropdownItem key="proveedores" href="/proveedores">
                                Proveedores
                            </DropdownItem>
                            <DropdownItem key="rrhh" href="/rrhh">
                                Recursos Humanos
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>

                {/* Right Content (Button) */}
                <NavbarContent justify="end">
                    <NavbarItem className="hidden sm:flex">
                        <Button as={Link} className="bg-primary text-black font-bold text-sm hover:bg-primary-hover px-6" href="/contacto" variant="flat" size="md">
                            Contactanos
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                {/* Mobile Menu Content */}
                <NavbarMenu className="bg-black/95 pt-8">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-white hover:text-primary text-xl font-bold py-2 border-b border-white/10"
                                href={item.href}
                                size="lg"
                                onPress={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem className="pt-4">
                        <Button as={Link} className="bg-primary text-black font-bold text-lg w-full" href="/contacto" variant="flat" size="lg">
                            Contactanos
                        </Button>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </HeroUIProvider>
    );
}
