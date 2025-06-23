import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-base file:font-medium disabled:cursor-not-allowed disabled:hover:cursor-not-allowed disabled:opacity-50 placeholder:text-base",
  {
    variants: {
      size: {
        sm: "h-8 px-3 py-1 text-sm placeholder:text-sm file:text-sm file:h-6",
        default: "h-10 px-4 py-2 text-base placeholder:text-base file:text-base file:h-7",
        lg: "h-12 px-6 py-3 text-lg placeholder:text-lg file:text-lg file:h-8",
        touch: "h-11 px-6 py-3 text-base placeholder:text-base file:text-base file:h-7",
      },
      state: {
        default: "",
        error: "border-destructive aria-invalid:border-destructive",
        success: "border-green-700 dark:border-green-400",
        warning: "border-yellow-600 dark:border-yellow-400",
      },
    },
    defaultVariants: {
      size: "default",
      state: "default",
    },
  }
)

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

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  error?: string | boolean
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, state, error, helperText, ...props }, ref) => {
    // Determine the actual state based on error prop
    const actualState = error ? "error" : state || "default"
    
    // Determine helper text to display
    const displayHelperText = error && typeof error === "string" ? error : helperText

    return (
      <div className="w-full">
        <input
          type={type}
          data-slot="input"
          ref={ref}
          aria-invalid={actualState === "error"}
          className={cn(
            inputVariants({ size, state: actualState }),
            "focus-visible:border-ring font-medium focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            actualState === "error" && "focus-visible:border-destructive focus-visible:ring-destructive/20",
            actualState === "success" && "focus-visible:border-green-500 focus-visible:ring-green-500/20",
            actualState === "warning" && "focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20",
            className
          )}
          {...props}
        />
        {displayHelperText && (
          <p className={cn(helperTextVariants({ state: actualState }))}>
            {displayHelperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
