import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium transition-all cursor-pointer disabled:cursor-not-allowed disabled:hover:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "border border-mako-blue-700 text-mako-blue-700 bg-transparent shadow-xs hover:bg-mako-blue-50",
        tertiary:
          "bg-mako-yellow-400 text-mako-yellow-950 shadow-xs hover:bg-mako-yellow-500",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        lg: "h-12 rounded-lg px-6 has-[>svg]:px-4 text-lg",
        touch: "h-11 px-6 has-[>svg]:px-4",
        icon: "size-9 p-0 gap-0 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  icon?: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
  loadingText?: string
  rounded?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  leadingIcon,
  trailingIcon,
  icon,
  fullWidth = false,
  loading = false,
  loadingText,
  rounded = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Icon-only button: when icon prop is provided, ignore children and other icons
  const isIconOnly = icon !== undefined
  const effectiveSize = isIconOnly && size !== "icon" ? "icon" : size

  // Loading state logic
  const isDisabled = disabled || loading
  const displayText = loading && loadingText ? loadingText : children
  const effectiveLeadingIcon = loading ? <Loader2 className="animate-spin" /> : leadingIcon

  // Combine base button classes with fullWidth and rounded if needed
  const buttonClasses = cn(
    buttonVariants({ variant, size: effectiveSize }),
    fullWidth && "w-full",
    rounded && "rounded-full",
    className
  )

  // If using asChild, we pass the icons and children through Slot
  if (asChild) {
    return (
      <Slot
        data-slot="button"
        className={buttonClasses}
        {...props}
      >
        {isIconOnly ? (
          icon
        ) : (
          <>
            {effectiveLeadingIcon && (
              <span className="inline-flex items-center">
                {effectiveLeadingIcon}
              </span>
            )}
            {displayText}
            {trailingIcon && !loading && (
              <span className="inline-flex items-center">
                {trailingIcon}
              </span>
            )}
          </>
        )}
      </Slot>
    )
  }

  return (
    <Comp
      data-slot="button"
      className={buttonClasses}
      disabled={isDisabled}
      {...props}
    >
      {isIconOnly ? (
        icon
      ) : (
        <>
          {effectiveLeadingIcon && (
            <span className="inline-flex items-center">
              {effectiveLeadingIcon}
            </span>
          )}
          {displayText}
          {trailingIcon && !loading && (
            <span className="inline-flex items-center">
              {trailingIcon}
            </span>
          )}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
