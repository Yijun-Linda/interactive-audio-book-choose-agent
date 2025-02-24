
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AgentCardProps {
  title: string;
  image: string;
  capabilities: string[];
  stories: string[];
  isSelected?: boolean;
  onSelect?: () => void;
}

export const AgentCard = ({
  title,
  image,
  capabilities,
  stories,
  isSelected,
  onSelect,
}: AgentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-neutral-50/80 p-6 transition-all duration-300",
        "backdrop-blur-md border border-neutral-200",
        "hover:bg-neutral-100/90 hover:shadow-lg",
        isSelected && "ring-2 ring-neutral-400",
        "cursor-pointer"
      )}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6 flex justify-center">
        <img
          src={image}
          alt={title}
          className={cn(
            "h-24 w-24 rounded-full object-cover transition-transform duration-300",
            isHovered && "scale-110"
          )}
        />
      </div>

      <h3 className="mb-4 text-center text-xl font-medium text-neutral-900">{title}</h3>

      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-medium text-neutral-700">我可以做到</h4>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium text-neutral-700">我可以讲的故事</h4>
          <div className="flex flex-wrap gap-2">
            {stories.map((story) => (
              <span
                key={story}
                className="rounded-full bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm"
              >
                {story}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
