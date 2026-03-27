"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  CalendarCheck2,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { UserRole } from "@/types/auth";

export type DashboardNavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

type DashboardSidebarProps = {
  role: UserRole;
};

const navigationByRole: Record<UserRole, DashboardNavItem[]> = {
  admin: [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Activities",
      href: "/admin/activities",
      icon: Activity,
    },
    {
      title: "Bookings",
      href: "/admin/bookings",
      icon: CalendarCheck2,
    },
  ],
  seller: [
    {
      title: "Dashboard",
      href: "/seller/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Activities",
      href: "/seller/activities",
      icon: Activity,
    },
    {
      title: "Bookings",
      href: "/seller/bookings",
      icon: CalendarCheck2,
    },
  ],
};

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const pathname = usePathname();
  const items = navigationByRole[role];

  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/60 bg-slate-950 px-5 py-6 text-slate-200 lg:flex lg:flex-col">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Jalanyuk Panel
        </p>
        <h2 className="mt-2 text-xl font-semibold capitalize">{role} workspace</h2>
        <p className="mt-1 text-sm text-slate-400">
          Fondasi panel terpisah untuk admin dan seller.
        </p>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-2">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors",
                isActive
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon className="size-4" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
