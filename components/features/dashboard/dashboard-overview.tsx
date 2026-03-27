"use client";

import { StatCard } from "@/components/shared/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/store/hooks";
import type { UserRole } from "@/types/auth";

type DashboardOverviewProps = {
  role: UserRole;
};

export function DashboardOverview({ role }: DashboardOverviewProps) {
  const { user } = useAppSelector((state) => state.auth);
  const totalActivities = useAppSelector((state) => state.activity.items.length);
  const totalBookings = useAppSelector((state) => state.booking.items.length);
  const totalPayments = useAppSelector((state) => state.payment.items.length);

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-white/70 bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_55%,_#334155_100%)] p-6 text-white shadow-xl shadow-slate-300/40">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
          {role} dashboard
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          {user ? `Selamat datang, ${user.name}` : "Panel siap digunakan"}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Layout, store, dan service layer sudah dipisah supaya modul admin dan
          seller bisa berkembang tanpa saling mengganggu.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Activities"
          value={String(totalActivities)}
          helper="Tersinkron dari activity slice"
        />
        <StatCard
          label="Bookings"
          value={String(totalBookings)}
          helper="Siap diisi dari booking service"
        />
        <StatCard
          label="Payments"
          value={String(totalPayments)}
          helper="Dipisah dalam payment slice"
        />
        <StatCard
          label="Role"
          value={role}
          helper="Menentukan menu dan routing dashboard"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contoh penggunaan Redux di component</CardTitle>
          <CardDescription>
            Komponen ini membaca `auth`, `activity`, `booking`, dan `payment`
            melalui `useAppSelector`.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          State user aktif: {user ? `${user.name} (${user.role})` : "belum login"}
        </CardContent>
      </Card>
    </section>
  );
}
