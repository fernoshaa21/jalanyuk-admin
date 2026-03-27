import { BookingStatusBadge } from "@/components/features/dashboard/booking-status-badge";
import { DashboardSectionCard } from "@/components/features/dashboard/dashboard-section-card";

type BookingStatus = "Confirmed" | "Pending" | "Cancelled";

type BookingRow = {
  id: string;
  user: string;
  activity: string;
  date: string;
  status: BookingStatus;
};

type RecentBookingsTableProps = {
  bookings: BookingRow[];
};

export function RecentBookingsTable({
  bookings,
}: RecentBookingsTableProps) {
  return (
    <DashboardSectionCard title="Recent Bookings">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-lg font-semibold text-slate-700">
              <th className="border-b border-slate-200 px-4 py-4">Booking ID</th>
              <th className="border-b border-slate-200 px-4 py-4">User</th>
              <th className="border-b border-slate-200 px-4 py-4">Activity</th>
              <th className="border-b border-slate-200 px-4 py-4">Date</th>
              <th className="border-b border-slate-200 px-4 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="text-base text-slate-700">
                <td className="border-b border-slate-100 px-4 py-5 font-semibold text-slate-800">
                  {booking.id}
                </td>
                <td className="border-b border-slate-100 px-4 py-5">
                  {booking.user}
                </td>
                <td className="border-b border-slate-100 px-4 py-5">
                  {booking.activity}
                </td>
                <td className="border-b border-slate-100 px-4 py-5 font-medium">
                  {booking.date}
                </td>
                <td className="border-b border-slate-100 px-4 py-5">
                  <BookingStatusBadge status={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardSectionCard>
  );
}
