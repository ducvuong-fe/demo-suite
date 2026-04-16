"use client";

import { ToolPicker } from "./components/ToolPicker";
import { ZoomControl } from "./components/ZoomControl";
import { ImageGenStack } from "./components/ImageGenStack";

export function CanvasPanel() {
  return (
    <div className="flex-1 h-full bg-background relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Topbar equivalent / Mode indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
         <div className="bg-suite-glass-medium border border-border px-4 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
               <div className="size-1.5 bg-green-500 rounded-full animate-pulse" />
               Studio Mode
            </span>
         </div>
      </div>

      <ImageGenStack />

      {/* Floating Toolbars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
         <ToolPicker />
      </div>

      <div className="absolute bottom-10 right-10 z-20">
         <ZoomControl />
      </div>
    </div>
  );
}


