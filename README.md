# Mako Design System - Rubix Storybook

A comprehensive design system built with **Next.js**, **shadcn/ui**, **Tailwind CSS**, **TypeScript**, and **Storybook** for Rubix, the European leader in B2B industrial supply.

## 🎨 Design System Overview

The Mako design system provides a consistent visual language and component library for Rubix's industrial supply platform. It features:

- **Mako Color Palette**: Custom color tokens aligned with Rubix branding
- **shadcn/ui Components**: Pre-built, accessible components
- **Tailwind CSS Integration**: Utility-first styling with custom design tokens
- **Storybook Documentation**: Interactive component playground and documentation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Start Storybook:
   ```bash
   npm run storybook
   ```

## 🎨 Mako Color System

The Mako design system includes 6 primary color families, each with 13 shades (10-950):

### Primary Colors
- **Blue**: Primary brand color (`#2671D9` - 600)
- **Yellow**: Secondary primary for warnings and highlights (`#FFB400` - 500)

### Secondary Colors
- **Green**: Success states and positive actions (`#17D079` - 500)
- **Red**: Error states and destructive actions (`#E55A4E` - 500)
- **Purple**: Special features and premium content (`#7463F1` - 500)

### Neutral Colors
- **Neutral**: Text, borders, and background elements
- **Black & White**: High contrast elements (`#1A1A1A` and `#FFFFFF`)

### Usage in Tailwind

All Mako colors are available as Tailwind utilities:

```html
<!-- Background colors -->
<div class="bg-mako-blue-500">Primary blue background</div>
<div class="bg-mako-green-100">Light green background</div>

<!-- Text colors -->
<p class="text-mako-neutral-900">Dark text</p>
<p class="text-mako-blue-600">Primary blue text</p>

<!-- Border colors -->
<div class="border-mako-neutral-200">Light border</div>
```

## 📦 Available Components

Current shadcn/ui components integrated with Mako design system:

- **Button**: All variants with Mako color integration
- **Card**: Content containers with flexible layouts
- **Input**: Form input elements
- **Label**: Form labels
- **Textarea**: Multi-line text inputs
- **Select**: Dropdown selections
- **Badge**: Status indicators and tags

## 🛠 Development

### Adding New Components

1. Add shadcn/ui components:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. Create Storybook stories in `src/stories/[ComponentName].stories.tsx`

3. Document component usage and Mako color integration

### Customizing Colors

Update design tokens in `src/design-tokens/colors.ts` and `src/app/globals.css` to modify the color system.

### Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # shadcn/ui components
│   └── ui/                # UI component library
├── design-tokens/         # Mako design system tokens
│   ├── colors.ts         # Color definitions
│   └── index.ts          # Token exports
├── lib/                  # Utility functions
└── stories/              # Storybook stories
    ├── Button.stories.tsx
    ├── Card.stories.tsx
    └── MakoColors.stories.tsx
```

## 📚 Storybook

Storybook provides an interactive environment to:

- Browse all components and their variants
- View the complete Mako color palette
- Test component interactions
- Access component documentation
- Generate visual regression tests

### Available Stories

- **Mako Design System/Colors**: Complete color palette showcase
- **Mako Design System/Button**: Button component with all variants
- **Mako Design System/Card**: Card layouts and color variations

## 🔧 Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run test` - Run Vitest tests
- `npm run lint` - Run ESLint

## 🎯 Design Principles

The Mako design system follows these key principles:

1. **Consistency**: Unified visual language across all components
2. **Accessibility**: WCAG compliant color contrasts and interactions
3. **Scalability**: Flexible system that grows with product needs
4. **Industrial Focus**: Colors and patterns suited for B2B industrial context
5. **Developer Experience**: Easy-to-use utilities and clear documentation

## 🤝 Contributing

1. Follow the established color system and component patterns
2. Document new components in Storybook
3. Ensure accessibility compliance
4. Test across different screen sizes and devices

## 🏢 About Rubix

Rubix is the European leader in B2B industrial supply, providing comprehensive solutions for industrial maintenance, repair, and operations (MRO) needs.

---

Built with ❤️ for the Rubix design team.
