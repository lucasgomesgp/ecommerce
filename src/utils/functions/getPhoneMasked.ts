export function getPhoneMasked(value: string) {
    //999-9999
    value = value.replace(/\D/g, ""); // Remove letters
    value = value.replace(/^(\d{3})(\d)/, "$1-$2"); // Put the mask on input
    return value;
}