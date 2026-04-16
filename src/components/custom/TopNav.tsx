import { Zap } from "lucide-react";

export function TopNav() {
  return (
    <header className="flex justify-between items-center w-full px-10 py-6 bg-background sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg text-foreground tracking-tight font-suite-body">
          Creative Studio
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-suite-glass-medium rounded-full p-0.5 border border-border shadow-suite-elevation-lift">
          <button className="flex items-center gap-2 bg-[#d8a127] text-black font-bold px-4 py-1.5 rounded-full hover:bg-[#e6b135] transition-all text-[11px] h-8 shadow-inner">
            <span className="text-[14px]">✦</span> Upgrade
          </button>
          <div className="flex items-center gap-1.5 px-4 text-[12px] font-bold text-foreground opacity-80">
            <Zap size={13} fill="currentColor" />
            30
          </div>
        </div>
      </div>
    </header>
  );
}
