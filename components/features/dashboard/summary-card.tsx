import type { LucideIcon } from "lucide-react";

type SummaryCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
  className: string;
};

export function SummaryCard({
  title,
  value,
  icon: Icon,
  className,
}: SummaryCardProps) {
  return (
    <div
      className={`rounded-2xl px-6 py-6 text-white shadow-lg shadow-slate-200/60 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15">
          <Icon className="size-5" />
        </div>
        <p className="text-xl font-medium">{title}</p>
      </div>
      <p className="mt-6 text-5xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
