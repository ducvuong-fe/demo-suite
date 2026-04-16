"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["Logo", "Branding", "Marketing", "E-Commerce", "Art"];

const works = [
  { id: 1, title: "homie", category: "Logo", image: "/images/homie.png" },
  { id: 2, title: "Jim's Coffee", category: "Logo", image: "/images/jims.png" },
  { id: 3, title: "yoko", category: "Branding", image: "/images/yoko.png" },
  {
    id: 4,
    title: "STUDIOC",
    category: "Branding",
    image: "/images/studioc.png",
  },
  {
    id: 5,
    title: "Velotti",
    category: "Marketing",
    image: "/images/velotti.png",
  },
];

export function WorkGallery() {
  const [activeTab, setActiveTab] = useState("Logo");

  const filteredWorks = works.filter(
    (work) => work.category === activeTab || activeTab === "All",
  );

  return (
    <div className="mt-20 w-full max-w-6xl mx-auto px-6">
      <div className="flex gap-8 border-b border-[#222] mb-8 pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === cat
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {cat}
            {activeTab === cat && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-[#111] border border-[#222]"
          >
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-sm font-medium">
                {work.title}
              </span>
            </div>
          </div>
        ))}
        {/* Fillers to match the visual vibe of the screenshot if needed */}
      </div>
    </div>
  );
}
