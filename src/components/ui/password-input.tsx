"use client";

import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface PasswordInputProps extends React.ComponentProps<typeof Input> {
  /**
   * Whether the password should be visible by default
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * Controlled visibility state
   */
  visible?: boolean;
  /**
   * Callback when visibility is toggled
   */
  onVisibilityChange?: (visible: boolean) => void;
}

const PasswordInput = ({ 
  className,
  defaultVisible = false,
  visible: controlledVisible,
  onVisibilityChange,
  ...props 
}: PasswordInputProps) => {
  const id = useId();
  const [internalVisible, setInternalVisible] = useState<boolean>(defaultVisible);

  // Use controlled state if provided, otherwise use internal state
  const isVisible = controlledVisible !== undefined ? controlledVisible : internalVisible;

  const toggleVisibility = () => {
    const newVisible = !isVisible;
    
    if (controlledVisible === undefined) {
      setInternalVisible(newVisible);
    }
    
    onVisibilityChange?.(newVisible);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        className={cn("pe-9", className)}
        type={isVisible ? "text" : "password"}
        {...props}
      />
      <button
        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        aria-controls={id}
      >
        {isVisible ? (
          <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Eye size={16} strokeWidth={2} aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

PasswordInput.displayName = "PasswordInput";

export { PasswordInput }; 