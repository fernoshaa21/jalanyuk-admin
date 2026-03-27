import { cn } from "@/lib/utils";

type BookingStatus = "Confirmed" | "Pending" | "Cancelled";

type BookingStatusBadgeProps = {
  status: BookingStatus;
};

const badgeStyles: Record<BookingStatus, string> = {
  Confirmed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-w-28 justify-center rounded-xl px-4 py-2 text-sm font-semibold",
        badgeStyles[status],
      )}
    >
      {status}
    </span>
  );
}
