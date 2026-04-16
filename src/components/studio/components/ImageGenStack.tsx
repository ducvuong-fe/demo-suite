"use client";

import Image from "next/image";

export function ImageGenStack() {
  return (
    <div className="flex items-center gap-8 z-10 scale-90">
      <div className="w-[300px] aspect-square bg-suite-glass-light border border-border rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative group">
        <Image
          src="/assets/logo-stack-preview.png"
          alt="Previous Gen"
          fill
          className="object-contain p-8 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
        />
      </div>

      {/* Selected Image */}
      <div className="w-[340px] aspect-square bg-white/[0.02] border-2 border-blue-600 rounded-[28px] flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.15)] relative overflow-hidden group">
        <Image
          src="/assets/logo-primary.png"
          alt="Current Project"
          fill
          className="object-contain p-10 drop-shadow-2xl"
        />
        <div className="absolute -top-3 -right-3 bg-blue-600 size-8 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
          <span className="text-white font-bold text-sm">1</span>
        </div>
      </div>

      <div className="w-[300px] aspect-square bg-suite-glass-light border border-border rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative group">
        <Image
          src="/assets/logo-stack-preview.png"
          alt="Next Gen"
          fill
          className="object-contain p-8 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all scale-x-[-1]"
        />
      </div>
    </div>
  );
}
