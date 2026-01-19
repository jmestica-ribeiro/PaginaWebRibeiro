import React from "react";
import { HeroUIProvider as Provider } from "@heroui/react";

export function HeroUIProvider({ children }) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}
