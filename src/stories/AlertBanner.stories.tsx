import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React, { useState } from 'react'
import { AlertBanner } from '../components/ui/alert-banner'
import { Button } from '../components/ui/button'
import { 
  Truck,
  Package
} from 'lucide-react'



const meta = {
  title: 'UI/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Customizable alert banners with icons, actions, and close functionality. Perfect for displaying notifications, warnings, and status messages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Visual variant of the alert banner',
    },
    title: {
      control: { type: 'text' },
      description: 'Optional title for the alert',
    },
    description: {
      control: { type: 'text' },
      description: 'Main message content',
    },
    closable: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be closed',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof AlertBanner>

export default meta
type Story = StoryObj<typeof meta>

// Basic stories
export const Default: Story = {
  args: {
    description: 'This is a default alert banner with basic information.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Order Processed Successfully',
    description: 'Your industrial equipment order #RBX-2024-0156 has been processed and will ship within 24 hours.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Stock Level Low',
    description: 'The requested industrial bearings (SKU: BRG-304) are running low in stock. Only 12 units remaining.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Delivery Delayed',
    description: 'Your shipment to the Lyon facility has been delayed due to weather conditions. New estimated delivery: June 22, 2025.',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    description: 'New product catalog for Q3 2025 is now available. Discover the latest industrial automation solutions.',
  },
}

// Closable stories
export const Closable: Story = {
  args: {
    variant: 'success',
    title: 'Task Completed',
    description: 'Your data export has been completed successfully.',
    closable: true,
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true)
    
    if (!isVisible) {
      return (
        <div className="text-center p-4">
          <p className="text-gray-500 mb-2">Alert was closed</p>
          <Button onClick={() => setIsVisible(true)} size="sm">
            Show Alert Again
          </Button>
        </div>
      )
    }
    
    return <AlertBanner {...args} onClose={() => setIsVisible(false)} />
  },
}

// Custom icon stories
export const WithCustomIcon: Story = {
  args: {
    variant: 'default',
    icon: <Package className="h-5 w-5 text-blue-600" />,
    title: 'Bulk Order Discount Available',
    description: 'Order 50+ units of any hydraulic component and save 15% on your total purchase.',
  },
}

// Action button stories
export const WithAction: Story = {
  args: {
    variant: 'info',
    icon: <Truck className="h-5 w-5 text-blue-600" />,
    title: 'Express Delivery Available',
    description: 'Need your industrial supplies urgently? Upgrade to express delivery for next-day arrival.',
    action: {
      label: 'Upgrade Shipping',
      onClick: () => alert('Upgrade shipping clicked!'),
      variant: 'default',
    },
  },
}

export const WithActionAndClose: Story = {
  args: {
    variant: 'warning',
    title: 'System Maintenance Scheduled',
    description: 'Our system will be under maintenance tonight from 2-4 AM EST. Plan accordingly.',
    closable: true,
    action: {
      label: 'Learn More',
      onClick: () => alert('Learn more clicked!'),
      variant: 'outline',
    },
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true)
    
    if (!isVisible) {
      return (
        <div className="text-center p-4">
          <p className="text-gray-500 mb-2">Alert was closed</p>
          <Button onClick={() => setIsVisible(true)} size="sm">
            Show Alert Again
          </Button>
        </div>
      )
    }
    
    return <AlertBanner {...args} onClose={() => setIsVisible(false)} />
  },
}

// Kitchen sink example
export const AllVariants: Story = {
  args: {
    description: 'All variants demo',
  },
  render: () => {
    const [alerts, setAlerts] = useState({
      success: true,
      warning: true,
      error: true,
      info: true,
      custom: true,
      action: true,
    })

    const handleClose = (alertKey: string) => {
      setAlerts(prev => ({ ...prev, [alertKey]: false }))
    }

    const resetAlerts = () => {
      setAlerts({
        success: true,
        warning: true,
        error: true,
        info: true,
        custom: true,
        action: true,
      })
    }

    return (
      <div className="space-y-4">
        <div className="text-center mb-6">
          <Button onClick={resetAlerts} size="sm">
            Reset All Alerts
          </Button>
        </div>

        <div className="space-y-4">
          {/* Success Alert */}
          {alerts.success && (
            <AlertBanner
              variant="success"
              title="Order Processed Successfully"
              description="Your industrial equipment order #RBX-2024-0156 has been processed and will ship within 24 hours."
              closable
              onClose={() => handleClose('success')}
            />
          )}

          {/* Warning Alert */}
          {alerts.warning && (
            <AlertBanner
              variant="warning"
              title="Stock Level Low"
              description="The requested industrial bearings (SKU: BRG-304) are running low in stock. Only 12 units remaining."
              closable
              onClose={() => handleClose('warning')}
            />
          )}

          {/* Error Alert */}
          {alerts.error && (
            <AlertBanner
              variant="error"
              title="Delivery Delayed"
              description="Your shipment to the Lyon facility has been delayed due to weather conditions. New estimated delivery: June 22, 2025."
              closable
              onClose={() => handleClose('error')}
            />
          )}

          {/* Info Alert */}
          {alerts.info && (
            <AlertBanner
              variant="info"
              description="New product catalog for Q3 2025 is now available. Discover the latest industrial automation solutions."
              closable
              onClose={() => handleClose('info')}
            />
          )}

          {/* Custom Icon Alert */}
          {alerts.custom && (
            <AlertBanner
              variant="default"
              icon={<Package className="h-5 w-5 text-blue-600" />}
              title="Bulk Order Discount Available"
              description="Order 50+ units of any hydraulic component and save 15% on your total purchase."
              closable
              onClose={() => handleClose('custom')}
            />
          )}

          {/* Alert with Action Button */}
          {alerts.action && (
            <AlertBanner
              variant="info"
              icon={<Truck className="h-5 w-5 text-blue-600" />}
              title="Express Delivery Available"
              description="Need your industrial supplies urgently? Upgrade to express delivery for next-day arrival."
              action={{
                label: 'Upgrade Shipping',
                onClick: () => alert('Upgrade shipping clicked!'),
                variant: 'default',
              }}
              closable
              onClose={() => handleClose('action')}
            />
          )}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive example showing all alert variants with different configurations.',
      },
    },
  },
}