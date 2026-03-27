import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { DashboardHeader } from "@/components/layouts/dashboard-header";
import type { UserRole } from "@/types/auth";

type DashboardShellProps = {
  children: React.ReactNode;
  role: UserRole;
};

export function DashboardShell({ children, role }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_40%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
      <DashboardSidebar role={role} />
      <div className="flex min-h-screen flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 px-4 py-6 md:px-6">{children}</main>
      </div>
    </div>
  );
}
