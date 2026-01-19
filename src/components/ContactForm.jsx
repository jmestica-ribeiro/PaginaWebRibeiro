import React from "react";
import { Input, Textarea, Button, Autocomplete, AutocompleteItem } from "@heroui/react";
import { Send } from "lucide-react";

export default function ContactForm() {
    const labelStyle = {
        color: "#000000",
        opacity: 1,
        fontWeight: 500,
        fontSize: "1rem",
        marginBottom: "0.5rem",
        display: "block"
    };

    const inputClasses = {
        label: "hidden",
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
    };

    return (
        <div className="light">
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label style={labelStyle}>Nombre y Apellido</label>
                        <Input
                            placeholder="Tu nombre completo"
                            variant="flat"
                            radius="lg"
                            isRequired
                            classNames={inputClasses}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label style={labelStyle}>Email</label>
                        <Input
                            placeholder="ejemplo@correo.com"
                            variant="flat"
                            type="email"
                            radius="lg"
                            isRequired
                            classNames={inputClasses}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Asunto</label>
                    <Autocomplete
                        placeholder="Seleccioná un motivo"
                        variant="flat"
                        radius="lg"
                        isRequired
                        classNames={{
                            base: "w-full",
                            inputWrapper: inputClasses.inputWrapper,
                            input: "text-lg !text-black font-medium placeholder:text-gray-400",
                            selectorButton: "text-black"
                        }}
                        popoverProps={{ className: "light" }}
                        listboxProps={{
                            itemClasses: {
                                base: ["text-black", "font-medium", "transition-all", "data-[hover=true]:bg-primary/10", "py-3"],
                            },
                        }}
                    >
                        <AutocompleteItem key="consulta_general">Consulta General</AutocompleteItem>
                        <AutocompleteItem key="presupuesto">Solicitud de Presupuesto</AutocompleteItem>
                        <AutocompleteItem key="servicios">Información de Servicios</AutocompleteItem>
                        <AutocompleteItem key="otros">Otros</AutocompleteItem>
                    </Autocomplete>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Mensaje</label>
                    <Textarea
                        placeholder="Escribí tu mensaje aquí..."
                        variant="flat"
                        radius="lg"
                        isRequired
                        minRows={4}
                        classNames={{
                            ...inputClasses,
                            inputWrapper: inputClasses.inputWrapper.replace("h-16", ""),
                            input: "text-lg !text-black p-2"
                        }}
                    />
                </div>

                <Button
                    className="w-full bg-primary text-black font-bold h-16 text-xl rounded-2xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all mt-8"
                    endContent={<Send size={24} />}
                >
                    ENVIAR MENSAJE
                </Button>
            </form>
        </div>
    );
}
