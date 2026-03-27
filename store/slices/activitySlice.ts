import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Activity } from "@/types/activity";

type ActivityState = {
  items: Activity[];
  isLoading: boolean;
  error: string | null;
};

const initialState: ActivityState = {
  items: [],
  isLoading: false,
  error: null,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setActivities: (state, action: PayloadAction<Activity[]>) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setActivityLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setActivityError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setActivities, setActivityLoading, setActivityError } =
  activitySlice.actions;
export default activitySlice.reducer;
