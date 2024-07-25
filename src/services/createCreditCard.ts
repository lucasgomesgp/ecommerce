import { CreditCardSchema } from "@/components/FormPayment";

export async function createCreditCard(creditCardInfo: CreditCardSchema) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/creditcard`,
    {
      method: "POST",
      body: JSON.stringify({
        nameOnCard: creditCardInfo.name,
        number: creditCardInfo.number,
        secutiryCode: creditCardInfo.securityCode,
        expirationDate: creditCardInfo.expirationDate,
      }),
    }
  );
  const card = await response.json();
  return card;
}
