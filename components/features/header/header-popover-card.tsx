import { cn } from "@/lib/utils";

type HeaderPopoverCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeaderPopoverCard({
  children,
  className,
}: HeaderPopoverCardProps) {
  return (
    <div
      className={cn(
        "absolute right-0 top-full z-50 mt-3 w-[min(92vw,22rem)] rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_22px_45px_-18px_rgba(15,23,42,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
