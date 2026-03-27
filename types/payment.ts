export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type Payment = {
  id: string;
  bookingId: string;
  method: string;
  amount: number;
  status: PaymentStatus;
  paidAt: string | null;
};
