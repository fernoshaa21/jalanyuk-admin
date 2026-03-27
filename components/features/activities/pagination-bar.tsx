import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

type PaginationBarProps = {
  rangeText?: string;
};

export function PaginationBar({
  rangeText = "1–10 of 245",
}: PaginationBarProps) {
  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-end">
      <div className="flex items-center gap-2 text-slate-300">
        <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
          <ChevronLeft className="size-4" />
        </button>
        <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
          <ChevronsLeft className="size-4" />
        </button>
      </div>

      <p className="text-xl font-medium text-slate-700">{rangeText}</p>

      <div className="flex items-center gap-2">
        <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500">
          <ChevronRight className="size-4" />
        </button>
        <button className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500">
          <ChevronsRight className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xl font-medium text-[#2f66bb] transition hover:bg-slate-100">
          <ChevronLeft className="size-5" />
          Next
        </button>
      </div>
    </div>
  );
}
