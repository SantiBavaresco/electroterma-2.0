export const CONTACT_EMAIL = "info@electroterma.com.ar";

/** Abre el cliente de mail con una consulta pre-armada a Electroterma. */
export function openContactEmail() {
    const subject = "Consulta sobre equipamiento";
    const body = "Hola! Me gustaría hacer una consulta sobre equipamiento de Electroterma";
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
}
