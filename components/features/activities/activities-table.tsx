import { Pencil, Trash2 } from "lucide-react";

import { ActionIconButton } from "@/components/features/activities/action-icon-button";
import { PaginationBar } from "@/components/features/activities/pagination-bar";
import { DashboardSectionCard } from "@/components/features/dashboard/dashboard-section-card";

type ActivityRow = {
  bookingId: string;
  user: string;
  activity: string;
  date: string;
};

type ActivitiesTableProps = {
  rows: ActivityRow[];
};

export function ActivitiesTable({ rows }: ActivitiesTableProps) {
  return (
    <DashboardSectionCard title="" className="overflow-hidden">
      <div className="-mx-5 -mt-5 sm:-mx-7 sm:-mt-7">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-lg font-semibold text-slate-700">
                <th className="border-b border-slate-200 px-6 py-6">Booking ID</th>
                <th className="border-b border-slate-200 px-6 py-6">User</th>
                <th className="border-b border-slate-200 px-6 py-6">Activity</th>
                <th className="border-b border-slate-200 px-6 py-6">Date</th>
                <th className="border-b border-slate-200 px-6 py-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.bookingId} className="text-base text-slate-700">
                  <td className="border-b border-slate-100 px-6 py-6 font-semibold text-slate-800">
                    {row.bookingId}
                  </td>
                  <td className="border-b border-slate-100 px-6 py-6">{row.user}</td>
                  <td className="border-b border-slate-100 px-6 py-6">{row.activity}</td>
                  <td className="border-b border-slate-100 px-6 py-6 font-medium">
                    {row.date}
                  </td>
                  <td className="border-b border-slate-100 px-6 py-6">
                    <div className="flex items-center gap-3">
                      <ActionIconButton icon={Pencil} variant="edit" />
                      <ActionIconButton icon={Trash2} variant="delete" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PaginationBar />
      </div>
    </DashboardSectionCard>
  );
}
