import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PasswordInput } from '@/components/ui/password-input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const meta: Meta<typeof PasswordInput> = {
  title: 'UI/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultVisible: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label htmlFor="password">Password</Label>
      <PasswordInput id="password" placeholder="Enter your password" {...args} />
    </div>
  ),
}

export const TestToggle: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="test-password">Test Password Visibility Toggle</Label>
        <PasswordInput 
          id="test-password"
          placeholder="Type something to test visibility"
          helperText="Click the eye icon to toggle visibility"
        />
      </div>
    </div>
  ),
}

export const DefaultVisible: Story = {
  args: {
    placeholder: 'Password visible by default',
    defaultVisible: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false)
    const [password, setPassword] = useState('mySecretPassword123')
    
    return (
      <div className="space-y-4 min-w-[300px]">
        <div className="space-y-2">
          <Label htmlFor="controlled-password">Controlled Password Input</Label>
          <PasswordInput
            id="controlled-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            visible={isVisible}
            onVisibilityChange={setIsVisible}
            placeholder="Controlled password input"
          />
        </div>
        
        <div className="text-sm text-muted-foreground bg-muted p-3 rounded">
          <strong>Password visible:</strong> {isVisible ? 'Yes' : 'No'}<br />
          <strong>Current value:</strong> {password}<br />
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="mt-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/90"
          >
            Toggle via external button
          </button>
        </div>
      </div>
    )
  },
}

export const SignUpForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      password: '',
      confirmPassword: '',
    })
    
    const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword
    const passwordsDontMatch = formData.confirmPassword && formData.password !== formData.confirmPassword
    
    return (
      <form className="space-y-4 min-w-[300px] p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Create Account</h3>
        
        <div className="space-y-2">
          <Label htmlFor="signup-password">Password</Label>
          <PasswordInput 
            id="signup-password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <PasswordInput 
            id="confirm-password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className={
              passwordsMatch ? 'border-green-500' :
              passwordsDontMatch ? 'border-destructive' : ''
            }
          />
          {passwordsMatch && (
            <p className="text-sm text-green-600">Passwords match ✓</p>
          )}
          {passwordsDontMatch && (
            <p className="text-sm text-destructive">Passwords do not match</p>
          )}
        </div>
      </form>
    )
  },
}