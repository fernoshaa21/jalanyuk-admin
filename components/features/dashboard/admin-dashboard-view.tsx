import {
  CalendarCheck2,
  DollarSign,
  Flag,
  Users,
} from "lucide-react";

import { RecentBookingsTable } from "@/components/features/dashboard/recent-bookings-table";
import { SummaryCard } from "@/components/features/dashboard/summary-card";
import { UserStatisticsCard } from "@/components/features/dashboard/user-statistics-card";

const summaryCards = [
  {
    title: "Total Bookings",
    value: "1,250",
    icon: CalendarCheck2,
    className: "bg-[linear-gradient(135deg,_#3159e7_0%,_#2d58d8_100%)]",
  },
  {
    title: "Total Activities",
    value: "85",
    icon: Flag,
    className: "bg-[linear-gradient(135deg,_#2cab71_0%,_#35a16e_100%)]",
  },
  {
    title: "Total Users",
    value: "340",
    icon: Users,
    className: "bg-[linear-gradient(135deg,_#ff8f2b_0%,_#ff7a21_100%)]",
  },
  {
    title: "Total Revenue",
    value: "$45,780",
    icon: DollarSign,
    className: "bg-[linear-gradient(135deg,_#ff5b56_0%,_#ff474f_100%)]",
  },
];

const recentBookings = [
  {
    id: "#10234",
    user: "John Doe",
    activity: "Mountain Hiking",
    date: "04/20/2024",
    status: "Confirmed" as const,
  },
  {
    id: "#10233",
    user: "Emily Smith",
    activity: "City Tour",
    date: "04/18/2024",
    status: "Pending" as const,
  },
  {
    id: "#10232",
    user: "Michael Brown",
    activity: "Scuba Diving",
    date: "04/17/2024",
    status: "Cancelled" as const,
  },
  {
    id: "#10231",
    user: "Sarah Lee",
    activity: "Safari Adventure",
    date: "04/16/2024",
    status: "Confirmed" as const,
  },
  {
    id: "#10230",
    user: "David Wilson",
    activity: "Beach Trip",
    date: "04/15/2024",
    status: "Pending" as const,
  },
];

export function AdminDashboardView() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 shadow-sm shadow-slate-200/60 backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
          Admin Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-800">
          Overview panel for JalanYuk operations
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-500">
          Tampilan dashboard ini menggunakan dummy data sementara dan sudah siap
          dihubungkan ke API untuk aktivitas, booking, pengguna, dan revenue.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
        {summaryCards.map((card) => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </div>

      <div className="grid gap-5 2xl:grid-cols-[1.2fr_1fr]">
        <RecentBookingsTable bookings={recentBookings} />
        <UserStatisticsCard />
      </div>
    </section>
  );
}
