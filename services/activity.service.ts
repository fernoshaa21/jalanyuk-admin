import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { Activity } from "@/types/activity";

export async function getActivities() {
  const response = await apiClient.get<Activity[]>(API_ENDPOINTS.activities);

  return response.data;
}

export const activityService = {
  getActivities,
};
