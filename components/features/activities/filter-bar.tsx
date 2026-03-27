import { ChevronDown, Plus } from "lucide-react";

type FilterBarProps = {
  filters?: string[];
  buttonLabel?: string;
};

const defaultFilters = ["All Users", "All Activities", "All Statuses"];

export function FilterBar({
  filters = defaultFilters,
  buttonLabel = "Filter",
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-200/60 xl:flex-row xl:items-center xl:justify-between">
      <div
        className="grid gap-3 xl:flex"
        style={{
          gridTemplateColumns: `repeat(${Math.min(filters.length, 3)}, minmax(0, 1fr))`,
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex min-w-[190px] items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-lg font-medium text-slate-700 shadow-sm transition hover:border-slate-300"
          >
            <span>{filter}</span>
            <ChevronDown className="size-4 text-slate-400" />
          </button>
        ))}
      </div>

      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,_#2f66bb_0%,_#2555a8_100%)] px-6 py-3 text-lg font-semibold text-white shadow-md shadow-blue-200/70 transition hover:brightness-105">
        <Plus className="size-5" />
        {buttonLabel}
      </button>
    </div>
  );
}
