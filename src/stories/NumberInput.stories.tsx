import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NumberInput from '@/components/ui/number-input';

const meta = {
  title: 'UI/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <div className="w-full max-w-sm">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Disabled State</h3>
          <NumberInput disabled={true} />
          <p className="text-xs text-muted-foreground mt-1">
            This number input is disabled
          </p>
        </div>
      </div>
    </div>
  ),
};

export const CustomStep: Story = {
  args: {},
  render: () => (
    <div className="w-full max-w-sm">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Sold in packs of 5</h3>
          <NumberInput 
            defaultValue={5}
            minValue={5}
            step={5}
            autoCorrect={true}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Minimum 5, increments of 5. Try typing 7 and clicking away - it will round to 5.
          </p>
        </div>
      </div>
    </div>
  ),
};


