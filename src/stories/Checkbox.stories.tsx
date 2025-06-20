import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { Checkbox } from '../components/ui/checkbox'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox component from shadcn/ui customized with Mako design system colors from Rubix. A control that allows the user to toggle between checked and not checked.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'radio' },
      options: [true, false, 'indeterminate'],
      description: 'Whether the checkbox is checked, unchecked, or indeterminate',
    },
    defaultChecked: {
      control: { type: 'radio' },
      options: [true, false, 'indeterminate'],
      description: 'Whether the checkbox is checked by default (uncontrolled)',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'lg'],
      description: 'Size of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is required',
    },
    onCheckedChange: {
      action: 'checkedChange',
      description: 'Callback fired when the checked state changes',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  render: function IndeterminateCheckbox(args) {
    const [checked, setChecked] = React.useState<boolean>(false)
    const [isIndeterminate, setIsIndeterminate] = React.useState(true)
    
    const handleCheckedChange = (newChecked: boolean) => {
      setChecked(newChecked)
      setIsIndeterminate(false) // Once clicked, no longer indeterminate
    }
    
    const resetToIndeterminate = () => {
      setIsIndeterminate(true)
      setChecked(false)
    }
    
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Checkbox 
            {...args}
            id="indeterminate-demo" 
            checked={checked}
            indeterminate={isIndeterminate}
            onCheckedChange={handleCheckedChange}
          />
          <Label htmlFor="indeterminate-demo" className="cursor-pointer">
            {isIndeterminate ? 'Indeterminate checkbox' : (checked ? 'Checked' : 'Unchecked')}
          </Label>
        </div>
        <p className="text-sm text-muted-foreground">
          Click the checkbox to see how it transitions from indeterminate → checked → unchecked → checked...
        </p>
        <button 
          onClick={resetToIndeterminate}
          className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Reset to Indeterminate
        </button>
      </div>
    )
  },
  args: {},
}


export const LargeChecked: Story = {
  args: {
    size: 'lg',
    defaultChecked: true,
  },
}

export const WithLabelChecked: Story = {
  render: (args) => (
    <div className="flex items-center space-x-3">
      <Checkbox {...args} id="terms-checked" />
      <Label htmlFor="terms-checked" className="cursor-pointer">Accept terms and conditions</Label>
    </div>
  ),
  args: {
    defaultChecked: true,
  },
}

export const WithLabelDisabled: Story = {
  render: (args) => (
    <div className="flex items-center space-x-3">
      <Checkbox {...args} id="terms-disabled" />
      <Label htmlFor="terms-disabled" className="text-muted-foreground cursor-pointer">
        Accept terms and conditions
      </Label>
    </div>
  ),
  args: {
    disabled: true,
  },
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter" className="cursor-pointer">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="updates" />
        <Label htmlFor="updates" className="cursor-pointer">Get product updates (large checkbox)</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="terms" required defaultChecked />
        <Label htmlFor="terms" className="inline cursor-pointer">
          I agree to the <Button variant="link" className="h-auto p-0 m-0 gap-0">terms and conditions</Button>
        </Label>
      </div>
    </div>
  ),
}

export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-3">Default Size (20x20px)</h4>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="default-unchecked" />
            <Label htmlFor="default-unchecked" className="cursor-pointer">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="default-checked" defaultChecked />
            <Label htmlFor="default-checked" className="cursor-pointer">Checked</Label>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3">Large Size (24x24px)</h4>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="large-unchecked" size="lg" />
            <Label htmlFor="large-unchecked" className="cursor-pointer">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="large-checked" size="lg" defaultChecked />
            <Label htmlFor="large-checked" className="cursor-pointer">Checked</Label>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const RequiredValidation: Story = {
  render: () => {
    const [submitted, setSubmitted] = React.useState(false)
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(true)
      // The browser will automatically validate and show error messages
      // if required checkboxes are not checked
    }
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 pt-0.5">
              <Checkbox id="newsletter-req" />
            </div>
            <Label htmlFor="newsletter-req" className="leading-tight cursor-pointer">
              Subscribe to newsletter (optional)
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 pt-0.5">
              <Checkbox id="terms-req" required />
            </div>
            <Label htmlFor="terms-req" className="leading-tight inline cursor-pointer">
              I agree to the <Button variant="link" className="h-auto p-0 m-0 gap-0">terms and conditions</Button>*
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 pt-0.5">
              <Checkbox id="privacy-req" required />
            </div>
            <Label htmlFor="privacy-req" className="leading-tight inline cursor-pointer">
              I accept the <Button variant="link" className="h-auto p-0 m-0 gap-0">privacy policy</Button>*
            </Label>
          </div>
        </div>
        <div className="pt-4">
          <button 
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Submit Form
          </button>
        </div>
        {submitted && (
          <p className="text-sm text-muted-foreground">
            Try submitting without checking required checkboxes to see browser validation!
          </p>
        )}
      </form>
    )
  },
}

export const CustomValidation: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      newsletter: false,
      terms: false,
      privacy: false
    })
    const [errors, setErrors] = React.useState<string[]>([])
    const [submitted, setSubmitted] = React.useState(false)
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(true)
      
      const newErrors: string[] = []
      if (!formData.terms) newErrors.push('terms')
      if (!formData.privacy) newErrors.push('privacy')
      
      setErrors(newErrors)
      
      if (newErrors.length === 0) {
        alert('Form submitted successfully!')
        setErrors([])
        setSubmitted(false)
      }
    }
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 pt-0.5">
              <Checkbox 
                id="newsletter-custom" 
                checked={formData.newsletter}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, newsletter: checked as boolean }))
                }
              />
            </div>
            <Label htmlFor="newsletter-custom" className="leading-tight cursor-pointer">
              Subscribe to newsletter (optional)
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 pt-0.5">
              <Checkbox 
                id="terms-custom" 
                checked={formData.terms}
                onCheckedChange={(checked) => {
                  setFormData(prev => ({ ...prev, terms: checked as boolean }))
                  setErrors(prev => prev.filter(e => e !== 'terms'))
                }}
                className={errors.includes('terms') ? 'border-red-500' : ''}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="terms-custom" className="leading-tight inline cursor-pointer">
                I agree to the <Button variant="link" className="h-auto p-0 m-0 gap-0">terms and conditions</Button> *
              </Label>
              {errors.includes('terms') && (
                <p className="text-sm text-red-500 mt-1">Please accept the terms and conditions</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 pt-0.5">
              <Checkbox 
                id="privacy-custom" 
                checked={formData.privacy}
                onCheckedChange={(checked) => {
                  setFormData(prev => ({ ...prev, privacy: checked as boolean }))
                  setErrors(prev => prev.filter(e => e !== 'privacy'))
                }}
                className={errors.includes('privacy') ? 'border-red-500' : ''}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="privacy-custom" className="leading-tight inline cursor-pointer">
                I accept the <Button variant="link" className="h-auto p-0 m-0 gap-0">privacy policy</Button> *
              </Label>
              {errors.includes('privacy') && (
                <p className="text-sm text-red-500 mt-1">Please accept the privacy policy</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button 
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Submit Form
          </button>
        </div>
        
        {submitted && errors.length === 0 && (
          <p className="text-sm text-green-600">Form submitted successfully!</p>
        )}
      </form>
    )
  },
}