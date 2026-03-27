import { HeaderPopoverCard } from "@/components/features/header/header-popover-card";

const messages = [
  {
    name: "John Doe",
    snippet: "Regarding your booking...",
    time: "5m",
    accent: "from-sky-400 to-blue-600",
  },
  {
    name: "Emily Smith",
    snippet: "I have a question about...",
    time: "18m",
    accent: "from-violet-400 to-fuchsia-600",
  },
  {
    name: "Michael Brown",
    snippet: "Let's connect to discuss...",
    time: "1h",
    accent: "from-emerald-400 to-teal-600",
  },
];

export function MessagesPanel() {
  return (
    <HeaderPopoverCard>
      <div className="px-3 py-2">
        <p className="text-sm font-semibold text-slate-900">Messages</p>
      </div>

      <div className="mt-1 space-y-1">
        {messages.map((message) => (
          <button
            key={message.name}
            type="button"
            className="flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${message.accent} text-sm font-semibold text-white`}
            >
              {message.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-slate-800">{message.name}</p>
                <span className="text-xs text-slate-400">{message.time}</span>
              </div>
              <p className="truncate text-xs text-slate-500">{message.snippet}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-2 border-t border-slate-200 px-3 pt-3">
        <button
          type="button"
          className="w-full rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          View all
        </button>
      </div>
    </HeaderPopoverCard>
  );
}
