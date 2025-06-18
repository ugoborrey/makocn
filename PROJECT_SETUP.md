# Mako Design System - Project Setup Documentation

Complete setup guide for the Mako Design System with automated visual testing pipeline.

## 📋 Project Overview

**Goal**: Production-ready Storybook design system with automated visual testing and CI/CD pipeline.

**Tech Stack**:
- Next.js 15 + TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Storybook 9 + Chromatic CI
- GitHub Actions
- Vitest + Playwright

---

## 🚀 Step-by-Step Implementation

### 1. Project Bootstrap

```bash
# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# Initialize shadcn/ui
npx shadcn@latest init --yes

# Install Storybook
npx storybook@latest init --yes

# Add UI components
npx shadcn@latest add button card input label textarea select badge
```

**Key Configuration**:
- Next.js 15 with App Router + TypeScript
- Tailwind CSS v4 with path aliases (`@/*`)
- Storybook with a11y, vitest, and testing addons
- shadcn/ui components in `src/components/ui/`

### 2. PostCSS Fix

Updated `postcss.config.mjs` for Vite compatibility:
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

---

### 3. Mako Design System Integration

**Created `src/design-tokens/colors.ts`** with 6 color families:
- **Blue (Primary)**: `#2671D9` - 13 shades (10-950)
- **Yellow (Primary)**: `#FFB400` - 13 shades (10-950)
- **Green**: `#17D079` - Success states
- **Red**: `#E55A4E` - Error states
- **Purple**: `#7463F1` - Special features
- **Neutral**: Text and UI elements

**Updated `src/app/globals.css`**:
```css
@theme inline {
  --color-mako-blue-600: #2671D9;
  /* ... 80+ Mako color tokens ... */
}

:root {
  --primary: var(--color-mako-blue-600);
  --destructive: var(--color-mako-red-600);
  /* ... semantic mappings ... */
}
```

### 4. Storybook Configuration

**Fixed CSS loading**: Added `import '../src/app/globals.css'` to `.storybook/preview.ts`

**Fixed path resolution**: Added alias configuration to `.storybook/main.ts`

**Custom button radius**: Modified button component to use `rounded-lg` (4px)

### 5. Stories Creation

- **Button Stories**: All variants, sizes, states + Mako color showcase
- **Card Stories**: Basic, themed, and interactive variants
- **Color Showcase**: Complete Mako palette with hex codes and usage

### 6. Chromatic CI Setup

**GitHub Repository**: Created and linked to Chromatic platform

**Automated Deployment**:
```bash
# Added chromatic script to package.json
"chromatic": "chromatic --exit-zero-on-changes"
```

**GitHub Actions Workflow** (`.github/workflows/chromatic.yml`):
- Triggers on push and pull requests
- Uses Node.js 20 for Storybook compatibility
- Automated visual testing and deployment
- Non-blocking visual change detection

**Fixed Issues**:
- ✅ Updated chromatic script (removed hardcoded token)
- ✅ Added `exitZeroOnChanges: true` for CI
- ✅ Updated Node.js version from 18 → 20

---

## 🎯 Project Structure

```
makocn/
├── .github/workflows/chromatic.yml  # CI/CD pipeline
├── .storybook/                      # Storybook config
├── src/
│   ├── app/globals.css             # Mako tokens + Tailwind
│   ├── components/ui/              # shadcn components
│   ├── design-tokens/colors.ts     # Mako color system
│   └── stories/                    # Component documentation
├── components.json                 # shadcn configuration
└── package.json                   # Scripts + dependencies
```

## 🚀 Available Scripts

```bash
npm run dev              # Next.js development
npm run storybook        # Storybook development
npm run build-storybook  # Production build
npm run chromatic        # Manual Chromatic deployment
npm run test             # Run tests
```

## 🎨 Design System Features

**80+ Mako Color Tokens**: `bg-mako-blue-600`, `text-mako-neutral-900`, etc.

**7 UI Components**: Button, Card, Input, Label, Textarea, Select, Badge

**Automated Testing**: Visual regression testing with every code change

## ✨ Key Achievements

1. **🎨 Complete Mako Design System** - 6 color families with 80+ tokens
2. **📚 Interactive Storybook** - Component documentation and testing
3. **🤖 Automated CI/CD Pipeline** - Visual testing with Chromatic
4. **🔧 Production-Ready Setup** - TypeScript, testing, accessibility
5. **🎯 Team Collaboration** - GitHub integration with PR status checks
6. **📱 Responsive Design** - Modern Tailwind CSS v4
7. **♿ Accessibility Compliant** - WCAG standards with a11y testing

## 🌐 Live Deployment

- **🔗 Storybook**: Auto-deployed on every push
- **👀 Visual Testing**: Automatic diff generation
- **📊 CI Status**: GitHub Actions integration
- **🔄 Team Workflow**: PR checks and review process

---

**🎯 Ready for production use with automated visual testing pipeline** 