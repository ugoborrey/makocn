import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Mako Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component from shadcn/ui customized with Mako design system colors from Rubix.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Mako Design System</CardTitle>
        <CardDescription>Beautiful components for Rubix industrial supply.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card showcases the Mako design system integration with shadcn/ui components.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>Industrial supply management dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Manage your industrial supply chain with our comprehensive B2B platform.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-[300px] border-mako-blue-200 bg-mako-blue-10">
        <CardHeader>
          <CardTitle className="text-mako-blue-900">Blue Variant</CardTitle>
          <CardDescription className="text-mako-blue-800">Using Mako blue colors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-mako-blue-950">Content with blue theme integration</p>
        </CardContent>
      </Card>
      
      <Card className="w-[300px] border-mako-green-200 bg-mako-green-10">
        <CardHeader>
          <CardTitle className="text-mako-green-900">Green Variant</CardTitle>
          <CardDescription className="text-mako-green-800">Using Mako green colors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-mako-green-950">Content with green theme integration</p>
        </CardContent>
      </Card>
      
      <Card className="w-[300px] border-mako-yellow-200 bg-mako-yellow-10">
        <CardHeader>
          <CardTitle className="text-mako-yellow-900">Yellow Variant</CardTitle>
          <CardDescription className="text-mako-yellow-800">Using Mako yellow colors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-mako-yellow-950">Content with yellow theme integration</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const InteractiveCard: Story = {
  render: () => (
    <Card className="w-[400px] hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <CardTitle>Industrial Equipment</CardTitle>
        <CardDescription>Premium quality tools and machinery</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Availability</span>
            <span className="text-sm text-mako-green-600 font-semibold">In Stock</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Category</span>
            <span className="text-sm text-mako-neutral-600">Power Tools</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Price</span>
            <span className="text-lg font-bold text-mako-blue-600">€299.99</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
} 