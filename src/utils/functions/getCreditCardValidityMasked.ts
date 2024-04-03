export function getCreditCardValidityMasked(value: string){
    // 99/99
    value = value.replace(/\D/g, ""); // Remove letters
    value = value.replace(/^(\d{2})(\d)/, "$1/$2"); // Add mask
    return value;
}