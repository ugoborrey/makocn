import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { Button } from '../components/ui/button'
import { ChevronRight, Plus, Heart, Download, Search, Settings } from 'lucide-react'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component from shadcn/ui customized with Mako design system colors from Rubix. Now supports leading icons, trailing icons, and icon-only variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'tertiary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'touch', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Make button full width',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state with spinner',
    },
    loadingText: {
      control: { type: 'text' },
      description: 'Custom text to show during loading',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: 'Show leading icon (for demo purposes)',
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: 'Show trailing icon (for demo purposes)',
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Show as icon-only button (for demo purposes)',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Make button fully rounded',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
}

export const Touch: Story = {
  args: {
    children: 'Touch Button',
    size: 'touch',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

// New icon-related stories
export const WithLeadingIcon: Story = {
  args: {
    children: 'Add Item',
    leadingIcon: <Plus size={16} />,
    variant: 'default',
  },
}

export const WithTrailingIcon: Story = {
  args: {
    children: 'Continue',
    trailingIcon: <ChevronRight size={16} />,
    variant: 'default',
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'Download',
    leadingIcon: <Download size={16} />,
    trailingIcon: <ChevronRight size={16} />,
    variant: 'outline',
  },
}

// Icon-only button stories
export const IconOnly: Story = {
  args: {
    icon: <Plus size={16} />,
    'aria-label': 'Add item',
    variant: 'default',
  },
}

export const IconOnlyVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button icon={<Plus size={16} />} aria-label="Add" />
      <Button icon={<Heart size={16} />} variant="secondary" aria-label="Like" />
      <Button icon={<Search size={16} />} variant="tertiary" aria-label="Search" />
      <Button icon={<Download size={16} />} variant="destructive" aria-label="Download" />
      <Button icon={<Settings size={16} />} variant="outline" aria-label="Settings" />
      <Button icon={<ChevronRight size={16} />} variant="ghost" aria-label="Next" />
    </div>
  ),
}

export const IconOnlyStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button icon={<Plus size={16} />} aria-label="Add" />
      <Button icon={<Plus size={16} />} aria-label="Add" disabled />
      <Button icon={<Heart size={16} />} variant="outline" aria-label="Like" />
      <Button icon={<Heart size={16} />} variant="outline" aria-label="Like" disabled />
      <Button icon={<Search size={16} />} variant="ghost" aria-label="Search" />
      <Button icon={<Search size={16} />} variant="ghost" aria-label="Search" disabled />
    </div>
  ),
}

export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button leadingIcon={<Plus size={16} />}>Add</Button>
      <Button variant="secondary" leadingIcon={<Heart size={16} />}>Like</Button>
      <Button variant="tertiary" trailingIcon={<ChevronRight size={16} />}>Next</Button>
      <Button variant="destructive" leadingIcon={<Download size={16} />}>Download</Button>
      <Button variant="outline" leadingIcon={<Plus size={16} />} trailingIcon={<ChevronRight size={16} />}>Add & Continue</Button>
      <Button variant="ghost" leadingIcon={<Heart size={16} />}>Favorite</Button>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm" leadingIcon={<Plus size={16} />}>Small</Button>
      <Button size="default" leadingIcon={<Plus size={16} />}>Default</Button>
      <Button size="lg" leadingIcon={<Plus size={16} />}>Large</Button>
      <Button size="touch" leadingIcon={<Plus size={16} />}>Touch</Button>
    </div>
  ),
}

export const MixedIconButtons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon-only Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button icon={<Plus size={16} />} aria-label="Add" />
          <Button icon={<Heart size={16} />} variant="secondary" aria-label="Like" />
          <Button icon={<Search size={16} />} variant="outline" aria-label="Search" />
          <Button icon={<Settings size={16} />} variant="ghost" aria-label="Settings" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Buttons with Leading Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button leadingIcon={<Plus size={16} />}>Add Item</Button>
          <Button leadingIcon={<Heart size={16} />} variant="secondary">Like</Button>
          <Button leadingIcon={<Download size={16} />} variant="outline">Download</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Buttons with Trailing Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button trailingIcon={<ChevronRight size={16} />}>Continue</Button>
          <Button trailingIcon={<ChevronRight size={16} />} variant="tertiary">Next Step</Button>
          <Button trailingIcon={<ChevronRight size={16} />} variant="ghost">Learn More</Button>
        </div>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="touch">Touch</Button>
    </div>
  ),
}

// Loading state stories
export const Loading: Story = {
  args: {
    children: 'Save Changes',
    loading: true,
  },
}

export const LoadingWithCustomText: Story = {
  args: {
    children: 'Create Account',
    loading: true,
    loadingText: 'Creating account...',
  },
}

export const LoadingVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button loading>Default Loading</Button>
      <Button loading variant="secondary">Secondary Loading</Button>
      <Button loading variant="tertiary">Tertiary Loading</Button>
      <Button loading variant="destructive">Destructive Loading</Button>
      <Button loading variant="outline">Outline Loading</Button>
    </div>
  ),
}

export const LoadingSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button loading size="sm">Small Loading</Button>
      <Button loading size="default">Default Loading</Button>
      <Button loading size="lg">Large Loading</Button>
      <Button loading size="touch">Touch Loading</Button>
    </div>
  ),
}

export const LoadingWithText: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button loading loadingText="Saving...">Save</Button>
      <Button loading loadingText="Processing..." variant="secondary">Process</Button>
      <Button loading loadingText="Uploading..." variant="tertiary">Upload</Button>
      <Button loading loadingText="Deleting..." variant="destructive">Delete</Button>
    </div>
  ),
}

export const LoadingFullWidth: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <Button loading fullWidth>Full Width Loading</Button>
      <Button loading loadingText="Processing payment..." fullWidth variant="secondary">
        Pay Now
      </Button>
    </div>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Regular vs Loading States</h3>
        <div className="flex flex-wrap gap-2">
          <Button leadingIcon={<Plus size={16} />}>Add Item</Button>
          <Button loading loadingText="Adding...">Add Item</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button trailingIcon={<ChevronRight size={16} />}>Continue</Button>
          <Button loading>Continue</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Loading Replaces Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button leadingIcon={<Download size={16} />} trailingIcon={<ChevronRight size={16} />}>
            Download & Continue
          </Button>
          <Button 
            loading 
            loadingText="Downloading..." 
            leadingIcon={<Download size={16} />} 
            trailingIcon={<ChevronRight size={16} />}
          >
            Download & Continue
          </Button>
        </div>
      </div>
    </div>
  ),
}

// Rounded button stories
export const Rounded: Story = {
  args: {
    children: 'Rounded Button',
    rounded: true,
  },
}

export const RoundedVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button rounded>Default Rounded</Button>
      <Button rounded variant="secondary">Secondary Rounded</Button>
      <Button rounded variant="tertiary">Tertiary Rounded</Button>
      <Button rounded variant="destructive">Destructive Rounded</Button>
      <Button rounded variant="outline">Outline Rounded</Button>
      <Button rounded variant="ghost">Ghost Rounded</Button>
    </div>
  ),
}

export const RoundedSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button rounded size="sm">Small Rounded</Button>
      <Button rounded size="default">Default Rounded</Button>
      <Button rounded size="lg">Large Rounded</Button>
      <Button rounded size="touch">Touch Rounded</Button>
    </div>
  ),
}

export const RoundedWithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Rounded with Leading Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button rounded leadingIcon={<Plus size={16} />}>Add Item</Button>
          <Button rounded leadingIcon={<Heart size={16} />} variant="secondary">Like</Button>
          <Button rounded leadingIcon={<Download size={16} />} variant="outline">Download</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Rounded with Trailing Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button rounded trailingIcon={<ChevronRight size={16} />}>Continue</Button>
          <Button rounded trailingIcon={<ChevronRight size={16} />} variant="tertiary">Next Step</Button>
          <Button rounded trailingIcon={<ChevronRight size={16} />} variant="ghost">Learn More</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Rounded Icon-only Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button rounded icon={<Plus size={16} />} aria-label="Add" />
          <Button rounded icon={<Heart size={16} />} variant="secondary" aria-label="Like" />
          <Button rounded icon={<Search size={16} />} variant="outline" aria-label="Search" />
          <Button rounded icon={<Settings size={16} />} variant="ghost" aria-label="Settings" />
        </div>
      </div>
    </div>
  ),
}

export const RoundedComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Regular vs Rounded Buttons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Regular Button</Button>
          <Button rounded>Rounded Button</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="secondary">Regular Secondary</Button>
          <Button rounded variant="secondary">Rounded Secondary</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button icon={<Plus size={16} />} aria-label="Add" />
          <Button rounded icon={<Plus size={16} />} aria-label="Add" />
        </div>
      </div>
    </div>
  ),
}

 