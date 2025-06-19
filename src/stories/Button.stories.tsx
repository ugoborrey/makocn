import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { Button } from '../components/ui/button'

// Simple icon components for demonstration
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="M12 5v14"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const meta = {
  title: 'Mako Design System/Button',
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
    leadingIcon: <PlusIcon />,
    variant: 'default',
  },
}

export const WithTrailingIcon: Story = {
  args: {
    children: 'Continue',
    trailingIcon: <ChevronRightIcon />,
    variant: 'default',
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'Download',
    leadingIcon: <DownloadIcon />,
    trailingIcon: <ChevronRightIcon />,
    variant: 'outline',
  },
}

// Icon-only button stories
export const IconOnly: Story = {
  args: {
    icon: <PlusIcon />,
    'aria-label': 'Add item',
    variant: 'default',
  },
}

export const IconOnlyVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button icon={<PlusIcon />} aria-label="Add" />
      <Button icon={<HeartIcon />} variant="secondary" aria-label="Like" />
      <Button icon={<SearchIcon />} variant="tertiary" aria-label="Search" />
      <Button icon={<DownloadIcon />} variant="destructive" aria-label="Download" />
      <Button icon={<SettingsIcon />} variant="outline" aria-label="Settings" />
      <Button icon={<ChevronRightIcon />} variant="ghost" aria-label="Next" />
    </div>
  ),
}

export const IconOnlyStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button icon={<PlusIcon />} aria-label="Add" />
      <Button icon={<PlusIcon />} aria-label="Add" disabled />
      <Button icon={<HeartIcon />} variant="outline" aria-label="Like" />
      <Button icon={<HeartIcon />} variant="outline" aria-label="Like" disabled />
      <Button icon={<SearchIcon />} variant="ghost" aria-label="Search" />
      <Button icon={<SearchIcon />} variant="ghost" aria-label="Search" disabled />
    </div>
  ),
}

export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button leadingIcon={<PlusIcon />}>Add</Button>
      <Button variant="secondary" leadingIcon={<HeartIcon />}>Like</Button>
      <Button variant="tertiary" trailingIcon={<ChevronRightIcon />}>Next</Button>
      <Button variant="destructive" leadingIcon={<DownloadIcon />}>Download</Button>
      <Button variant="outline" leadingIcon={<PlusIcon />} trailingIcon={<ChevronRightIcon />}>Add & Continue</Button>
      <Button variant="ghost" leadingIcon={<HeartIcon />}>Favorite</Button>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm" leadingIcon={<PlusIcon />}>Small</Button>
      <Button size="default" leadingIcon={<PlusIcon />}>Default</Button>
      <Button size="lg" leadingIcon={<PlusIcon />}>Large</Button>
      <Button size="touch" leadingIcon={<PlusIcon />}>Touch</Button>
    </div>
  ),
}

export const MixedIconButtons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon-only Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button icon={<PlusIcon />} aria-label="Add" />
          <Button icon={<HeartIcon />} variant="secondary" aria-label="Like" />
          <Button icon={<SearchIcon />} variant="outline" aria-label="Search" />
          <Button icon={<SettingsIcon />} variant="ghost" aria-label="Settings" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Buttons with Leading Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button leadingIcon={<PlusIcon />}>Add Item</Button>
          <Button leadingIcon={<HeartIcon />} variant="secondary">Like</Button>
          <Button leadingIcon={<DownloadIcon />} variant="outline">Download</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Buttons with Trailing Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button trailingIcon={<ChevronRightIcon />}>Continue</Button>
          <Button trailingIcon={<ChevronRightIcon />} variant="tertiary">Next Step</Button>
          <Button trailingIcon={<ChevronRightIcon />} variant="ghost">Learn More</Button>
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
          <Button leadingIcon={<PlusIcon />}>Add Item</Button>
          <Button loading loadingText="Adding...">Add Item</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button trailingIcon={<ChevronRightIcon />}>Continue</Button>
          <Button loading>Continue</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Loading Replaces Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button leadingIcon={<DownloadIcon />} trailingIcon={<ChevronRightIcon />}>
            Download & Continue
          </Button>
          <Button 
            loading 
            loadingText="Downloading..." 
            leadingIcon={<DownloadIcon />} 
            trailingIcon={<ChevronRightIcon />}
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
          <Button rounded leadingIcon={<PlusIcon />}>Add Item</Button>
          <Button rounded leadingIcon={<HeartIcon />} variant="secondary">Like</Button>
          <Button rounded leadingIcon={<DownloadIcon />} variant="outline">Download</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Rounded with Trailing Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button rounded trailingIcon={<ChevronRightIcon />}>Continue</Button>
          <Button rounded trailingIcon={<ChevronRightIcon />} variant="tertiary">Next Step</Button>
          <Button rounded trailingIcon={<ChevronRightIcon />} variant="ghost">Learn More</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Rounded Icon-only Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button rounded icon={<PlusIcon />} aria-label="Add" />
          <Button rounded icon={<HeartIcon />} variant="secondary" aria-label="Like" />
          <Button rounded icon={<SearchIcon />} variant="outline" aria-label="Search" />
          <Button rounded icon={<SettingsIcon />} variant="ghost" aria-label="Settings" />
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
          <Button icon={<PlusIcon />} aria-label="Add" />
          <Button rounded icon={<PlusIcon />} aria-label="Add" />
        </div>
      </div>
    </div>
  ),
}

 