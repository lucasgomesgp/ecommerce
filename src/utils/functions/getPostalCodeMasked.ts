export function getPostalCodeMasked(value: string) {
    //99999
    value = value.replace(/\D/g, ""); // Remove letters
    return value;
}