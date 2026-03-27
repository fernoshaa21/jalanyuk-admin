import { PaginationBar } from "@/components/features/activities/pagination-bar";
import { DashboardSectionCard } from "@/components/features/dashboard/dashboard-section-card";
import { UserStatusBadge } from "@/components/features/users/user-status-badge";

type UserStatus = "Active" | "Pending" | "Inactive";

type UserRow = {
  user: string;
  email: string;
  role: string;
  joined: string;
  status: UserStatus;
};

type UsersTableProps = {
  rows: UserRow[];
};

export function UsersTable({ rows }: UsersTableProps) {
  return (
    <DashboardSectionCard className="overflow-hidden">
      <div className="-mx-5 -mt-5 sm:-mx-7 sm:-mt-7">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-lg font-semibold text-slate-700">
                <th className="border-b border-slate-200 px-6 py-6">User</th>
                <th className="border-b border-slate-200 px-6 py-6">Email</th>
                <th className="border-b border-slate-200 px-6 py-6">Role</th>
                <th className="border-b border-slate-200 px-6 py-6">Joined</th>
                <th className="border-b border-slate-200 px-6 py-6">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.email}-${row.joined}`} className="text-base text-slate-700">
                  <td className="border-b border-slate-100 px-6 py-6 font-semibold text-slate-800">
                    {row.user}
                  </td>
                  <td className="border-b border-slate-100 px-6 py-6">{row.email}</td>
                  <td className="border-b border-slate-100 px-6 py-6">{row.role}</td>
                  <td className="border-b border-slate-100 px-6 py-6 font-medium">
                    {row.joined}
                  </td>
                  <td className="border-b border-slate-100 px-6 py-6">
                    <UserStatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PaginationBar rangeText="1–5 of 340" />
      </div>
    </DashboardSectionCard>
  );
}
