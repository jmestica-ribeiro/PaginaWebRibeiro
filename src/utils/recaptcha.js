export async function verifyRecaptcha(token) {
    const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

    // Si no hay key configurada, bloqueamos por seguridad (fail closed)
    if (!secretKey) {
        console.error("CRITICAL: RECAPTCHA_SECRET_KEY is missing in .env");
        return false;
    }

    if (!token) {
        return false;
    }

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error("Recaptcha validation error:", error);
        return false;
    }
}
