"use client";

import {
  Bell,
  ChevronDown,
  MessageSquareText,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { HeaderIconButton } from "@/components/features/header/header-icon-button";
import { MessagesPanel } from "@/components/features/header/messages-panel";
import { NotificationsPanel } from "@/components/features/header/notifications-panel";
import { QuickLinksMenu } from "@/components/features/header/quick-links-menu";
import { UserDropdownMenu } from "@/components/features/header/user-dropdown-menu";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/activities": "Activities",
  "/admin/bookings": "Bookings",
  "/admin/users": "Users",
};

type ActivePanel = "links" | "notifications" | "messages" | "user" | null;

export function AdminTopbar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "Admin Panel";
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setActivePanel(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const togglePanel = (panel: Exclude<ActivePanel, null>) => {
    setActivePanel((current) => (current === panel ? null : panel));
  };

  return (
    <header className="mb-6 rounded-[1.65rem] bg-[linear-gradient(180deg,_#1d3964_0%,_#17345f_100%)] px-6 py-5 text-white shadow-xl shadow-slate-300/50">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-px bg-white/15 lg:hidden" />
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        </div>

        <div
          ref={containerRef}
          className="relative flex items-center gap-3 self-end md:self-auto"
        >
          <div className="relative">
            <HeaderIconButton
              icon={SquareArrowOutUpRight}
              label="Quick links"
              active={activePanel === "links"}
              onClick={() => togglePanel("links")}
            />
            {activePanel === "links" ? <QuickLinksMenu /> : null}
          </div>

          <div className="relative">
            <HeaderIconButton
              icon={Bell}
              label="Notifications"
              active={activePanel === "notifications"}
              badge={3}
              onClick={() => togglePanel("notifications")}
            />
            {activePanel === "notifications" ? <NotificationsPanel /> : null}
          </div>

          {/* <div className="relative">
            <HeaderIconButton
              icon={MessageSquareText}
              label="Messages"
              badge={2}
              active={activePanel === "messages"}
              onClick={() => togglePanel("messages")}
            />
            {activePanel === "messages" ? <MessagesPanel /> : null}
          </div> */}

          <div className="relative">
            <button
              type="button"
              onClick={() => togglePanel("user")}
              className={`flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-3 text-left transition ${
                activePanel === "user"
                  ? "border-white/25 bg-white/14 ring-1 ring-white/10"
                  : "border-white/15 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="size-9 rounded-full bg-[linear-gradient(135deg,_#f3c79e_0%,_#b87047_100%)]" />
              <ChevronDown className="size-4 text-white/80" />
            </button>
            {activePanel === "user" ? <UserDropdownMenu /> : null}
          </div>
        </div>
      </div>
    </header>
  );
}
