import {
  BookOpenText,
  ExternalLink,
  FileCode2,
} from "lucide-react";

import { HeaderPopoverCard } from "@/components/features/header/header-popover-card";

const links = [
  {
    label: "Open Website",
    icon: ExternalLink,
  },
  {
    label: "Documentation",
    icon: BookOpenText,
  },
  {
    label: "API Reference",
    icon: FileCode2,
  },
];

export function QuickLinksMenu() {
  return (
    <HeaderPopoverCard className="w-[min(92vw,15rem)]">
      <div className="px-3 py-2">
        <p className="text-sm font-semibold text-slate-900">Quick Links</p>
      </div>
      <div className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <button
              key={link.label}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Icon className="size-4" />
              </div>
              <span>{link.label}</span>
            </button>
          );
        })}
      </div>
    </HeaderPopoverCard>
  );
}
