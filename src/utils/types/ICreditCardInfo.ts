export interface ICreditCardInfo {
  card: {
    id: string;
    nameOnCard: string;
    number: string;
    securityCode: string;
    userId: string;
    expirationCode: string;
  };
}
