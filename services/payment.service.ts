import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { Payment } from "@/types/payment";

export async function getPayments() {
  const response = await apiClient.get<Payment[]>(API_ENDPOINTS.payments);

  return response.data;
}

export const paymentService = {
  getPayments,
};
