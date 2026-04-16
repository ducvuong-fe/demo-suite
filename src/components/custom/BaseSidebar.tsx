"use client";

import { Home, Sparkles, MessageCircle, Folder, FileText, Bell, Crown, User } from "lucide-react";

export function BaseSidebar() {
  return (
    <aside className="w-[72px] h-screen border-r border-border flex flex-col items-center py-6 gap-8 bg-background sticky top-0 shrink-0 z-30">
      {/* Top Logo / Icon */}
      <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center mb-4 shadow-lg active:scale-95 transition-transform cursor-pointer">
        <Sparkles size={20} className="text-background" />
      </div>

      <div className="flex flex-col gap-8 flex-1 w-full items-center">
        <NavButton icon={<Home size={22} strokeWidth={1.5} />} />
        <NavButton icon={<Sparkles size={22} strokeWidth={1.5} />} active />
        <NavButton icon={<MessageCircle size={22} strokeWidth={1.5} />} />
        <NavButton icon={<Folder size={22} strokeWidth={1.5} />} />
        <NavButton icon={<FileText size={22} strokeWidth={1.5} />} />
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-8 w-full items-center mt-auto">
        <NavButton icon={<Bell size={22} strokeWidth={1.5} />} />
        <NavButton icon={<Crown size={22} strokeWidth={1.5} />} />
        <div className="size-10 rounded-full bg-suite-glass-medium border border-border flex items-center justify-center overflow-hidden cursor-pointer hover:border-white/20 transition-all">
          <User size={20} className="text-gray-400" />
        </div>
      </div>
    </aside>
  );
}

function NavButton({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <button className={`p-2 transition-all relative group ${
      active ? "text-foreground" : "text-gray-500 hover:text-gray-200"
    }`}>
      {icon}
      {active && (
        <div className="absolute -left-[20px] top-1/2 -translate-y-1/2 w-[4px] h-[20px] bg-foreground rounded-r-full" />
      )}
    </button>
  );
}

