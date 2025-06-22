import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color palette showcase for the Mako design system used at Rubix.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="flex flex-col items-center space-y-2">
    <div 
      className={`w-16 h-16 rounded-lg border shadow-sm ${color}`}
      style={{ backgroundColor: hex }}
    />
    <div className="text-center">
      <div className="text-xs font-medium">{name}</div>
      <div className="text-xs text-gray-600 font-mono">{hex}</div>
    </div>
  </div>
)

const ColorSection = ({ title, colors, description }: { 
  title: string; 
  colors: Array<{ name: string; hex: string; className: string }>; 
  description: string;
}) => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <p className="text-sm text-gray-600">{description}</p>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-13 gap-4">
        {colors.map((color) => (
          <ColorSwatch
            key={color.name}
            color={color.className}
            name={color.name}
            hex={color.hex}
          />
        ))}
      </div>
    </CardContent>
  </Card>
)

export const ColorPalette: Story = {
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-950 mb-2">Mako Design System</h1>
        <p className="text-lg text-gray-600">Color palette for Rubix B2B industrial supply platform</p>
      </div>

      <ColorSection
        title="Blue - Primary"
        description="Primary brand color used for main actions and key interface elements"
        colors={[
                  { name: '10', hex: '#FBFDFE', className: 'bg-blue-10' },
        { name: '25', hex: '#F6FAFD', className: 'bg-blue-25' },
        { name: '50', hex: '#EEF6FC', className: 'bg-blue-50' },
        { name: '100', hex: '#D8ECF8', className: 'bg-blue-100' },
        { name: '200', hex: '#BADEF3', className: 'bg-blue-200' },
        { name: '300', hex: '#8ACAEA', className: 'bg-blue-300' },
        { name: '400', hex: '#56AEE1', className: 'bg-blue-400' },
        { name: '500', hex: '#2F8DDA', className: 'bg-blue-500' },
        { name: '600', hex: '#2671D9', className: 'bg-blue-600' },
        { name: '700', hex: '#265FD9', className: 'bg-blue-700' },
        { name: '800', hex: '#204DB6', className: 'bg-blue-800' },
        { name: '900', hex: '#19448F', className: 'bg-blue-900' },
        { name: '950', hex: '#051E50', className: 'bg-blue-950' },
        ]}
      />

      <ColorSection
        title="Yellow - Primary"
        description="Secondary primary color for warnings and highlights"
        colors={[
                  { name: '10', hex: '#FFFEF5', className: 'bg-yellow-10' },
        { name: '25', hex: '#FFFEF0', className: 'bg-yellow-25' },
        { name: '50', hex: '#FFFEEA', className: 'bg-yellow-50' },
        { name: '100', hex: '#FFF9C5', className: 'bg-yellow-100' },
        { name: '200', hex: '#FFF285', className: 'bg-yellow-200' },
        { name: '300', hex: '#FFE546', className: 'bg-yellow-300' },
        { name: '400', hex: '#FFD700', className: 'bg-yellow-400' },
        { name: '500', hex: '#FFB400', className: 'bg-yellow-500' },
        { name: '600', hex: '#E28A00', className: 'bg-yellow-600' },
        { name: '700', hex: '#BB6002', className: 'bg-yellow-700' },
        { name: '800', hex: '#984A08', className: 'bg-yellow-800' },
        { name: '900', hex: '#7C3D0B', className: 'bg-yellow-900' },
        { name: '950', hex: '#481F00', className: 'bg-yellow-950' },
        ]}
      />

      <ColorSection
        title="Green - Secondary"
        description="Success states and positive actions"
        colors={[
                  { name: '10', hex: '#FAFFFC', className: 'bg-green-10' },
        { name: '25', hex: '#F5FEFA', className: 'bg-green-25' },
        { name: '50', hex: '#EFFEF6', className: 'bg-green-50' },
        { name: '100', hex: '#DBFBEC', className: 'bg-green-100' },
        { name: '200', hex: '#BAF7DA', className: 'bg-green-200' },
        { name: '300', hex: '#84F1BD', className: 'bg-green-300' },
        { name: '400', hex: '#3EEA99', className: 'bg-green-400' },
        { name: '500', hex: '#17D079', className: 'bg-green-500' },
        { name: '600', hex: '#00C66A', className: 'bg-green-600' },
        { name: '700', hex: '#009550', className: 'bg-green-700' },
        { name: '800', hex: '#007B43', className: 'bg-green-800' },
        { name: '900', hex: '#00673A', className: 'bg-green-900' },
        { name: '950', hex: '#00341E', className: 'bg-green-950' },
        ]}
      />

      <ColorSection
        title="Red - Secondary"
        description="Error states and destructive actions"
        colors={[
                  { name: '10', hex: '#FEFBFB', className: 'bg-red-10' },
        { name: '25', hex: '#FEF7F6', className: 'bg-red-25' },
        { name: '50', hex: '#FDF4F3', className: 'bg-red-50' },
        { name: '100', hex: '#FCE6E4', className: 'bg-red-100' },
        { name: '200', hex: '#FBD1CD', className: 'bg-red-200' },
        { name: '300', hex: '#F7B0AA', className: 'bg-red-300' },
        { name: '400', hex: '#F08379', className: 'bg-red-400' },
        { name: '500', hex: '#E55A4E', className: 'bg-red-500' },
        { name: '600', hex: '#D23D30', className: 'bg-red-600' },
        { name: '700', hex: '#BA3327', className: 'bg-red-700' },
        { name: '800', hex: '#922B22', className: 'bg-red-800' },
        { name: '900', hex: '#792A23', className: 'bg-red-900' },
        { name: '950', hex: '#42110D', className: 'bg-red-950' },
        ]}
      />

      <ColorSection
        title="Purple - Secondary"
        description="Special features and premium content"
        colors={[
                  { name: '10', hex: '#FAFBFF', className: 'bg-purple-10' },
        { name: '25', hex: '#F5F6FF', className: 'bg-purple-25' },
        { name: '50', hex: '#EEF0FF', className: 'bg-purple-50' },
        { name: '100', hex: '#E0E3FF', className: 'bg-purple-100' },
        { name: '200', hex: '#C7CAFE', className: 'bg-purple-200' },
        { name: '300', hex: '#A5A8FC', className: 'bg-purple-300' },
        { name: '400', hex: '#8781F8', className: 'bg-purple-400' },
        { name: '500', hex: '#7463F1', className: 'bg-purple-500' },
        { name: '600', hex: '#6748E5', className: 'bg-purple-600' },
        { name: '700', hex: '#5838CA', className: 'bg-purple-700' },
        { name: '800', hex: '#4730A3', className: 'bg-purple-800' },
        { name: '900', hex: '#3D2E81', className: 'bg-purple-900' },
        { name: '950', hex: '#251B4B', className: 'bg-purple-950' },
        ]}
      />

      <ColorSection
        title="Neutral"
        description="Text, borders, and background elements"
        colors={[
                  { name: '10', hex: '#FCFDFD', className: 'bg-gray-10' },
        { name: '25', hex: '#F8FAFB', className: 'bg-gray-25' },
        { name: '50', hex: '#F1F3F5', className: 'bg-gray-50' },
        { name: '100', hex: '#EBF1F4', className: 'bg-gray-100' },
        { name: '200', hex: '#DBE4EA', className: 'bg-gray-200' },
        { name: '300', hex: '#C4D2DD', className: 'bg-gray-300' },
        { name: '400', hex: '#ACBCCD', className: 'bg-gray-400' },
        { name: '500', hex: '#96A7BE', className: 'bg-gray-500' },
        { name: '600', hex: '#7F8EAC', className: 'bg-gray-600' },
        { name: '700', hex: '#78849E', className: 'bg-gray-700' },
        { name: '800', hex: '#59647A', className: 'bg-gray-800' },
        { name: '900', hex: '#4C5463', className: 'bg-gray-900' },
        { name: '950', hex: '#2C303A', className: 'bg-gray-950' },
        ]}
      />

      <ColorSection
        title="Base Colors"
        description="Pure black and white for high contrast elements"
        colors={[
                  { name: 'White', hex: '#FFFFFF', className: 'bg-white border border-gray-200' },
        { name: 'Black', hex: '#1A1A1A', className: 'bg-black' },
        ]}
      />
    </div>
  ),
} 