"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { setAuthToken } from "@/lib/api/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";

export function DashboardHeader() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { role, user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    setAuthToken(null);
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-slate-950">Operations Workspace</h1>
          {role ? <Badge>{role}</Badge> : null}
        </div>
        <p className="text-sm text-slate-500">
          {user ? `Masuk sebagai ${user.name} (${user.email})` : "Belum ada sesi login aktif."}
        </p>
      </div>

      <Button variant="outline" onClick={handleLogout}>
        <LogOut className="size-4" />
        Logout
      </Button>
    </header>
  );
}
