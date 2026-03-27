import {
  LogOut,
  Settings,
  UserCircle2,
} from "lucide-react";

import { HeaderPopoverCard } from "@/components/features/header/header-popover-card";

const menuItems = [
  {
    label: "Profile",
    icon: UserCircle2,
  },
  {
    label: "Settings",
    icon: Settings,
  },
  {
    label: "Logout",
    icon: LogOut,
    destructive: true,
  },
];

export function UserDropdownMenu() {
  return (
    <HeaderPopoverCard className="w-[min(92vw,17rem)]">
      <div className="rounded-xl bg-slate-50 px-4 py-3">
        <p className="text-sm font-semibold text-slate-900">Admin Jalanyuk</p>
        <p className="mt-1 text-xs text-slate-500">admin@jalanyuk.com • Admin</p>
      </div>

      <div className="mt-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition hover:bg-slate-50"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Icon className="size-4" />
              </div>
              <span className={item.destructive ? "text-rose-600" : "text-slate-700"}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </HeaderPopoverCard>
  );
}
