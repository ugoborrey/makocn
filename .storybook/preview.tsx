import React from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import localFont from 'next/font/local'
import '../src/app/globals.css'

// Load the same font configuration as in layout.tsx
const rubixMC = localFont({
  src: [
    {
      path: '../src/app/fonts/RubixMC-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../src/app/fonts/RubixMC-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../src/app/fonts/RubixMC-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: "--font-rubix-mc",
  display: 'swap',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  
  decorators: [
    (Story) => {
      return (
        <div className={`${rubixMC.variable} font-sans antialiased`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview; 