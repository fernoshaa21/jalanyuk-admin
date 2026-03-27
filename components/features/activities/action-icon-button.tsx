import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ActionIconButtonProps = {
  icon: LucideIcon;
  variant: "edit" | "delete";
};

const variantStyles = {
  edit: "bg-blue-600 text-white hover:bg-blue-500",
  delete: "bg-red-500 text-white hover:bg-red-400",
};

export function ActionIconButton({
  icon: Icon,
  variant,
}: ActionIconButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-xl shadow-sm transition",
        variantStyles[variant],
      )}
      type="button"
    >
      <Icon className="size-4" />
    </button>
  );
}
