export const prerender = false;

import { verifyRecaptcha } from '../../utils/recaptcha';

export const POST = async ({ request }) => {
    try {
        const body = await request.json();

        const { recaptchaToken } = body;
        const isHuman = await verifyRecaptcha(recaptchaToken);

        if (!isHuman) {
            return new Response(JSON.stringify({ error: "Recaptcha verification failed" }), { status: 403 });
        }

        // Accedemos a la variable de entorno NO pública (sin PUBLIC_)
        // Esto solo funciona del lado del servidor (aquí), no en el navegador.
        const webhookUrl = import.meta.env.POWER_AUTOMATE_WEBHOOK_RRHH;

        if (!webhookUrl) {
            console.error("Error: POWER_AUTOMATE_WEBHOOK_RRHH no está definida en .env");
            return new Response(JSON.stringify({ error: "Configuration Error: Webhook URL missing" }), { status: 500 });
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // Devolvemos la respuesta de Power Automate al frontend
        const responseText = await response.text();

        return new Response(responseText, {
            status: response.status
        });

    } catch (error) {
        console.error("Error en API Proxy:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
