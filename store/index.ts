import { configureStore } from "@reduxjs/toolkit";

import activityReducer from "@/store/slices/activitySlice";
import authReducer from "@/store/slices/authSlice";
import bookingReducer from "@/store/slices/bookingSlice";
import paymentReducer from "@/store/slices/paymentSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      activity: activityReducer,
      booking: bookingReducer,
      payment: paymentReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
