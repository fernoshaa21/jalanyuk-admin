import { cn } from "@/lib/utils";

type DashboardSectionCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function DashboardSectionCard({
  title,
  children,
  className,
}: DashboardSectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50",
        className,
      )}
    >
      <div className="border-b border-slate-200/80 px-7 py-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">
          {title}
        </h2>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </section>
  );
}
