import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Payment } from "@/types/payment";

type PaymentState = {
  items: Payment[];
  isLoading: boolean;
  error: string | null;
};

const initialState: PaymentState = {
  items: [],
  isLoading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayments: (state, action: PayloadAction<Payment[]>) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setPaymentLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setPaymentError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setPayments, setPaymentLoading, setPaymentError } =
  paymentSlice.actions;
export default paymentSlice.reducer;
