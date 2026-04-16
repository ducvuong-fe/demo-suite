"use client";

import { ChevronLeft, Edit2, Share2, TypeIcon } from "lucide-react";
import Link from "next/link";

export function SidebarHeader() {
  return (
    <div className="p-5 flex items-center justify-between border-b border-border bg-background">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="text-gray-500 hover:text-foreground transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-foreground font-suite-body">
              Untitled Project
            </span>
            <button className="text-gray-600 hover:text-gray-400 transition-colors">
              <Edit2 size={12} />
            </button>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <div className="bg-suite-glass-light text-suite-accent text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 border border-border">
              <TypeIcon size={10} /> Logo
            </div>
          </div>
        </div>
      </div>
      <button className="text-gray-500 hover:text-foreground transition-colors">
        <Share2 size={18} />
      </button>
    </div>
  );
}
