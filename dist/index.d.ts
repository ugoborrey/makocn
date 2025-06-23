import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ClassValue } from 'clsx';

declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

type AlertVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
interface AlertBannerProps {
    variant?: AlertVariant;
    icon?: React__default.ReactNode;
    title?: string;
    description: string;
    closable?: boolean;
    onClose?: () => void;
    action?: {
        label: string;
        onClick: () => void;
        variant?: 'default' | 'outline' | 'secondary';
    };
    className?: string;
}
declare const AlertBanner: React__default.FC<AlertBannerProps>;

declare function AlertDialog({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Root>): React$1.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Trigger>): React$1.JSX.Element;
declare function AlertDialogPortal({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Portal>): React$1.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Overlay>): React$1.JSX.Element;
interface AlertDialogContentProps extends React$1.ComponentProps<typeof AlertDialogPrimitive.Content> {
    showCloseIcon?: boolean;
}
declare function AlertDialogContent({ className, showCloseIcon, children, ...props }: AlertDialogContentProps): React$1.JSX.Element;
interface AlertDialogHeaderProps extends React$1.ComponentProps<"div"> {
    icon?: React$1.ReactNode;
}
declare function AlertDialogHeader({ className, icon, children, ...props }: AlertDialogHeaderProps): React$1.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Title>): React$1.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Description>): React$1.JSX.Element;
declare function AlertDialogAction({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Action>): React$1.JSX.Element;
declare function AlertDialogCancel({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Cancel>): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "outline" | "secondary" | "tertiary" | "ghost" | null | undefined;
    size?: "default" | "touch" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leadingIcon?: React$1.ReactNode;
    trailingIcon?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
    loadingText?: string;
    rounded?: boolean;
}
declare function Button({ className, variant, size, asChild, leadingIcon, trailingIcon, icon, fullWidth, loading, loadingText, rounded, children, disabled, ...props }: ButtonProps): React$1.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const checkboxVariants: (props?: ({
    size?: "default" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CheckboxProps extends React$1.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxVariants> {
    indeterminate?: boolean;
}
declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild" | "key"> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React$1.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>>, "onChange" | "type" | "value"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild" | "key"> & {
    label?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild" | "key"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild" | "key">, "heading" | "value"> & {
    heading?: React$1.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild" | "key"> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React$1.HTMLAttributes<HTMLDivElement> | "key"> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild" | "key">, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};
interface ComboboxProps {
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    options: Array<{
        value: string;
        label: string;
        disabled?: boolean;
    }>;
    disabled?: boolean;
    className?: string;
}
declare const Combobox: React$1.ForwardRefExoticComponent<ComboboxProps & React$1.RefAttributes<HTMLButtonElement>>;

interface UseFileInputOptions {
    accept?: string;
    maxSize?: number;
}
declare function useFileInput({ accept, maxSize }: UseFileInputOptions): {
    fileName: string;
    error: string;
    fileInputRef: React$1.RefObject<HTMLInputElement | null>;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateAndSetFile: (file: File | undefined) => void;
    clearFile: () => void;
    fileSize: number;
};

interface BasicFileInputProps {
    accept?: string;
    maxSize?: number;
    onFileChange?: (file: File | null, fileName: string, fileSize: number, error?: string) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
}
declare function BasicFileInput({ accept, maxSize, onFileChange, className, disabled, placeholder }: BasicFileInputProps): React$1.JSX.Element;
interface ImageUploaderProps {
    maxSize?: number;
    onFileChange?: (file: File | null, fileName: string, fileSize: number, error?: string) => void;
    className?: string;
    disabled?: boolean;
}
declare function ImageUploader({ maxSize, onFileChange, className, disabled }: ImageUploaderProps): React$1.JSX.Element;
interface DocumentUploaderProps {
    accept?: string;
    maxSize?: number;
    onFileChange?: (file: File | null, fileName: string, fileSize: number, error?: string) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
}
declare function DocumentUploader({ accept, maxSize, onFileChange, className, disabled, placeholder }: DocumentUploaderProps): React$1.JSX.Element;

declare const FileInput: typeof BasicFileInput;

declare const inputVariants: (props?: ({
    size?: "default" | "touch" | "sm" | "lg" | null | undefined;
    state?: "default" | "success" | "warning" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React$1.ComponentProps<"input">, "size">, VariantProps<typeof inputVariants> {
    error?: string | boolean;
    helperText?: string;
}
declare const Input: React$1.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): React$1.JSX.Element;

interface PasswordInputProps extends Omit<React.ComponentProps<"input">, "size" | "type"> {
    size?: "sm" | "default" | "lg" | "touch";
    state?: "default" | "error" | "success" | "warning";
    error?: string | boolean;
    helperText?: string;
    /**
     * Whether the password should be visible by default
     * @default false
     */
    defaultVisible?: boolean;
    /**
     * Controlled visibility state
     */
    visible?: boolean;
    /**
     * Callback when visibility is toggled
     */
    onVisibilityChange?: (visible: boolean) => void;
}
declare const PasswordInput: React$1.ForwardRefExoticComponent<Omit<PasswordInputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Root>): React$1.JSX.Element;
declare const radioGroupItemVariants: (props?: ({
    size?: "default" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface RadioGroupItemProps extends React$1.ComponentProps<typeof RadioGroupPrimitive.Item>, VariantProps<typeof radioGroupItemVariants> {
}
declare function RadioGroupItem({ className, size, ...props }: RadioGroupItemProps): React$1.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): React$1.JSX.Element;
declare function SelectGroup({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Group>): React$1.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Value>): React$1.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default" | "lg" | "touch";
}): React$1.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Content>): React$1.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Label>): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Item>): React$1.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Separator>): React$1.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): React$1.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): React$1.JSX.Element;

type SeparatorAlignment = "left" | "center" | "right";
type SeparatorThickness = "thin" | "thick";
interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    alignment?: SeparatorAlignment;
    width?: "md" | "lg" | "full";
    thickness?: SeparatorThickness;
    className?: string;
}
declare function Separator({ alignment, width, thickness, className, ...props }: SeparatorProps): React__default.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare const makoColors: {
    readonly blue: {
        readonly 10: "#FBFDFE";
        readonly 25: "#F6FAFD";
        readonly 50: "#EEF6FC";
        readonly 100: "#D8ECF8";
        readonly 200: "#BADEF3";
        readonly 300: "#8ACAEA";
        readonly 400: "#56AEE1";
        readonly 500: "#2F8DDA";
        readonly 600: "#2671D9";
        readonly 700: "#265FD9";
        readonly 800: "#204DB6";
        readonly 900: "#19448F";
        readonly 950: "#051E50";
    };
    readonly yellow: {
        readonly 10: "#FFFEF5";
        readonly 25: "#FFFEF0";
        readonly 50: "#FFFEEA";
        readonly 100: "#FFF9C5";
        readonly 200: "#FFF285";
        readonly 300: "#FFE546";
        readonly 400: "#FFD700";
        readonly 500: "#FFB400";
        readonly 600: "#E28A00";
        readonly 700: "#BB6002";
        readonly 800: "#984A08";
        readonly 900: "#7C3D0B";
        readonly 950: "#481F00";
    };
    readonly green: {
        readonly 10: "#FAFFFC";
        readonly 25: "#F5FEFA";
        readonly 50: "#EFFEF6";
        readonly 100: "#DBFBEC";
        readonly 200: "#BAF7DA";
        readonly 300: "#84F1BD";
        readonly 400: "#3EEA99";
        readonly 500: "#17D079";
        readonly 600: "#00C66A";
        readonly 700: "#009550";
        readonly 800: "#007B43";
        readonly 900: "#00673A";
        readonly 950: "#00341E";
    };
    readonly red: {
        readonly 10: "#FEFBFB";
        readonly 25: "#FEF7F6";
        readonly 50: "#FDF4F3";
        readonly 100: "#FCE6E4";
        readonly 200: "#FBD1CD";
        readonly 300: "#F7B0AA";
        readonly 400: "#F08379";
        readonly 500: "#E55A4E";
        readonly 600: "#D23D30";
        readonly 700: "#BA3327";
        readonly 800: "#922B22";
        readonly 900: "#792A23";
        readonly 950: "#42110D";
    };
    readonly purple: {
        readonly 10: "#FAFBFF";
        readonly 25: "#F5F6FF";
        readonly 50: "#EEF0FF";
        readonly 100: "#E0E3FF";
        readonly 200: "#C7CAFE";
        readonly 300: "#A5A8FC";
        readonly 400: "#8781F8";
        readonly 500: "#7463F1";
        readonly 600: "#6748E5";
        readonly 700: "#5838CA";
        readonly 800: "#4730A3";
        readonly 900: "#3D2E81";
        readonly 950: "#251B4B";
    };
    readonly neutral: {
        readonly 10: "#FCFDFD";
        readonly 25: "#F8FAFB";
        readonly 50: "#F1F3F5";
        readonly 100: "#EBF1F4";
        readonly 200: "#DBE4EA";
        readonly 300: "#C4D2DD";
        readonly 400: "#ACBCCD";
        readonly 500: "#96A7BE";
        readonly 600: "#7F8EAC";
        readonly 700: "#78849E";
        readonly 800: "#59647A";
        readonly 900: "#4C5463";
        readonly 950: "#2C303A";
    };
    readonly black: "#1A1A1A";
    readonly white: "#FFFFFF";
    readonly primary: {
        readonly 10: "#FBFDFE";
        readonly 25: "#F6FAFD";
        readonly 50: "#EEF6FC";
        readonly 100: "#D8ECF8";
        readonly 200: "#BADEF3";
        readonly 300: "#8ACAEA";
        readonly 400: "#56AEE1";
        readonly 500: "#2F8DDA";
        readonly 600: "#2671D9";
        readonly 700: "#265FD9";
        readonly 800: "#204DB6";
        readonly 900: "#19448F";
        readonly 950: "#051E50";
    };
    readonly success: {
        readonly 10: "#FAFFFC";
        readonly 25: "#F5FEFA";
        readonly 50: "#EFFEF6";
        readonly 100: "#DBFBEC";
        readonly 200: "#BAF7DA";
        readonly 300: "#84F1BD";
        readonly 400: "#3EEA99";
        readonly 500: "#17D079";
        readonly 600: "#00C66A";
        readonly 700: "#009550";
        readonly 800: "#007B43";
        readonly 900: "#00673A";
        readonly 950: "#00341E";
    };
    readonly warning: {
        readonly 10: "#FFFEF5";
        readonly 25: "#FFFEF0";
        readonly 50: "#FFFEEA";
        readonly 100: "#FFF9C5";
        readonly 200: "#FFF285";
        readonly 300: "#FFE546";
        readonly 400: "#FFD700";
        readonly 500: "#FFB400";
        readonly 600: "#E28A00";
        readonly 700: "#BB6002";
        readonly 800: "#984A08";
        readonly 900: "#7C3D0B";
        readonly 950: "#481F00";
    };
    readonly error: {
        readonly 10: "#FEFBFB";
        readonly 25: "#FEF7F6";
        readonly 50: "#FDF4F3";
        readonly 100: "#FCE6E4";
        readonly 200: "#FBD1CD";
        readonly 300: "#F7B0AA";
        readonly 400: "#F08379";
        readonly 500: "#E55A4E";
        readonly 600: "#D23D30";
        readonly 700: "#BA3327";
        readonly 800: "#922B22";
        readonly 900: "#792A23";
        readonly 950: "#42110D";
    };
    readonly info: {
        readonly 10: "#FBFDFE";
        readonly 25: "#F6FAFD";
        readonly 50: "#EEF6FC";
        readonly 100: "#D8ECF8";
        readonly 200: "#BADEF3";
        readonly 300: "#8ACAEA";
        readonly 400: "#56AEE1";
        readonly 500: "#2F8DDA";
        readonly 600: "#2671D9";
        readonly 700: "#265FD9";
        readonly 800: "#204DB6";
        readonly 900: "#19448F";
        readonly 950: "#051E50";
    };
};
type MakoColorScale = typeof makoColors.blue;
type MakoColorToken = keyof typeof makoColors;

declare function cn(...inputs: ClassValue[]): string;

export { Alert, AlertBanner, type AlertBannerProps, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, Badge, BasicFileInput, type BasicFileInputProps, Button, type ButtonProps, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, type CheckboxProps, Combobox, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, DocumentUploader, type DocumentUploaderProps, FileInput, ImageUploader, type ImageUploaderProps, Input, type InputProps, Label, type MakoColorScale, type MakoColorToken, PasswordInput, type PasswordInputProps, RadioGroup, RadioGroupItem, type RadioGroupItemProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, type SeparatorAlignment, type SeparatorProps, type SeparatorThickness, Textarea, badgeVariants, buttonVariants, cn, inputVariants, makoColors, useFileInput };
