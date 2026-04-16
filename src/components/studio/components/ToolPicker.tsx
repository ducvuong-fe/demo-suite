"use client";

import { MousePointer2, Hand, BoxSelect } from "lucide-react";

export function ToolPicker() {
  return (
    <div className="flex items-center gap-1 bg-suite-glass-medium border border-border rounded-2xl p-1.5 shadow-suite-elevation-lift backdrop-blur-md">
      <ToolButton icon={<MousePointer2 size={20} />} active />
      <ToolButton icon={<Hand size={20} />} />
      <ToolButton icon={<BoxSelect size={20} />} />
    </div>
  );
}

function ToolButton({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`p-3 rounded-[12px] transition-all ${
        active
          ? "bg-white/10 text-white shadow-inner"
          : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
      }`}
    >
      {icon}
    </button>
  );
}
