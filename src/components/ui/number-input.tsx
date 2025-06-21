"use client"

import { MinusIcon, PlusIcon } from "lucide-react"
import { Button, Group, Input, NumberField } from "react-aria-components"
import { useState } from "react"

interface NumberInputProps {
  defaultValue?: number
  minValue?: number
  maxValue?: number
  step?: number
  autoCorrect?: boolean
  disabled?: boolean
}

export default function NumberInput({ 
  defaultValue = 12,
  minValue = 0,
  maxValue,
  step = 1,
  autoCorrect = false,
  disabled = false
}: NumberInputProps = {}) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }

  const handleBlur = () => {
    if (autoCorrect && step > 1) {
      // Round to nearest step, with minimum value constraint
      const rounded = Math.max(minValue, Math.round(value / step) * step)
      if (rounded !== value) {
        setValue(rounded)
      }
    }
  }

  return (
    <NumberField value={value} onChange={handleChange} minValue={minValue} maxValue={maxValue} step={step} isDisabled={disabled}>
      <Group className="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-10 items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:hover:cursor-not-allowed data-focus-within:ring-[3px]">
                  <Button
            slot="decrement"
            className="border-input w-8 bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border border-r-0 text-sm transition-[color,box-shadow] cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:hover:cursor-not-allowed data-disabled:opacity-50"
          >
            <MinusIcon size={16} strokeWidth={3} className="text-mako-neutral-900" aria-hidden="true" />
          </Button>
          <Input
            onBlur={handleBlur}
            className="bg-background px-0 py-2 text-center tabular-nums text-base font-bold disabled:pointer-events-none disabled:cursor-not-allowed disabled:hover:cursor-not-allowed disabled:opacity-50 outline-none focus:ring-0" 
            style={{
              color: '#1A1A1A', 
              width: `${Math.max(2, String(value || 0).length + 2)}ch`,
              minWidth: '2ch',
              maxWidth: '12ch'
            }}
          />
          <Button
            slot="increment"
            className="border-input w-8 bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border border-l-0 text-sm transition-[color,box-shadow] cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:hover:cursor-not-allowed data-disabled:opacity-50"
          >
            <PlusIcon size={16} strokeWidth={3} className="text-mako-neutral-900" aria-hidden="true" />
          </Button>
      </Group>
    </NumberField>
  )
}
