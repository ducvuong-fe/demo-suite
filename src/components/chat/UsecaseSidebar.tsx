"use client";

import { SidebarHeader } from "./components/SidebarHeader";
import { MessageList } from "./components/MessageList";
import { ChatInput } from "./components/ChatInput";

export function UsecaseSidebar() {
  return (
    <div className="w-[420px] h-full bg-background border-r border-border flex flex-col shadow-2xl relative z-10">
      <SidebarHeader />
      <MessageList />
      <ChatInput />
    </div>
  );
}
