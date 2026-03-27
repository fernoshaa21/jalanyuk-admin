import { cn } from "@/lib/utils";

type UserStatus = "Active" | "Pending" | "Inactive";

type UserStatusBadgeProps = {
  status: UserStatus;
};

const badgeStyles: Record<UserStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Inactive: "bg-orange-100 text-orange-700",
};

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
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
