export const prerender = false;

import { verifyRecaptcha } from '../../utils/recaptcha';

export const POST = async ({ request }) => {
    const data = await request.json();

    try {
        const { recaptchaToken } = data;
        const isHuman = await verifyRecaptcha(recaptchaToken);

        if (!isHuman) {
            return new Response(JSON.stringify({
                message: "Recaptcha verification failed"
            }), { status: 403 });
        }

        const WEBHOOK_URL = import.meta.env.POWER_AUTOMATE_WEBHOOK_URL_COMPRAS;

        if (!WEBHOOK_URL) {
            return new Response(JSON.stringify({
                message: "Server configuration error"
            }), { status: 500 });
        }

        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return new Response(JSON.stringify({
                message: "Success"
            }), { status: 200 });
        } else {
            return new Response(JSON.stringify({
                message: "Error submitting form"
            }), { status: 500 });
        }
    } catch (error) {
        return new Response(JSON.stringify({
            message: error.message
        }), { status: 500 });
    }
};
