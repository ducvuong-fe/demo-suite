"use client";

import { 
  PromptInput, 
  PromptInputBody, 
  PromptInputTextarea, 
  PromptInputFooter, 
  PromptInputSubmit, 
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { PlusIcon, MicIcon, X } from "lucide-react";
import { useState } from "react";

export function ChatInput() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="p-5 bg-background">
      <div className="relative">
        <PromptInput 
          onSubmit={(message) => console.log("Chat submitted:", message)}
          className="bg-suite-glass-medium border border-border rounded-3xl overflow-hidden focus-within:border-white/20 transition-all shadow-suite-elevation-lift backdrop-blur-md"
        >
          
          {/* Selected Image Thumbnail */}
          {hasImage && (
            <div className="px-5 pt-5 pb-2">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border group shadow-lg">
                <div className="absolute inset-0 bg-[#354f3b] flex items-center justify-center">
                  <div className="size-8 rounded-full bg-[#52bf6a] opacity-80 blur-xl absolute" />
                  <span className="text-[10px] font-bold text-[#52bf6a] z-10">Logo</span>
                </div>
                {/* Badge "1" */}
                <div className="absolute top-1 left-1 bg-blue-500 size-4 rounded-full flex items-center justify-center border-2 border-background z-20">
                  <span className="text-[9px] font-bold text-white leading-none">1</span>
                </div>
                {/* Remove button */}
                <button 
                  type="button"
                  onClick={() => setHasImage(false)}
                  className="absolute top-1 right-1 bg-black/60 size-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                >
                  <X size={10} className="text-white" />
                </button>
              </div>
            </div>
          )}

          <PromptInputBody>
            <PromptInputTextarea 
              placeholder="Ask anything or type @ to see features"
              className="text-[14px] bg-transparent border-none focus-visible:ring-0 text-foreground px-5 py-5 min-h-[64px] max-h-[200px] shadow-none placeholder:text-gray-500 leading-relaxed font-normal"
            />
          </PromptInputBody>
          
          <PromptInputFooter className="px-5 pb-5 pt-0 flex justify-between items-center transition-all">
            <PromptInputTools>
              <button 
                type="button" 
                className="text-gray-500 hover:text-foreground transition-all bg-white/5 size-10 rounded-full flex items-center justify-center hover:bg-white/10"
              >
                <PlusIcon size={20} strokeWidth={1.5} />
              </button>
            </PromptInputTools>
            <div className="flex items-center gap-4">
               <MicIcon 
                 size={20} 
                 strokeWidth={1.5}
                 className="text-gray-500 cursor-pointer hover:text-foreground transition-colors" 
               />
               <PromptInputSubmit 
                 className="bg-primary text-primary-foreground rounded-full h-10 w-10 hover:opacity-90 transition-all flex items-center justify-center shadow-lg active:scale-95" 
               />
            </div>
          </PromptInputFooter>
        </PromptInput>
      </div>
      
      <p className="text-[11px] text-gray-600 text-center mt-4 font-medium italic opacity-60">
        Please ensure your creations respect copyright.
      </p>
    </div>
  );
}



