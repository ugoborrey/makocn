import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'file'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="text-base">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
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
    disabled: true,
    placeholder: 'Disabled input',
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
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
        <CardDescription>Fill out the form below to get in touch.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-base">Name</Label>
          <Input type="text" id="name" placeholder="Your full name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email-form" className="text-base">Email</Label>
          <Input type="email" id="email-form" placeholder="your.email@example.com" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone" className="text-base">Phone</Label>
          <Input type="tel" id="phone" placeholder="+1 (555) 123-4567" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="website" className="text-base">Website</Label>
          <Input type="url" id="website" placeholder="https://example.com" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-base">Small</Label>
        <Input size="sm" placeholder="Small input (h-8)" />
      </div>
      <div className="grid w-full max-w-md items-center gap-1.5">
        <Label className="text-base">Default</Label>
        <Input size="default" placeholder="Default input (h-10)" />
      </div>
      <div className="grid w-full max-w-lg items-center gap-1.5">
        <Label className="text-base">Large</Label>
        <Input size="lg" placeholder="Large input (h-12)" />
      </div>
      <div className="grid w-full max-w-lg items-center gap-1.5">
        <Label className="text-base">Touch</Label>
        <Input size="touch" placeholder="Touch input (h-11)" />
      </div>
    </div>
  ),
};

export const InputStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-base">Normal State</Label>
        <Input placeholder="Normal input" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-base">Focus State</Label>
        <Input placeholder="Click to focus" autoFocus />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-base">Error State</Label>
        <Input
          placeholder="Error input"
          aria-invalid="true"
          className="border-destructive focus-visible:ring-destructive/20"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-base">Disabled State</Label>
        <Input placeholder="Disabled input" disabled />
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

 