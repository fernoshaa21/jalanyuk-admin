import { AdminSidebar } from "@/components/layouts/admin-sidebar";
import { AdminTopbar } from "@/components/layouts/admin-topbar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3f5fb]">
      <AdminSidebar />
      <main className="min-h-screen px-4 py-6 sm:px-6 lg:ml-72 lg:px-8 lg:py-8">
        <AdminTopbar />
        {children}
      </main>
    </div>
  );
}
