import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "../components/ui/separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A clean separator component that creates yellow accent lines underneath big titles.
Perfect for adding visual emphasis to main headings and section titles.

## Features

- **Single Yellow Accent**: Clean yellow line using standard colors
- **Flexible Alignment**: Left, center, or right alignment  
- **Multiple Widths**: Medium (64px), Large (96px), or Full width
- **Accessible**: Includes proper ARIA attributes for screen readers
- **Customizable**: Accepts custom classes for additional styling

## Usage Examples

\`\`\`tsx
// Basic separator under a title
<h1>My Title</h1>
<Separator />

// Centered accent line
<h2>Section Title</h2>  
<Separator alignment="center" width="lg" />

// Thin separator
<Separator thickness="thin" width="lg" />

// Full-width thick separator
<Separator thickness="thick" width="full" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Horizontal alignment of the separator",
    },
    width: {
      control: "select",
      options: ["md", "lg", "full"],
      description: "Width of the separator",
    },
    thickness: {
      control: "select",
      options: ["thin", "thick"],
      description: "Thickness of the separator",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {},
};



export const Widths: Story = {
  render: function Render() {
    return (
      <div className="w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-3">Medium Width (64px)</h2>
          <Separator width="md" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3">Large Width (96px)</h2>
          <Separator width="lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3">Full Width</h2>
          <Separator width="full" />
        </div>
      </div>
    );
  },
};

export const Thickness: Story = {
  render: function Render() {
    return (
      <div className="w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-3">Thin Separator (4px)</h2>
          <Separator thickness="thin" width="lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3">Thick Separator (8px)</h2>
          <Separator thickness="thick" width="lg" />
        </div>
      </div>
    );
  },
};

export const Alignments: Story = {
  render: function Render() {
    return (
      <div className="w-full space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold mb-3">Left Aligned Title</h1>
          <Separator alignment="left" width="lg" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-3">Center Aligned Title</h1>
          <Separator alignment="center" width="lg" />
        </div>
        <div className="text-right">
          <h1 className="text-4xl font-extrabold mb-3">Right Aligned Title</h1>
          <Separator alignment="right" width="lg" />
        </div>
      </div>
    );
  },
};

export const WithTitles: Story = {
  render: function Render() {
    return (
      <div className="w-full space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Main Title</h1>
          <Separator width="lg" />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Centered Section</h2>
          <Separator alignment="center" width="md" />
        </div>
        <div className="text-right">
          <h3 className="text-2xl font-bold mb-2">Right Aligned Title</h3>
          <Separator alignment="right" width="md" />
        </div>
      </div>
    );
  },
};