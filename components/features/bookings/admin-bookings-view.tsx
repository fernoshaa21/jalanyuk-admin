import { FilterBar } from "@/components/features/activities/filter-bar";
import { BookingsTable } from "@/components/features/bookings/bookings-table";

const bookingRows = [
  {
    bookingId: "#10234",
    user: "John Doe",
    activity: "Mountain Hiking",
    date: "04/20/2024",
    status: "Confirmed" as const,
  },
  {
    bookingId: "#10233",
    user: "Emily Smith",
    activity: "City Tour",
    date: "04/18/2024",
    status: "Pending" as const,
  },
  {
    bookingId: "#10232",
    user: "Michael Brown",
    activity: "Scuba Diving",
    date: "04/17/2024",
    status: "Cancelled" as const,
  },
  {
    bookingId: "#10231",
    user: "Sarah Lee",
    activity: "Safari Adventure",
    date: "04/16/2024",
    status: "Confirmed" as const,
  },
  {
    bookingId: "#10230",
    user: "David Wilson",
    activity: "Beach Trip",
    date: "04/15/2024",
    status: "Pending" as const,
  },
];

export function AdminBookingsView() {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 shadow-sm shadow-slate-200/60 backdrop-blur">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
          Bookings
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Preview daftar booking admin dengan filter, status, dan actions yang
          konsisten dengan halaman activities.
        </p>
      </div>

      <FilterBar />
      <BookingsTable rows={bookingRows} />
    </section>
  );
}
