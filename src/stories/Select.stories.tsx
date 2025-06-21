import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Select component from shadcn/ui with Radix UI primitives. Provides a customizable dropdown select with various size and styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label htmlFor="fruit-select">Choose your favorite fruit</Label>
      <Select {...args}>
        <SelectTrigger className="w-[200px]" id="fruit-select">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[320px]">
        <SelectValue placeholder="Select a programming language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue.js</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          <SelectItem value="node">Node.js</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="csharp">C#</SelectItem>
          <SelectItem value="go">Go</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Mobile</SelectLabel>
          <SelectItem value="react-native">React Native</SelectItem>
          <SelectItem value="flutter">Flutter</SelectItem>
          <SelectItem value="swift">Swift</SelectItem>
          <SelectItem value="kotlin">Kotlin</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label htmlFor="disabled-select">Disabled Select</Label>
      <Select disabled {...args}>
        <SelectTrigger className="w-[180px]" id="disabled-select">
          <SelectValue placeholder="Can't select anything" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const DisabledItems: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="available1">Available Option 1</SelectItem>
        <SelectItem value="disabled1" disabled>Disabled Option 1</SelectItem>
        <SelectItem value="available2">Available Option 2</SelectItem>
        <SelectItem value="disabled2" disabled>Disabled Option 2</SelectItem>
        <SelectItem value="available3">Available Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label>Small Size</Label>
        <Select {...args}>
          <SelectTrigger size="sm" className="w-[180px]">
            <SelectValue placeholder="Small select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-1.5">
        <Label>Default Size</Label>
        <Select {...args}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Default select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    
    return (
      <form className="grid w-full max-w-sm gap-4 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Address Form</h3>
        
        <div className="space-y-1.5">
          <Label htmlFor="country">Country</Label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="state">State/Province</Label>
          <Select value={state} onValueChange={setState} disabled={!country}>
            <SelectTrigger id="state">
              <SelectValue placeholder={country ? "Select your state" : "Select country first"} />
            </SelectTrigger>
            <SelectContent>
              {country === 'us' && (
                <>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                </>
              )}
              {country === 'ca' && (
                <>
                  <SelectItem value="on">Ontario</SelectItem>
                  <SelectItem value="qc">Quebec</SelectItem>
                  <SelectItem value="bc">British Columbia</SelectItem>
                  <SelectItem value="ab">Alberta</SelectItem>
                </>
              )}
              {country === 'uk' && (
                <>
                  <SelectItem value="england">England</SelectItem>
                  <SelectItem value="scotland">Scotland</SelectItem>
                  <SelectItem value="wales">Wales</SelectItem>
                  <SelectItem value="ni">Northern Ireland</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>
      </form>
    );
  },
};

export const LongList: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time</SelectItem>
          <SelectItem value="cst">Central Standard Time</SelectItem>
          <SelectItem value="mst">Mountain Standard Time</SelectItem>
          <SelectItem value="pst">Pacific Standard Time</SelectItem>
          <SelectItem value="akst">Alaska Standard Time</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
          <SelectItem value="cet">Central European Time</SelectItem>
          <SelectItem value="eet">Eastern European Time</SelectItem>
          <SelectItem value="wet">Western European Time</SelectItem>
          <SelectItem value="msk">Moscow Time</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="ist">India Standard Time</SelectItem>
          <SelectItem value="cst-china">China Standard Time</SelectItem>
          <SelectItem value="jst">Japan Standard Time</SelectItem>
          <SelectItem value="kst">Korea Standard Time</SelectItem>
          <SelectItem value="ict">Indochina Time</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Australia</SelectLabel>
          <SelectItem value="aest">Australian Eastern Standard Time</SelectItem>
          <SelectItem value="acst">Australian Central Standard Time</SelectItem>
          <SelectItem value="awst">Australian Western Standard Time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithCustomContent: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a team member" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="john">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              J
            </div>
            <span>John Doe</span>
          </div>
        </SelectItem>
        <SelectItem value="jane">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              J
            </div>
            <span>Jane Smith</span>
          </div>
        </SelectItem>
        <SelectItem value="bob">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              B
            </div>
            <span>Bob Johnson</span>
          </div>
        </SelectItem>
        <SelectItem value="alice">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              A
            </div>
            <span>Alice Brown</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}; 