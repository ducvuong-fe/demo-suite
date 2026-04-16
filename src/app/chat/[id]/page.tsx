import { Suspense } from "react";
import { UsecaseSidebar } from "@/components/chat/UsecaseSidebar";
import { CanvasPanel } from "@/components/studio/CanvasPanel";
import { BaseSidebar } from "@/components/custom/BaseSidebar";

export default function ChatDetailPage() {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <BaseSidebar />
      <div className="flex-1 flex overflow-hidden">
        <Suspense fallback={<div className="w-[420px] bg-background" />}>
          <UsecaseSidebar />
        </Suspense>
        <CanvasPanel />
      </div>
    </div>
  );
}
