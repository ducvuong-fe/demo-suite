"use client";

import { Plus, Minus, Maximize2 } from "lucide-react";

export function ZoomControl() {
  return (
    <div className="flex items-center bg-suite-glass-medium border border-border rounded-2xl p-1.5 shadow-suite-elevation-lift backdrop-blur-md">
      <button className="p-2 text-gray-500 hover:text-foreground hover:bg-white/5 rounded-[12px] transition-colors">
        <Minus size={18} />
      </button>
      <div className="px-3 text-[13px] font-bold text-gray-400 min-w-[60px] text-center">
        100%
      </div>
      <button className="p-2 text-gray-500 hover:text-foreground hover:bg-white/5 rounded-[12px] transition-colors">
        <Plus size={18} />
      </button>
      <div className="w-px h-5 bg-border mx-1.5" />
      <button className="p-2 text-gray-400 hover:text-foreground hover:bg-white/5 rounded-[12px] transition-colors">
        <Maximize2 size={18} />
      </button>
    </div>
  );
}
