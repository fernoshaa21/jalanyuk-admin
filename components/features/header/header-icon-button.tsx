"use client";

import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type HeaderIconButtonProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  badge?: string | number;
  onClick: () => void;
};

export function HeaderIconButton({
  icon: Icon,
  label,
  active = false,
  badge,
  onClick,
}: HeaderIconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "relative flex size-10 items-center justify-center rounded-xl border text-white/90 transition",
        active
          ? "border-white/25 bg-white/14 ring-1 ring-white/10"
          : "border-white/15 bg-white/5 hover:bg-white/10",
      )}
    >
      <Icon className="size-4" />
      {badge ? (
        <span className="absolute -right-1.5 -top-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-sky-400 px-1.5 py-0.5 text-[10px] font-semibold text-slate-950">
          {badge}
        </span>
      ) : null}
    </button>
  );
}
