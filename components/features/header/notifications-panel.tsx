import { BellDot, CheckCircle2, Clock3 } from "lucide-react";

import { HeaderPopoverCard } from "@/components/features/header/header-popover-card";

const notifications = [
  {
    title: "New booking received",
    time: "2m ago",
    icon: BellDot,
    accent: "bg-sky-100 text-sky-600",
  },
  {
    title: "Payment confirmation pending",
    time: "12m ago",
    icon: Clock3,
    accent: "bg-amber-100 text-amber-600",
  },
  {
    title: "System update completed",
    time: "1h ago",
    icon: CheckCircle2,
    accent: "bg-emerald-100 text-emerald-600",
  },
];

export function NotificationsPanel() {
  return (
    <HeaderPopoverCard>
      <div className="flex items-center justify-between px-3 py-2">
        <div>
          <p className="text-sm font-semibold text-slate-900">Notifications</p>
          <p className="text-xs text-slate-500">3 unread updates</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
          3 new
        </span>
      </div>

      <div className="mt-1 space-y-1">
        {notifications.map((notification) => {
          const Icon = notification.icon;

          return (
            <button
              key={notification.title}
              type="button"
              className="flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
            >
              <div
                className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl ${notification.accent}`}
              >
                <Icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800">
                  {notification.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">{notification.time}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-2 border-t border-slate-200 px-3 pt-3">
        <button
          type="button"
          className="w-full rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          View all
        </button>
      </div>
    </HeaderPopoverCard>
  );
}
