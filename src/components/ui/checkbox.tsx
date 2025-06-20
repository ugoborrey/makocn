"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer shrink-0 flex-none border border-input bg-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary block",
  {
    variants: {
      size: {
        default: "h-5 w-5 min-h-5 min-w-5 max-h-5 max-w-5", // 20x20px fixed
        lg: "h-6 w-6 min-h-6 min-w-6 max-h-6 max-w-6", // 24x24px fixed
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, indeterminate, onCheckedChange, checked, ...props }, ref) => {
  const handleCheckedChange = (newChecked: boolean) => {
    // If indeterminate and clicked, always set to checked first
    if (indeterminate) {
      onCheckedChange?.(true)
    } else {
      onCheckedChange?.(newChecked)
    }
  }

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        checkboxVariants({ size }),
        "rounded-[4px] box-border", // 4px border radius with consistent box-sizing
        className
      )}
      {...props}
      checked={indeterminate ? "indeterminate" : checked}
      onCheckedChange={handleCheckedChange}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        {indeterminate ? (
          <Minus className={cn(size === "lg" ? "h-5 w-5" : "h-4 w-4")} />
        ) : (
          <Check className={cn(size === "lg" ? "h-5 w-5" : "h-4 w-4")} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox } 