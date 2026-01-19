import React from "react";
import { Input, Textarea, Button, Autocomplete, AutocompleteItem } from "@heroui/react";
import { Send, Upload } from "lucide-react";

export default function RRHHForm() {
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
        input: "text-lg !text-black placeholder:text-gray-400"
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
                            classNames={inputClasses}
                            isRequired
                        />
                    </div>
                    <div className="flex flex-col">
                        <label style={labelStyle}>DNI</label>
                        <Input
                            placeholder="Sin puntos"
                            variant="flat"
                            radius="lg"
                            classNames={inputClasses}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label style={labelStyle}>Email</label>
                        <Input
                            placeholder="ejemplo@correo.com"
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
                            placeholder="+54 ..."
                            variant="flat"
                            radius="lg"
                            classNames={inputClasses}
                            isRequired
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Área de interés</label>
                    <Autocomplete
                        placeholder="Seleccioná un área"
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
                        <AutocompleteItem key="administracion">Administración y Finanzas</AutocompleteItem>
                        <AutocompleteItem key="almacen">Almacén y Depósito</AutocompleteItem>
                        <AutocompleteItem key="choferes">Choferes y Operadores de Máquina</AutocompleteItem>
                        <AutocompleteItem key="compras">Compras</AutocompleteItem>
                        <AutocompleteItem key="sistemas">Informática y Sistemas</AutocompleteItem>
                        <AutocompleteItem key="ingenieria">Ingeniería y Proyectos</AutocompleteItem>
                        <AutocompleteItem key="logistica">Logística y Transporte</AutocompleteItem>
                        <AutocompleteItem key="mecanica">Mecánica</AutocompleteItem>
                        <AutocompleteItem key="operaciones">Operaciones y Campo</AutocompleteItem>
                        <AutocompleteItem key="rrhh">Recursos Humanos</AutocompleteItem>
                        <AutocompleteItem key="seguridad">Seguridad e Higiene</AutocompleteItem>
                        <AutocompleteItem key="otros">Otros</AutocompleteItem>
                    </Autocomplete>
                </div>

                <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Currículum Vitae</label>
                    <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-white transition-all cursor-pointer group bg-gray-50/50">
                        <div className="p-4 rounded-full bg-white shadow-sm group-hover:bg-primary/10 transition-colors">
                            <Upload size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-900">Subí tu CV (PDF)</p>
                            <p className="text-xs text-gray-500 mt-1">Hacé clic para seleccionar archivo</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Mensaje / Comentarios</label>
                    <Textarea
                        placeholder="Contanos por qué te gustaría sumarte..."
                        variant="flat"
                        radius="lg"
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
