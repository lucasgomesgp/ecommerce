export function getCardNumberMasked(value: string){
    // 9999 9999 9999 9999
    value = value.replace(/\D/g, ""); // Remove letters
    value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4"); // Add mask
    return value;
}