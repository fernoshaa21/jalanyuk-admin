"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck2,
  Flag,
  Home,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const adminNavigation = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Activities",
    href: "/admin/activities",
    icon: Flag,
  },
  {
    title: "Bookings",
    href: "/admin/bookings",
    icon: CalendarCheck2,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-[linear-gradient(180deg,_#17345f_0%,_#1d3964_45%,_#182f53_100%)] text-white shadow-2xl shadow-slate-950/20">
      <div className="border-b border-white/10 px-8 py-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
            <Settings className="size-7" />
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight">Admin Panel</p>
            <p className="mt-1 text-sm text-blue-100/75">
              JalanYuk management workspace
            </p>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-4 py-6">
        {adminNavigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-2xl px-5 py-4 text-lg font-medium transition-all",
                isActive
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-blue-50/88 hover:bg-white/8 hover:text-white",
              )}
            >
              <Icon className="size-6 shrink-0" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
