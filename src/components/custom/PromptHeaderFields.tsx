"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const industryOptions = ["Design", "Fashion", "Tech", "Food", "Health"];
const styleOptions = ["minimalist", "retro", "abstract", "nature", "geometric"];
const typeOptions = ["Only Text", "Icon + Text", "Icon Only"];

interface FieldProps {
  label: string;
  value: string;
  placeholder: string;
  options?: string[];
  onValueChange?: (v: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = ({
  label,
  value,
  placeholder,
  options,
  onValueChange,
  onChange,
}: FieldProps) => (
  <div className="flex items-center gap-1.5 whitespace-nowrap">
    <span className="text-gray-500 font-medium">{label}</span>
    {options ? (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors outline-none border-b border-transparent hover:border-gray-600 pb-0.5">
          {value || placeholder}
          <ChevronDown size={14} className="text-gray-600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-[#1a1a1a] border-[#333] text-gray-200"
        >
          {options.map((opt) => (
            <DropdownMenuItem
              key={opt}
              onClick={() => onValueChange?.(opt)}
              className="hover:bg-[#333] focus:bg-[#333] cursor-pointer"
            >
              {opt}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent border-b border-gray-700/50 hover:border-gray-600 focus:border-white transition-colors outline-none text-gray-200 placeholder:text-gray-700 w-24 pb-0.5"
      />
    )}
  </div>
);

export function PromptHeaderFields() {
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [style, setStyle] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-sm border-b border-[#222]">
      <Field
        label="Brand name:"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        placeholder="..........."
      />
      <Field
        label="Industry:"
        value={industry}
        onValueChange={setIndustry}
        options={industryOptions}
        placeholder="..........."
      />
      <Field
        label="Style:"
        value={style}
        onValueChange={setStyle}
        options={styleOptions}
        placeholder="..........."
      />
      <Field
        label="Type:"
        value={type}
        onValueChange={setType}
        options={typeOptions}
        placeholder="..........."
      />
    </div>
  );
}
