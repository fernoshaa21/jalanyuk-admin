"use client";

import { type ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

import { setAuthToken } from "@/lib/api/client";
import { makeStore, type AppStore } from "@/store";
import { logout, setToken, setUser } from "@/store/slices/authSlice";
import type { AuthUser } from "@/types/auth";

const AUTH_STORAGE_KEY = "jalanyuk-auth";

type PersistedAuth = {
  token: string | null;
  user: AuthUser | null;
};

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState<AppStore>(() => makeStore());

  useEffect(() => {
    const rawAuth = window.localStorage.getItem(AUTH_STORAGE_KEY);

    if (rawAuth) {
      try {
        const persistedAuth = JSON.parse(rawAuth) as PersistedAuth;

        store.dispatch(setUser(persistedAuth.user));
        store.dispatch(setToken(persistedAuth.token));
        setAuthToken(persistedAuth.token);
      } catch {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
        setAuthToken(null);
        store.dispatch(logout());
      }
    } else {
      setAuthToken(null);
    }

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const authState: PersistedAuth = {
        token: state.auth.token,
        user: state.auth.user,
      };

      setAuthToken(state.auth.token);
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState));
    });

    return () => {
      setAuthToken(null);
      unsubscribe();
    };
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
