export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type Booking = {
  id: string;
  code: string;
  customerName: string;
  activityId: string;
  totalPrice: number;
  status: BookingStatus;
};
