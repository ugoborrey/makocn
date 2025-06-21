import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Combobox } from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A searchable combobox component built with Radix UI Dialog and cmdk. Combines the functionality of a dropdown and a search input.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'The currently selected value',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when no value is selected',
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
    },
    emptyText: {
      control: { type: 'text' },
      description: 'Text shown when no options match the search',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the combobox is disabled',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback fired when the value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'watermelon', label: 'Watermelon' },
  { value: 'orange', label: 'Orange' },
  { value: 'mango', label: 'Mango' },
  { value: 'kiwi', label: 'Kiwi' },
];

export const Default: Story = {
  args: {
    options: fruits,
    placeholder: 'Select a fruit...',
    searchPlaceholder: 'Search fruits...',
    emptyText: 'No fruit found.',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const WithSelectedValue: Story = {
  args: {
    options: fruits,
    placeholder: 'Select a fruit...',
    searchPlaceholder: 'Search fruits...',
    emptyText: 'No fruit found.',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('apple');
    
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    options: fruits,
    placeholder: 'Select a fruit...',
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState<string>('apple');
    
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const CustomWidth: Story = {
  args: {
    options: fruits,
    placeholder: 'Select a fruit...',
    searchPlaceholder: 'Search fruits...',
    emptyText: 'No fruit found.',
    className: 'w-[300px]',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

const programmingLanguages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'cpp', label: 'C++' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'dart', label: 'Dart' },
  { value: 'scala', label: 'Scala' },
  { value: 'r', label: 'R' },
];

export const LongList: Story = {
  args: {
    options: programmingLanguages,
    placeholder: 'Select a programming language...',
    searchPlaceholder: 'Search languages...',
    emptyText: 'No language found.',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const WithSomeDisabledOptions: Story = {
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
      { value: 'blueberry', label: 'Blueberry' },
      { value: 'grapes', label: 'Grapes', disabled: true },
      { value: 'pineapple', label: 'Pineapple' },
      { value: 'strawberry', label: 'Strawberry' },
    ],
    placeholder: 'Select a fruit...',
    searchPlaceholder: 'Search fruits...',
    emptyText: 'No fruit found.',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [country, setCountry] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    
    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
      { value: 'br', label: 'Brazil' },
      { value: 'in', label: 'India' },
      { value: 'cn', label: 'China' },
    ];
    
    return (
      <form className="grid w-full max-w-sm gap-4 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Profile Form</h3>
        
        <div className="space-y-1.5">
          <Label htmlFor="country">Country</Label>
          <Combobox
            value={country}
            onValueChange={setCountry}
            options={countries}
            placeholder="Select your country..."
            searchPlaceholder="Search countries..."
            emptyText="No country found."
            className="w-full"
          />
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="language">Programming Language</Label>
          <Combobox
            value={language}
            onValueChange={setLanguage}
            options={programmingLanguages.slice(0, 8)}
            placeholder="Select your favorite language..."
            searchPlaceholder="Search languages..."
            emptyText="No language found."
            className="w-full"
          />
        </div>
        
        <div className="text-sm text-muted-foreground">
          {country && <p>Selected country: {countries.find(c => c.value === country)?.label}</p>}
          {language && <p>Selected language: {programmingLanguages.find(l => l.value === language)?.label}</p>}
        </div>
      </form>
    );
  },
};

export const Playground: Story = {
  args: {
    options: fruits,
    placeholder: 'Select a fruit...',
    searchPlaceholder: 'Search fruits...',
    emptyText: 'No fruit found.',
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <div className="w-full max-w-sm">
        <Combobox
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <div className="mt-4 text-sm text-muted-foreground">
          Selected value: {value || 'None'}
        </div>
      </div>
    );
  },
}; 