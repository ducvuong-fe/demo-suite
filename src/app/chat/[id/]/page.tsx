import { Suspense } from "react";
import { SidebarChat } from "@/components/chat/SidebarChat";
import { CanvasArea } from "@/components/chat/CanvasArea";
import { Sidebar } from "@/components/custom/Sidebar";

export default function ChatDetailPage() {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex overflow-hidden">
        <Suspense fallback={<div className="w-[420px] bg-[#0a0a0a]" />}>
          <SidebarChat />
        </Suspense>
        <CanvasArea />
      </div>
    </div>
  );
}
