import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Booking } from "@/types/booking";

type BookingState = {
  items: Booking[];
  isLoading: boolean;
  error: string | null;
};

const initialState: BookingState = {
  items: [],
  isLoading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<Booking[]>) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setBookingLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setBookingError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setBookings, setBookingLoading, setBookingError } =
  bookingSlice.actions;
export default bookingSlice.reducer;
