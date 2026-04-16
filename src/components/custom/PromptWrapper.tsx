"use client";

import {
  PromptInput,
  PromptInputBody,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputActionMenuContent,
  PromptInputActionAddAttachments,
  PromptInputSubmit,
  PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { PlusIcon, MicIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PromptHeaderFields } from "./PromptHeaderFields";
import { PromptModeTag } from "./PromptModeTag";

interface PromptWrapperProps {
  activeMode: string | null;
  onClearMode: () => void;
}

export function PromptWrapper({ activeMode, onClearMode }: PromptWrapperProps) {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (message: PromptInputMessage) => {
    console.log("Submitted message:", message);
    router.push(`/chat/new-chat?p=${encodeURIComponent(message.text)}`);
    setText("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <PromptInput
        onSubmit={handleSubmit}
        className="bg-[#141414] border border-[#262626] rounded-[24px] focus-within:border-[#404040] transition-colors shadow-2xl overflow-hidden"
      >
        {activeMode === "logo" && <PromptHeaderFields />}

        <PromptInputBody className="p-0">
          <PromptInputTextarea
            placeholder={
              activeMode === "logo"
                ? "Describe your brand name, visual style, color palette, and overall brand personality"
                : "Start with a simple goal. We'll shape it into a finished result."
            }
            className={`text-gray-200 placeholder:text-[#444] border-none bg-transparent p-6 ${activeMode === "logo" ? "min-h-[100px]" : "min-h-[60px]"} max-h-[300px] focus-visible:ring-0 text-lg resize-none shadow-none leading-relaxed`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </PromptInputBody>

        <PromptInputFooter className="flex justify-between items-center px-4 pb-4 pt-0">
          <div className="flex items-center gap-3">
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger className="text-gray-500 hover:text-white rounded-full p-2 bg-transparent hover:bg-[#262626] transition-colors flex items-center justify-center border border-transparent">
                  <PlusIcon size={20} />
                </PromptInputActionMenuTrigger>
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments label="Upload Files" />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
            </PromptInputTools>

            {activeMode === "logo" && <PromptModeTag onRemove={onClearMode} />}
          </div>

          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-white p-2 rounded-full hover:bg-[#262626] transition-colors"
            >
              <MicIcon size={20} />
            </button>
            <PromptInputSubmit className="h-10 w-10 rounded-full bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg" />
          </div>
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
}
