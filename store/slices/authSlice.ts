import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthUser, UserRole } from "@/types/auth";

type AuthState = {
  user: AuthUser | null;
  token: string | null;
  role: UserRole | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
      state.role = action.payload?.role ?? null;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
