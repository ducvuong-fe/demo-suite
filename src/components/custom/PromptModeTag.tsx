"use client";

import { X, TypeIcon } from "lucide-react";

export function PromptModeTag({
  label = "Create Logo",
  onRemove,
}: {
  label?: string;
  onRemove?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 bg-[#1e293b] border border-[#334155] rounded-full px-3 py-1 text-blue-400 group transition-all hover:border-[#475569]">
      <TypeIcon size={14} className="text-blue-500" />
      <span className="text-xs font-medium">{label}</span>
      <button
        onClick={onRemove}
        className="text-gray-500 hover:text-white transition-colors ml-1"
      >
        <X size={14} />
      </button>
    </div>
  );
}
