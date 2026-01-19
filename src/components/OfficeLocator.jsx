import React, { useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem, Card, CardBody } from "@heroui/react";
import { MapPin, Clock } from "lucide-react";

import { OFFICES_DATA } from "../data/offices.js";

const OFFICES = OFFICES_DATA;

export default function OfficeLocator() {
    // State for province and selected office
    const [selectedProvince, setSelectedProvince] = useState("neuquen");
    const currentOffices = OFFICES[selectedProvince] || [];
    const [selectedOffice, setSelectedOffice] = useState(null);

    // Initial setup and update selected office when province changes
    useEffect(() => {
        if (currentOffices && currentOffices.length > 0) {
            setSelectedOffice(currentOffices[0]);
        }
    }, [selectedProvince]);

    // Safety check for initial state
    useEffect(() => {
        if (!selectedOffice && currentOffices.length > 0) {
            setSelectedOffice(currentOffices[0]);
        }
    }, []);

    const inputClasses = {
        label: "hidden",
        inputWrapper: [
            "bg-white",
            "hover:bg-gray-100",
            "transition-all",
            "h-16",
            "border-2",
            "border-gray-200",
            "group-data-[focus=true]:border-primary",
        ].join(" "),
        input: "text-lg !text-black font-medium placeholder:text-gray-400",
        selectorButton: "text-black"
    };

    return (
        <div className="flex flex-col gap-10 light">
            <div className="max-w-md">
                <p className="text-black font-medium mb-2">Seleccioná una provincia</p>
                <Autocomplete
                    placeholder="Neuquén"
                    variant="flat"
                    radius="lg"
                    aria-label="Seleccionar provincia"
                    selectedKey={selectedProvince}
                    onSelectionChange={(key) => key && setSelectedProvince(key.toString())}
                    classNames={inputClasses}
                    popoverProps={{ className: "light" }}
                    listboxProps={{
                        itemClasses: {
                            base: ["text-black", "font-medium", "transition-all", "data-[hover=true]:bg-primary/10", "py-3"],
                        },
                    }}
                >
                    <AutocompleteItem key="neuquen" textValue="Neuquén">Neuquén</AutocompleteItem>
                    <AutocompleteItem key="la-pampa" textValue="La Pampa">La Pampa</AutocompleteItem>
                    <AutocompleteItem key="rio-negro" textValue="Río Negro">Río Negro</AutocompleteItem>
                </Autocomplete>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-4 custom-scrollbar">
                    {currentOffices.map((office) => {
                        const isSelected = selectedOffice?.id === office.id;
                        return (
                            <Card
                                key={office.id}
                                isPressable
                                onPress={() => setSelectedOffice(office)}
                                className={`w-full border transition-all shadow-lg rounded-2xl ${isSelected
                                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                                    : "border-gray-100 bg-white hover:border-primary/50"
                                    }`}
                            >
                                <CardBody className="py-3 px-5">
                                    <h3 className="text-base font-bold text-black mb-2">{office.name}</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="text-primary" />
                                            <p className="text-xs text-gray-600 font-medium">{office.address}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-primary" />
                                            <p className="text-xs text-gray-600 font-medium">{office.hours}</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>

                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl h-[500px] lg:h-full min-h-[500px] sticky top-32">
                    {selectedOffice && (
                        <iframe
                            src={selectedOffice.mapUrl}
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Mapa de ${selectedOffice.name}`}
                        ></iframe>
                    )}
                    {!selectedOffice && (
                        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                            <p className="font-medium">Seleccioná una base para ver el mapa</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
