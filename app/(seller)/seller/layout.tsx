import { DashboardShell } from "@/components/layouts/dashboard-shell";

export default function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardShell role="seller">{children}</DashboardShell>;
}
