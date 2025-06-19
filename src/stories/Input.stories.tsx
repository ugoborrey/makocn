import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'touch'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Email
      </label>
      <Input id="email" type="email" placeholder="Enter your email" {...args} />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    helperText: 'This field is disabled',
  },
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error-input" className="text-base">Username</Label>
      <Input
        type="text"
        id="error-input"
        placeholder="Enter username"
        aria-invalid="true"
        className="border-destructive"
      />
      <p className="text-sm text-destructive">Username is required</p>
    </div>
  ),
};

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
    min: 0,
    max: 100,
  },
};

export const File: Story = {
  args: {
    type: 'file',
    accept: '.pdf,.doc,.docx',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Pre-filled value',
    placeholder: 'This won\'t show',
  },
};

export const FormExample: Story = {
  render: () => (
    <form className="grid w-full max-w-sm gap-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Sign Up Form</h3>
      
      <div>
        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
        <Input 
          id="name"
          placeholder="John Doe" 
          helperText="Enter your first and last name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input 
          id="email"
          type="email"
          placeholder="john@example.com" 
          error="Please enter a valid email address"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="text-sm font-medium">Password</label>
        <Input 
          id="password"
          type="password"
          placeholder="••••••••" 
          state="success"
          helperText="Strong password ✓"
        />
      </div>
      
      <div>
        <label htmlFor="confirm" className="text-sm font-medium">Confirm Password</label>
        <Input 
          id="confirm"
          type="password"
          placeholder="••••••••" 
          state="warning"
          helperText="Passwords match but could be stronger"
        />
      </div>
    </form>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-4">
      <Input size="sm" placeholder="Small input" />
      <Input size="default" placeholder="Default input" />
      <Input size="lg" placeholder="Large input" />
      <Input size="touch" placeholder="Touch-friendly input" />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div>
        <label className="text-sm font-medium">Default State</label>
        <Input 
          placeholder="Enter your name" 
          helperText="This is a helper text"
        />
      </div>
      
      <div>
        <label className="text-sm font-medium">Error State</label>
        <Input 
          placeholder="Enter your email" 
          error="Please enter a valid email address"
        />
      </div>
      
      <div>
        <label className="text-sm font-medium">Success State</label>
        <Input 
          placeholder="Enter your password" 
          state="success"
          helperText="Password meets all requirements"
        />
      </div>
      
      <div>
        <label className="text-sm font-medium">Warning State</label>
        <Input 
          placeholder="Enter your username" 
          state="warning"
          helperText="Username is available but similar to existing ones"
        />
      </div>
    </div>
  ),
};

export const ErrorVariations: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div>
        <label className="text-sm font-medium">Error with String Message</label>
        <Input 
          type="email"
          placeholder="john@example.com" 
          error="Email is required"
        />
      </div>
      
      <div>
        <label className="text-sm font-medium">Error Boolean (No Message)</label>
        <Input 
          type="password"
          placeholder="Enter password" 
          error={true}
        />
      </div>
      
      <div>
        <label className="text-sm font-medium">Error Overrides Helper Text</label>
        <Input 
          type="text"
          placeholder="Enter username" 
          helperText="This won't show"
          error="Username is already taken"
        />
      </div>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Sizes (matching Button heights)</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm">Small</div>
            <Input size="sm" placeholder="Small input" className="max-w-xs" />
            <span className="text-sm text-muted-foreground">h-8 (32px)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm">Default</div>
            <Input size="default" placeholder="Default input" className="max-w-xs" />
            <span className="text-sm text-muted-foreground">h-10 (40px)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm">Large</div>
            <Input size="lg" placeholder="Large input" className="max-w-xs" />
            <span className="text-sm text-muted-foreground">h-12 (48px)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 text-sm">Touch</div>
            <Input size="touch" placeholder="Touch input" className="max-w-xs" />
            <span className="text-sm text-muted-foreground">h-11 (44px)</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DynamicHelperText: Story = {
  render: () => {
    const [email, setEmail] = useState('')
    
    // Email validation logic
    const validateEmail = (email: string) => {
      if (!email) return { state: 'default' as const, text: 'Please enter your email address to continue' }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return { state: 'error' as const, text: 'Please enter a valid email address (e.g., user@example.com)' }
      }
      
      return { state: 'success' as const, text: 'Perfect! This email format is valid ✓' }
    }
    
    const validation = validateEmail(email)
    
    return (
      <div className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="dynamic-email" className="text-sm font-medium block mb-2">
            Email Address
          </label>
          <Input
            id="dynamic-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            state={validation.state}
            helperText={validation.text}
          />
        </div>
        
        {/* Show current state for demo purposes */}
        <div className="text-sm text-muted-foreground bg-muted p-3 rounded">
          <strong>Current state:</strong> {validation.state}<br />
          <strong>Helper text:</strong> {validation.text}<br />
          <strong>Value:</strong> &quot;{email}&quot;
        </div>
      </div>
    )
  },
};

export const AdvancedEmailValidation: Story = {
  render: () => {
    const [email, setEmail] = useState('')
    const [touched, setTouched] = useState(false)
    
    // More sophisticated email validation with different states
    const validateEmail = (email: string, isTouched: boolean) => {
      if (!email) {
        return { 
          state: 'default' as const, 
          text: isTouched 
            ? 'Email address is required' 
            : 'We\'ll use this to send you important updates'
        }
      }
      
      // Check for basic format
      const hasAt = email.includes('@')
      const hasDot = email.includes('.')
      
      if (!hasAt) {
        return { state: 'error' as const, text: 'Email must contain an @ symbol' }
      }
      
      if (!hasDot) {
        return { state: 'error' as const, text: 'Email must contain a domain (e.g., .com, .org)' }
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return { state: 'error' as const, text: 'Please check your email format' }
      }
      
      // Check for common domains to show warning vs success
      const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
      const domain = email.split('@')[1]?.toLowerCase()
      
      if (domain && commonDomains.includes(domain)) {
        return { state: 'success' as const, text: 'Great! This email looks perfect ✓' }
      }
      
      return { 
        state: 'warning' as const, 
        text: 'Valid format, but please double-check the domain spelling' 
      }
    }
    
    const validation = validateEmail(email, touched)
    
    return (
      <div className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="advanced-email" className="text-sm font-medium block mb-2">
            Work Email Address
          </label>
          <Input
            id="advanced-email"
            type="email"
            placeholder="john.doe@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            onFocus={() => setTouched(true)}
            state={validation.state}
            helperText={validation.text}
          />
        </div>
        
        {/* Progressive validation demo */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Try these examples:</h4>
          <div className="grid gap-1 text-xs text-muted-foreground">
            <button 
              onClick={() => { setEmail('john'); setTouched(true); }}
              className="text-left hover:text-foreground"
            >
              • &quot;john&quot; → Missing @ symbol
            </button>
            <button 
              onClick={() => { setEmail('john@company'); setTouched(true); }}
              className="text-left hover:text-foreground"
            >
              • &quot;john@company&quot; → Missing domain extension
            </button>
            <button 
              onClick={() => { setEmail('john@company.co'); setTouched(true); }}
              className="text-left hover:text-foreground"
            >
              • &quot;john@company.co&quot; → Warning (uncommon domain)
            </button>
            <button 
              onClick={() => { setEmail('john@gmail.com'); setTouched(true); }}
              className="text-left hover:text-foreground"
            >
              • &quot;john@gmail.com&quot; → Success!
            </button>
          </div>
        </div>
      </div>
    )
  },
};

 