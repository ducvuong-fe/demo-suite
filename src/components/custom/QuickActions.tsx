import {
  Paintbrush,
  Lightbulb,
  Megaphone,
  ShoppingCart,
  Image as ImageIcon,
} from "lucide-react";

interface QuickActionsProps {
  onActionClick?: (actionId: string) => void;
}

export function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [
    {
      id: "logo",
      label: "Create Logo",
      icon: <Paintbrush size={14} className="text-blue-400" />,
    },
    {
      id: "branding",
      label: "Branding",
      icon: <Lightbulb size={14} className="text-purple-400" />,
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: <Megaphone size={14} className="text-yellow-400" />,
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      icon: <ShoppingCart size={14} className="text-green-400" />,
    },
    {
      id: "art",
      label: "Art",
      icon: <ImageIcon size={14} className="text-pink-400" />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => onActionClick?.(action.id)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#222] bg-transparent text-sm text-gray-300 hover:bg-[#111] hover:text-white transition-colors"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
}
