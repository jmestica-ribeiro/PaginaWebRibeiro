import React from "react";
import { Input, Textarea, Button, Autocomplete, AutocompleteItem } from "@heroui/react";
import { Send, Upload, CheckCircle, AlertCircle } from "lucide-react";
import ReCAPTCHAImport from "react-google-recaptcha";

export default function RRHHForm() {
    const ReCAPTCHA = ReCAPTCHAImport.default || ReCAPTCHAImport;
    const [captchaValue, setCaptchaValue] = React.useState(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formStatus, setFormStatus] = React.useState("idle");
    const fileInputRef = React.useRef(null);
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const [selectedArea, setSelectedArea] = React.useState(null);

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            return;
        }

        setIsSubmitting(true);
        setFormStatus("idle");

        try {
            const formData = new FormData(e.target);
            const data = {
                nombre: formData.get("nombre"),
                dni: formData.get("dni"),
                email: formData.get("email"),
                telefono: formData.get("telefono"),
                puesto: formData.get("puesto"),
                area: selectedArea,
                mensaje: formData.get("mensaje"),
                captcha: captchaValue,
                cv: null
            };

            if (selectedFile) {
                const base64File = await toBase64(selectedFile);
                // Remove data URL prefix (e.g., "data:application/pdf;base64,") to get raw base64
                const base64Content = base64File.split(',')[1];

                data.cv = {
                    name: selectedFile.name,
                    type: selectedFile.type,
                    contentBytes: base64Content
                };
            }

            const response = await fetch("/api/rrhh", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus("success");
                setCaptchaValue(null);
                setSelectedFile(null);
                setSelectedArea(null);
                e.target.reset(); // Limpiar inputs nativos
            } else {
                const errorText = await response.text();
                console.error("Power Automate Webhook Error:", response.status, errorText);
                throw new Error(`Error del servidor: ${response.status}`);
            }
        } catch (error) {
            console.error("Error enviando formulario:", error);
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
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label style={labelStyle}>Nombre y Apellido</label>
                        <Input
                            aria-label="Nombre y Apellido"
                            name="nombre"
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
                            aria-label="DNI"
                            name="dni"
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
                            aria-label="Email"
                            name="email"
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
                            aria-label="Teléfono"
                            name="telefono"
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
                        aria-label="Área de interés"
                        placeholder="Seleccioná un área"
                        variant="flat"
                        radius="lg"
                        isRequired
                        onSelectionChange={setSelectedArea}
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

                <div className="flex flex-col">
                    <label style={labelStyle}>Puesto de interés</label>
                    <Input
                        aria-label="Puesto"
                        name="puesto"
                        placeholder="Ej: Chofer de Cargas Peligrosas / Administrativo Contable"
                        variant="flat"
                        radius="lg"
                        classNames={inputClasses}
                        isRequired
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label style={labelStyle}>Currículum Vitae</label>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                    />
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`p-8 border-2 border-dashed rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group bg-gray-50/50 ${selectedFile
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-primary hover:bg-white"
                            }`}
                    >
                        <div className={`p-4 rounded-full shadow-sm transition-colors ${selectedFile
                            ? "bg-primary text-black"
                            : "bg-white text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                            }`}>
                            {selectedFile ? <CheckCircle size={24} /> : <Upload size={24} />}
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-gray-900">
                                {selectedFile ? selectedFile.name : "Subí tu CV (PDF)"}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {selectedFile ? "Clic para cambiar archivo" : "Hacé clic para seleccionar archivo"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label style={labelStyle}>Mensaje / Comentarios</label>
                    <Textarea
                        aria-label="Mensaje"
                        name="mensaje"
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
                            <p className="font-bold">¡CV recibido correctamente!</p>
                            <p className="text-sm">Tu postulación ha sido registrada en nuestra base de datos.</p>
                        </div>
                    </div>
                )}

                {formStatus === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-bottom-2">
                        <AlertCircle className="shrink-0" size={24} />
                        <div>
                            <p className="font-bold">Error al enviar la postulación</p>
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
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR POSTULACIÓN"}
                </Button>
            </form>
        </div>
    );
}
