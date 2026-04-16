"use client";

import { useState } from "react";
import { BaseSidebar } from "@/components/custom/BaseSidebar";
import { TopNav } from "@/components/custom/TopNav";
import { PromptWrapper } from "@/components/custom/PromptWrapper";
import { QuickActions } from "@/components/custom/QuickActions";
import { WorkGallery } from "@/components/custom/WorkGallery";

export default function Home() {
  const [activeMode, setActiveMode] = useState<string | null>(null);

  const handleActionClick = (id: string) => {
    setActiveMode(id);
  };

  const handleClearMode = () => {
    setActiveMode(null);
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <BaseSidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />

        <main className="flex-1 flex flex-col items-center pt-20 pb-20 overflow-y-auto">
          <div className="w-full max-w-4xl px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-12 tracking-tight">
              Ready to build something meaningful?
            </h1>
            
            <PromptWrapper 
              activeMode={activeMode} 
              onClearMode={handleClearMode} 
            />
            
            <QuickActions onActionClick={handleActionClick} />
          </div>

          <WorkGallery />
        </main>
      </div>
    </div>
  );
}


