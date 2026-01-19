import React from "react";
import { Input, Textarea, Button, Autocomplete, AutocompleteItem } from "@heroui/react";
import { Send } from "lucide-react";

export default function ProviderForm() {
    const labelStyle = {
        color: "#000000",
        opacity: 1,
        fontWeight: 500,
        fontSize: "1rem",
        marginBottom: "0.5rem",
        display: "block"
    };

    const inputClasses = {
        label: "hidden", // We use our own label for maximum control
        inputWrapper: [
            "bg-gray-100",
            "hover:bg-gray-200",
            "transition-all",
            "h-16",
            "border-2",
            "border-transparent",
            "group-data-[focus=true]:border-primary",
            "group-data-[focus=true]:bg-white",
        ].join(" "),
        input: "text-lg !text-black placeholder:text-gray-400"
    };

    return (
        <div className="light">
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label style={labelStyle}>Razón Social</label>
                        <Input
                            placeholder="Ej: Constructora S.A."
                            variant="flat"
                            radius="lg"
                            classNames={inputClasses}
                            isRequired
                        />
                    </div>
                    <div className="flex flex-col">
                        <label style={labelStyle}>CUIT</label>
                        <Input
                            placeholder="XX-XXXXXXXX-X"
                            variant="flat"
                            radius="lg"
                            classNames={inputClasses}
                            isRequired
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label style={labelStyle}>Email de Contacto</label>
                        <Input
                            placeholder="contacto@empresa.com"
                            variant="flat"
                            type="email"
                            radius="lg"
                            classNames={inputClasses}
                            isRequired
                        />
                    </div>
                    <div className="flex flex-col">
                        <label style={labelStyle}>Teléfono</label>
                        <Input
                            placeholder="+54 299 ..."
                            variant="flat"
                            radius="lg"
                            classNames={inputClasses}
                            isRequired
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Rubro / Categoría</label>
                    <Autocomplete
                        placeholder="Seleccioná un rubro"
                        variant="flat"
                        radius="lg"
                        isRequired
                        classNames={{
                            base: "w-full",
                            inputWrapper: [
                                "bg-gray-100",
                                "hover:bg-gray-200",
                                "transition-all",
                                "h-16",
                                "border-2",
                                "border-transparent",
                                "group-data-[focus=true]:border-primary",
                                "group-data-[focus=true]:bg-white",
                            ].join(" "),
                            input: "text-lg !text-black font-medium placeholder:text-gray-400",
                            selectorButton: "text-black"
                        }}
                        popoverProps={{
                            className: "light",
                        }}
                        listboxProps={{
                            itemClasses: {
                                base: [
                                    "text-black",
                                    "font-medium",
                                    "transition-all",
                                    "data-[hover=true]:bg-primary/10",
                                    "data-[hover=true]:text-primary",
                                    "data-[selected=true]:bg-primary",
                                    "data-[selected=true]:text-black",
                                    "py-3",
                                ],
                            },
                        }}
                    >
                        <AutocompleteItem key="alquileres">Alquileres</AutocompleteItem>
                        <AutocompleteItem key="combustibles">Combustibles y Lubricantes</AutocompleteItem>
                        <AutocompleteItem key="consultoria">Consultoría y Servicios Profesionales</AutocompleteItem>
                        <AutocompleteItem key="sistemas">Insumos de informática - Sistemas</AutocompleteItem>
                        <AutocompleteItem key="insumos_industriales">Insumos Industriales</AutocompleteItem>
                        <AutocompleteItem key="logistica">Logística y Transporte</AutocompleteItem>
                        <AutocompleteItem key="construccion">Materiales de Construcción</AutocompleteItem>
                        <AutocompleteItem key="maquinaria">Repuestos y Maquinaria</AutocompleteItem>
                        <AutocompleteItem key="epp">Seguridad e Higiene (EPP)</AutocompleteItem>
                        <AutocompleteItem key="limpieza">Servicios de Limpieza y Mantenimiento</AutocompleteItem>
                        <AutocompleteItem key="otros">Otros</AutocompleteItem>
                    </Autocomplete>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Descripción de productos o servicios</label>
                    <Textarea
                        placeholder="Breve descripción de su oferta comercial..."
                        variant="flat"
                        radius="lg"
                        isRequired
                        classNames={{
                            ...inputClasses,
                            inputWrapper: inputClasses.inputWrapper.replace("h-16", ""),
                            input: "text-lg text-black p-2"
                        }}
                    />
                </div>

                <Button
                    className="w-full bg-primary text-black font-bold h-16 text-xl rounded-2xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all mt-8"
                    endContent={<Send size={24} />}
                >
                    ENVIAR
                </Button>
            </form>
        </div>
    );
}
