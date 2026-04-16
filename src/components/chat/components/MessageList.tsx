"use client";

import { useState } from "react";
import { ChevronDown, Search, Sparkles } from "lucide-react";
import {
  Conversation,
  ConversationContent,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";

export function MessageList() {
  return (
    <Conversation className="flex-1 overflow-y-auto px-6 py-8">
      <ConversationContent className="space-y-12">
        {/* User Message */}
        <Message from="user" className="group is-user">
          <MessageContent className="bg-suite-glass-light text-[14px] text-foreground rounded-2xl px-5 py-4 ml-auto max-w-[85%] border border-border shadow-sm leading-relaxed">
            <MessageResponse>I want to design a logo</MessageResponse>
          </MessageContent>
        </Message>

        {/* AI Response */}
        <Message from="assistant">
          <MessageContent className="text-gray-300 max-w-[95%] flex flex-col gap-6">
            <MessageResponse className="text-[14px] leading-relaxed font-suite-body">
              Thank you for choosing Direction. I&apos;ll now create 3 options
              based on this direction.
            </MessageResponse>

            {/* Collapsible Tool Outputs */}
            <div className="flex flex-col gap-4 pl-1">
              <ToolStep
                icon={<Search size={14} />}
                label="Search For Reference"
              />
              <ToolStep
                icon={<Sparkles size={14} />}
                label="Design Guidelines"
              />
            </div>

            {/* Image Generation Output */}
            <div className="space-y-4 mt-2">
              <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] opacity-80">
                Generated Explorations
              </div>
              <div className="grid grid-cols-3 gap-3">
                <ImageThumb label="homie" />
                <ImageThumb label="JIM'S coffee" />
                <ImageThumb label="Velotti" />
              </div>
            </div>
          </MessageContent>
        </Message>
      </ConversationContent>
    </Conversation>
  );
}

function ToolStep({ icon, label }: { icon: React.ReactNode; label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-gray-500 hover:text-foreground transition-all text-[13px] font-medium group/step"
      >
        <div className="size-6 rounded-full bg-suite-glass-light flex items-center justify-center group-hover/step:bg-suite-glass-medium transition-colors">
          {icon}
        </div>
        <span>{label}</span>
        <ChevronDown
          size={14}
          className={`text-gray-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 ml-[30px] text-[12px] text-gray-600 border-l border-border pl-4 py-2 leading-relaxed italic">
          Fetching inspiration from minimalist archives and modern fashion brand
          boards...
        </div>
      )}
    </div>
  );
}

function ImageThumb({ label }: { label: string }) {
  return (
    <div className="aspect-square bg-suite-glass-light border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-white/20 transition-all relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="size-16 rounded-full bg-white/5 blur-2xl absolute opacity-20" />
      <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest px-4 text-center leading-tight z-10 group-hover:text-gray-400 transition-colors">
        {label}
      </span>
    </div>
  );
}
