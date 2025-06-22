"use client";

import { inputVariants } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useId, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const helperTextVariants = cva(
  "text-sm font-medium mt-1.5 transition-colors",
  {
    variants: {
      state: {
        default: "text-muted-foreground",
        error: "text-destructive",
        success: "text-green-700 dark:text-green-400",
        warning: "text-yellow-700 dark:text-yellow-400",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

export interface PasswordInputProps 
  extends Omit<React.ComponentProps<"input">, "size" | "type"> {
  size?: "sm" | "default" | "lg" | "touch";
  state?: "default" | "error" | "success" | "warning";
  error?: string | boolean;
  helperText?: string;
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

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ 
  className,
  size = "default",
  state,
  error,
  helperText,
  defaultVisible = false,
  visible: controlledVisible,
  onVisibilityChange,
  ...props 
}, ref) => {
  const id = useId();
  const [internalVisible, setInternalVisible] = useState<boolean>(defaultVisible);

  // Use controlled state if provided, otherwise use internal state
  const isVisible = controlledVisible !== undefined ? controlledVisible : internalVisible;

  // Determine the actual state based on error prop
  const actualState = error ? "error" : state || "default"
  
  // Determine helper text to display
  const displayHelperText = error && typeof error === "string" ? error : helperText

  const toggleVisibility = () => {
    const newVisible = !isVisible;
    
    if (controlledVisible === undefined) {
      setInternalVisible(newVisible);
    }
    
    onVisibilityChange?.(newVisible);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          ref={ref}
          id={id}
          type={isVisible ? "text" : "password"}
          data-slot="input"
          aria-invalid={actualState === "error"}
          className={cn(
            inputVariants({ size, state: actualState }),
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] pe-9",
            actualState === "error" && "focus-visible:border-destructive focus-visible:ring-destructive/20",
            actualState === "success" && "focus-visible:border-green-500 focus-visible:ring-green-500/20",
            actualState === "warning" && "focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20",
            className
          )}
          {...props}
        />
        <button
          className={cn(
            "absolute top-0 end-0 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            size === "sm" && "h-8",
            size === "default" && "h-10", 
            size === "lg" && "h-12",
            size === "touch" && "h-11"
          )}
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
      {displayHelperText && (
        <p className={cn(helperTextVariants({ state: actualState }))}>
          {displayHelperText}
        </p>
      )}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput }; 