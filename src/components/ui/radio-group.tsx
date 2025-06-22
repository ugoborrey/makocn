"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

const radioGroupItemVariants = cva(
  "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
  {
    variants: {
      size: {
        default: "size-4", // 16x16px
        lg: "size-5", // 20x20px
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

function RadioGroupItem({
  className,
  size,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className={cn(
          "fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          size === "lg" ? "size-2.5" : "size-2"
        )} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
