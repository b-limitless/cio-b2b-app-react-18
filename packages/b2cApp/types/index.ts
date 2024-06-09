export enum PaymentOptions {
  paypal = "paypal",
  creditCard = "creditCard",
}

export type PaymentOptionsTypes = `${PaymentOptions}` | null;
