import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RadioGroup component from shadcn/ui customized with Mako design system colors from Rubix. A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'The default value of the radio group',
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled value of the radio group',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is required',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Callback fired when the value changes',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  args: {},
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one" className="text-muted-foreground">Option One (Selected)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" />
        <Label htmlFor="disabled-two" className="text-muted-foreground">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="disabled-three" />
        <Label htmlFor="disabled-three" className="text-muted-foreground">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  args: {},
}

export const SingleItemDisabled: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="single-one" />
        <Label htmlFor="single-one">Option One (Available)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="single-two" disabled />
        <Label htmlFor="single-two" className="text-muted-foreground">Option Two (Disabled)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="single-three" />
        <Label htmlFor="single-three">Option Three (Available)</Label>
      </div>
    </RadioGroup>
  ),
  args: {},
}

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="small" className="flex flex-row space-x-6 space-y-0">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="size-small" />
        <Label className='font-normal' htmlFor="size-small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="size-medium" />
        <Label htmlFor="size-medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="size-large" />
        <Label htmlFor="size-large">Large</Label>
      </div>
    </RadioGroup>
  ),
  args: {},
}

export const WithDescriptions: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="free">
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="free" id="plan-free" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-free" className="cursor-pointer font-medium">
            Free Plan
          </Label>
          <p className="text-sm text-muted-foreground">
            Perfect for getting started. Includes basic features.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="pro" id="plan-pro" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-pro" className="cursor-pointer font-medium">
            Pro Plan
          </Label>
          <p className="text-sm text-muted-foreground">
            Advanced features for professionals. Includes priority support.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="enterprise" id="plan-enterprise" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="plan-enterprise" className="cursor-pointer font-medium">
            Enterprise Plan
          </Label>
          <p className="text-sm text-muted-foreground">
            Custom solutions for large organizations. Dedicated support.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
  args: {},
}

export const PaymentMethods: Story = {
  render: () => {
    const [selectedPayment, setSelectedPayment] = React.useState('paypal')
    
    const paymentOptions = [
      { 
        value: 'card', 
        label: 'Credit Card', 
        icon: <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm"></div> 
      },
      { 
        value: 'paypal', 
        label: 'PayPal', 
        icon: <div className="w-6 h-4 bg-blue-600 rounded-sm"></div> 
      },
      { 
        value: 'apple', 
        label: 'Apple Pay', 
        icon: <div className="w-6 h-4 bg-black rounded-sm"></div> 
      },
    ]
    
    return (
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Choose your preferred payment method</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
            {paymentOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setSelectedPayment(option.value)}
                className={`flex items-center space-x-3 rounded-lg border p-3 cursor-pointer transition-all ${
                  selectedPayment === option.value
                    ? 'border-blue-700 bg-blue-25'
                    : 'border-border hover:border-blue-300'
                }`}
              >
                <RadioGroupItem 
                  value={option.value} 
                  id={`payment-${option.value}`}
                  className="pointer-events-none"
                />
                <Label 
                  htmlFor={`payment-${option.value}`} 
                  className="cursor-pointer flex-1 pointer-events-none"
                >
                  <div className="flex items-center gap-2">
                    {option.icon}
                    {option.label}
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    )
  },
  args: {},
}

export const ControlledExample: Story = {
  render: () => {
    const [value, setValue] = React.useState('option-one')
    
    return (
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Selected Value: {value}</h4>
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="controlled-one" />
              <Label htmlFor="controlled-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="controlled-two" />
              <Label htmlFor="controlled-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="controlled-three" />
              <Label htmlFor="controlled-three">Option Three</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setValue('option-one')}>
            Select One
          </Button>
          <Button variant="outline" size="sm" onClick={() => setValue('option-two')}>
            Select Two
          </Button>
          <Button variant="outline" size="sm" onClick={() => setValue('option-three')}>
            Select Three
          </Button>
        </div>
      </div>
    )
  },
  args: {},
}

export const FormExample: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = React.useState('basic')
    const [selectedBilling, setSelectedBilling] = React.useState('monthly')
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      alert(`Selected: ${selectedPlan} plan with ${selectedBilling} billing`)
    }
    
    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Choose Your Plan</CardTitle>
          <CardDescription>Select a plan and billing cycle</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-medium">Plan Type</Label>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="basic" id="form-basic" />
                  <Label htmlFor="form-basic">Basic - $9/month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pro" id="form-pro" />
                  <Label htmlFor="form-pro">Pro - $19/month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="form-enterprise" />
                  <Label htmlFor="form-enterprise">Enterprise - $49/month</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label className="text-base font-medium">Billing Cycle</Label>
              <RadioGroup value={selectedBilling} onValueChange={setSelectedBilling} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="billing-monthly" />
                  <Label htmlFor="billing-monthly">Monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yearly" id="billing-yearly" />
                  <Label htmlFor="billing-yearly">Yearly (2 months free)</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button type="submit" className="w-full">
              Continue with {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  },
  args: {},
}

export const LargeSize: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="large-one" size="lg" />
        <Label htmlFor="large-one">Large Option One (20px)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="large-two" size="lg" />
        <Label htmlFor="large-two">Large Option Two (20px)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="large-three" size="lg" />
        <Label htmlFor="large-three">Large Option Three (20px)</Label>
      </div>
    </RadioGroup>
  ),
  args: {},
}

export const SizeComparison: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-3">Default Size (16x16px)</h4>
        <RadioGroup {...args} defaultValue="default-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default-one" id="size-default-one" />
            <Label htmlFor="size-default-one">Default Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default-two" id="size-default-two" />
            <Label htmlFor="size-default-two">Default Option Two</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3">Large Size (20x20px)</h4>
        <RadioGroup {...args} defaultValue="large-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large-one" id="size-large-one" size="lg" />
            <Label htmlFor="size-large-one">Large Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large-two" id="size-large-two" size="lg" />
            <Label htmlFor="size-large-two">Large Option Two</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  args: {},
}

export const LongList: Story = {
  render: (args) => (
    <div className="max-h-64 overflow-y-auto">
      <RadioGroup {...args} defaultValue="country-us">
        {[
          { value: 'country-us', label: 'United States' },
          { value: 'country-uk', label: 'United Kingdom' },
          { value: 'country-ca', label: 'Canada' },
          { value: 'country-au', label: 'Australia' },
          { value: 'country-de', label: 'Germany' },
          { value: 'country-fr', label: 'France' },
          { value: 'country-jp', label: 'Japan' },
          { value: 'country-kr', label: 'South Korea' },
          { value: 'country-cn', label: 'China' },
          { value: 'country-in', label: 'India' },
          { value: 'country-br', label: 'Brazil' },
          { value: 'country-mx', label: 'Mexico' },
        ].map((country) => (
          <div key={country.value} className="flex items-center space-x-2">
            <RadioGroupItem value={country.value} id={country.value} />
            <Label htmlFor={country.value}>{country.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
  args: {},
} 