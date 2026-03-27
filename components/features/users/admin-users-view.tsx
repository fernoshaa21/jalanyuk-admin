import { FilterBar } from "@/components/features/activities/filter-bar";
import { UsersTable } from "@/components/features/users/users-table";

const userRows = [
  {
    user: "John Doe",
    email: "john@example.com",
    role: "User",
    joined: "05/01/2024",
    status: "Active" as const,
  },
  {
    user: "Emily Smith",
    email: "emily@example.com",
    role: "User",
    joined: "04/27/2024",
    status: "Pending" as const,
  },
  {
    user: "Michael Brown",
    email: "michael@bxemple.com",
    role: "User",
    joined: "04/22/2024",
    status: "Pending" as const,
  },
  {
    user: "Sarah Lee",
    email: "sarah@example.com",
    role: "User",
    joined: "04/18/2024",
    status: "Active" as const,
  },
  {
    user: "David Wilson",
    email: "david@example.com",
    role: "User",
    joined: "04/11/2024",
    status: "Inactive" as const,
  },
];

export function AdminUsersView() {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 shadow-sm shadow-slate-200/60 backdrop-blur">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
          Users
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Preview daftar users admin dengan struktur tabel yang siap disambungkan
          ke API users dan filter yang lebih detail nanti.
        </p>
      </div>

      <FilterBar filters={["All Users"]} />
      <UsersTable rows={userRows} />
    </section>
  );
}
