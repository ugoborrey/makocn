import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  tsconfig: 'tsconfig.json',
  external: [
    'react',
    'react-dom',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-label',
    '@radix-ui/react-radio-group',
    '@radix-ui/react-select',
    '@radix-ui/react-slot',
    'react-aria-components',
    'lucide-react',
    'cmdk'
  ],
}) 