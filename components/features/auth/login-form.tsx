"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { setAuthToken } from "@/lib/api/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/store/hooks";
import { setToken, setUser } from "@/store/slices/authSlice";
import type { UserRole } from "@/types/auth";

function getDashboardRouteByRole(role: UserRole) {
  return role === "admin" ? "/admin/dashboard" : "/seller/dashboard";
}

export function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("admin@jalanyuk.com");
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState<UserRole>("admin");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const token = `demo-token-${role}`;
      const user = {
        id: crypto.randomUUID(),
        name: role === "admin" ? "Admin Jalanyuk" : "Seller Jalanyuk",
        email,
        role,
      };

      dispatch(setUser(user));
      dispatch(setToken(token));
      setAuthToken(token);
      router.replace(getDashboardRouteByRole(role));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-white/80 bg-white/90 shadow-xl shadow-slate-200/70">
      <CardHeader>
        <CardTitle>Login panel</CardTitle>
        <CardDescription>
          Form ini sudah siap untuk dihubungkan ke endpoint login backend.
          Sementara, role dipilih manual untuk demo redirect.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="nama@jalanyuk.com"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Masukkan password"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value as UserRole)}
              className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400"
            >
              <option value="admin">Admin</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Memproses..." : "Masuk"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
