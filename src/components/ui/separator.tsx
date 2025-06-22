import React from "react";
import { cn } from "@/lib/utils";

export type SeparatorAlignment = "left" | "center" | "right";
export type SeparatorThickness = "thin" | "thick";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  alignment?: SeparatorAlignment;
  width?: "md" | "lg" | "full";
  thickness?: SeparatorThickness;
  className?: string;
}

const separatorWidths = {
  md: "w-16",  // 64px
  lg: "w-24",  // 96px
  full: "w-full",
} as const;

const separatorThicknesses = {
  thin: "h-1",   // 4px
  thick: "h-2",  // 8px
} as const;

const separatorAlignments = {
  left: "mx-0",
  center: "mx-auto",
  right: "ml-auto mr-0",
} as const;

export function Separator({ 
  alignment = "left", 
  width = "md",
  thickness = "thick",
  className,
  ...props 
}: SeparatorProps) {
  return (
    <div 
      className={cn(
        separatorThicknesses[thickness],
        "bg-yellow-400",
        separatorWidths[width],
        separatorAlignments[alignment],
        className
      )}
      style={{ height: thickness === "thin" ? "4px" : "8px" }} // Fallback inline style
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
} 