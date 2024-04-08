"use client";

import { FormEvent, useCallback } from "react";

import { getCardNumberMasked } from "@/utils/functions/getCardNumberMasked";
import { getCreditCardValidityMasked } from "@/utils/functions/getCreditCardValidityMasked";
import { getPhoneMasked } from "@/utils/functions/getPhoneMasked";
import { getPostalCodeMasked } from "@/utils/functions/getPostalCodeMasked";

export function useFormValidation() {
  // Credit card
  const maskDate = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 5;
    let value = event.currentTarget.value;
    value = getCreditCardValidityMasked(value);
    event.currentTarget.value = value;
  }, []);

  const maskCardNumber = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 19;
    let value = event.currentTarget.value;
    value = getCardNumberMasked(value);
    event.currentTarget.value = value;
  }, []);

  const maskSecurityCode = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 3;
  }, []);

  // Billing Details
  const maskPhone = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 8;
    let value = event.currentTarget.value;
    value = getPhoneMasked(value);
    event.currentTarget.value = value;
  }, []);
  const maskPostalCode = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 5;
    let value = event.currentTarget.value;
    value = getPostalCodeMasked(value);
    event.currentTarget.value = value;
  }, []);

  return {
    maskDate,
    maskCardNumber,
    maskSecurityCode,
    maskPhone,
    maskPostalCode,
  };
}
