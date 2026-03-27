import { ActivitiesTable } from "@/components/features/activities/activities-table";
import { FilterBar } from "@/components/features/activities/filter-bar";

const activityRows = [
  {
    bookingId: "#10234",
    user: "John Doe",
    activity: "Mountain Hiking",
    date: "04/20/2024",
  },
  {
    bookingId: "#10233",
    user: "Emily Smith",
    activity: "City Tour",
    date: "04/18/2024",
  },
  {
    bookingId: "#10232",
    user: "Michael Brown",
    activity: "Scuba Diving",
    date: "04/17/2024",
  },
  {
    bookingId: "#10231",
    user: "Sarah Lee",
    activity: "Safari Adventure",
    date: "04/16/2024",
  },
  {
    bookingId: "#10230",
    user: "David Wilson",
    activity: "Beach Trip",
    date: "04/15/2024",
  },
];

export function AdminActivitiesView() {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 shadow-sm shadow-slate-200/60 backdrop-blur">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
          Activities
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Preview list untuk aktivitas booking admin. Struktur UI ini sudah siap
          dihubungkan ke API dan filter nyata nanti.
        </p>
      </div>

      <FilterBar />
      <ActivitiesTable rows={activityRows} />
    </section>
  );
}
