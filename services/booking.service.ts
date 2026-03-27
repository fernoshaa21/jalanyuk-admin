import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { Booking } from "@/types/booking";

export async function getBookings() {
  const response = await apiClient.get<Booking[]>(API_ENDPOINTS.bookings);

  return response.data;
}

export const bookingService = {
  getBookings,
};
