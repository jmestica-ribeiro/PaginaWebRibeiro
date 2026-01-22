import React from "react";
import { Input, Textarea, Button, Autocomplete, AutocompleteItem } from "@heroui/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import ReCAPTCHAImport from "react-google-recaptcha";

export default function ProviderForm() {
    const ReCAPTCHA = ReCAPTCHAImport.default || ReCAPTCHAImport;
    const [captchaValue, setCaptchaValue] = React.useState(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formStatus, setFormStatus] = React.useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            return;
        }

        setIsSubmitting(true);
        setFormStatus("idle");

        // Collect form data
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Add additional metadata if needed (e.g. timestamp)
        const payload = {
            ...data,
            timestamp: new Date().toISOString(),
            recaptchaToken: captchaValue
        };

        try {
            // Send data to our internal API endpoint (which securely calls Power Automate)
            const response = await fetch("/api/compras", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setFormStatus("success");
                setCaptchaValue(null);
                e.target.reset(); // Clear the form
            } else {
                throw new Error("Error submitting form");
            }
        } catch (error) {
            console.error(error);
            setFormStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label style={labelStyle}>Razón Social</label>
                        <Input
                            name="razonSocial"
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
                            name="cuit"
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
                            name="email"
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
                            name="telefono"
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
                        name="rubro"
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
                        name="descripcion"
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

                <div className="flex flex-col gap-2">
                    <ReCAPTCHA
                        sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={setCaptchaValue}
                    />
                </div>

                {formStatus === "success" && (
                    <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3 text-green-700 animate-in fade-in slide-in-from-bottom-2">
                        <CheckCircle className="shrink-0" size={24} />
                        <div>
                            <p className="font-bold">¡Solicitud enviada correctamente!</p>
                            <p className="text-sm">Evaluaremos tu propuesta y te contactaremos.</p>
                        </div>
                    </div>
                )}

                {formStatus === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-bottom-2">
                        <AlertCircle className="shrink-0" size={24} />
                        <div>
                            <p className="font-bold">Error al enviar la solicitud</p>
                            <p className="text-sm">Por favor, revisá tu conexión e intentá nuevamente.</p>
                        </div>
                    </div>
                )}

                <Button
                    className="w-full bg-primary text-black font-bold h-16 text-xl rounded-2xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    endContent={!isSubmitting && <Send size={24} />}
                    isDisabled={!captchaValue || isSubmitting}
                    isLoading={isSubmitting}
                    type="submit"
                >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
                </Button>
            </form>
        </div>
    );
}
