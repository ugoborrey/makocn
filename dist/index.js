"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  AlertBanner: () => AlertBanner,
  AlertDescription: () => AlertDescription,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Badge: () => Badge,
  BasicFileInput: () => BasicFileInput,
  Button: () => Button,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Combobox: () => Combobox,
  Command: () => Command,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  DocumentUploader: () => DocumentUploader,
  FileInput: () => FileInput,
  ImageUploader: () => ImageUploader,
  Input: () => Input,
  Label: () => Label,
  PasswordInput: () => PasswordInput,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator2,
  Textarea: () => Textarea,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  inputVariants: () => inputVariants,
  makoColors: () => makoColors,
  useFileInput: () => useFileInput
});
module.exports = __toCommonJS(index_exports);
var import_styles = require("./styles.css");

// src/components/ui/alert.tsx
var React2 = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/alert.tsx
var alertVariants = (0, import_class_variance_authority.cva)(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React2.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
});
Alert.displayName = "Alert";
var AlertDescription = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React2.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";

// src/components/ui/alert-banner.tsx
var import_react = __toESM(require("react"));

// src/components/ui/button.tsx
var React3 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium transition-all cursor-pointer disabled:cursor-not-allowed disabled:hover:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-[var(--radius-lg)]",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 rounded-[var(--radius-lg)]",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 rounded-[var(--radius-lg)]",
        secondary: "border border-blue-700 text-blue-700 bg-transparent shadow-xs hover:bg-blue-50 rounded-[var(--radius-lg)]",
        tertiary: "bg-yellow-400 text-yellow-950 shadow-xs hover:bg-yellow-500 rounded-[var(--radius-lg)]",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-[var(--radius-lg)]",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        lg: "h-12 px-6 has-[>svg]:px-4 text-lg",
        touch: "h-11 px-6 has-[>svg]:px-4",
        icon: "size-9 p-0 gap-0 [&_svg]:size-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false,
    leadingIcon,
    trailingIcon,
    icon,
    fullWidth = false,
    loading = false,
    loadingText,
    rounded = false,
    children,
    disabled
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild",
    "leadingIcon",
    "trailingIcon",
    "icon",
    "fullWidth",
    "loading",
    "loadingText",
    "rounded",
    "children",
    "disabled"
  ]);
  const Comp = asChild ? import_react_slot.Slot : "button";
  const isIconOnly = icon !== void 0;
  const effectiveSize = isIconOnly && size !== "icon" ? "icon" : size;
  const isDisabled = disabled || loading;
  const displayText = loading && loadingText ? loadingText : children;
  const effectiveLeadingIcon = loading ? /* @__PURE__ */ React3.createElement(import_lucide_react.Loader2, { className: "animate-spin" }) : leadingIcon;
  const buttonClasses = cn(
    buttonVariants({ variant, size: effectiveSize }),
    fullWidth && "w-full",
    rounded && "rounded-full",
    className
  );
  if (asChild) {
    return /* @__PURE__ */ React3.createElement(
      import_react_slot.Slot,
      __spreadValues({
        "data-slot": "button",
        className: buttonClasses
      }, props),
      isIconOnly ? icon : /* @__PURE__ */ React3.createElement(React3.Fragment, null, effectiveLeadingIcon && /* @__PURE__ */ React3.createElement("span", { className: "inline-flex items-center" }, effectiveLeadingIcon), displayText, trailingIcon && !loading && /* @__PURE__ */ React3.createElement("span", { className: "inline-flex items-center" }, trailingIcon))
    );
  }
  return /* @__PURE__ */ React3.createElement(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: buttonClasses,
      disabled: isDisabled
    }, props),
    isIconOnly ? icon : /* @__PURE__ */ React3.createElement(React3.Fragment, null, effectiveLeadingIcon && /* @__PURE__ */ React3.createElement("span", { className: "inline-flex items-center" }, effectiveLeadingIcon), displayText, trailingIcon && !loading && /* @__PURE__ */ React3.createElement("span", { className: "inline-flex items-center" }, trailingIcon))
  );
}

// src/components/ui/alert-banner.tsx
var import_lucide_react2 = require("lucide-react");
var variantConfig = {
  default: {
    className: "border-gray-200 bg-gray-50 text-gray-900",
    icon: /* @__PURE__ */ import_react.default.createElement(import_lucide_react2.Info, { className: "h-5 w-5 text-gray-600" })
  },
  success: {
    className: "border-green-200 bg-green-50 text-green-900",
    icon: /* @__PURE__ */ import_react.default.createElement(import_lucide_react2.CheckCircle, { className: "h-5 w-5 text-green-600" })
  },
  warning: {
    className: "border-yellow-200 bg-yellow-50 text-yellow-900",
    icon: /* @__PURE__ */ import_react.default.createElement(import_lucide_react2.AlertTriangle, { className: "h-5 w-5 text-yellow-600" })
  },
  error: {
    className: "border-red-200 bg-red-50 text-red-900",
    icon: /* @__PURE__ */ import_react.default.createElement(import_lucide_react2.AlertCircle, { className: "h-5 w-5 text-red-600" })
  },
  info: {
    className: "border-blue-200 bg-blue-50 text-blue-900",
    icon: /* @__PURE__ */ import_react.default.createElement(import_lucide_react2.Info, { className: "h-5 w-5 text-blue-600" })
  }
};
var AlertBanner = ({
  variant = "default",
  icon,
  title,
  description,
  closable = false,
  onClose,
  action,
  className = ""
}) => {
  const config = variantConfig[variant];
  const displayIcon = icon || config.icon;
  return /* @__PURE__ */ import_react.default.createElement(Alert, { className: `relative ${config.className} ${className}` }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-shrink-0 mt-0.5" }, displayIcon), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 min-w-0" }, title && /* @__PURE__ */ import_react.default.createElement("div", { className: "font-semibold text-sm mb-1" }, title), /* @__PURE__ */ import_react.default.createElement(AlertDescription, { className: "text-sm leading-relaxed" }, description)), action && /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-shrink-0 ml-3" }, /* @__PURE__ */ import_react.default.createElement(
    Button,
    {
      size: "sm",
      variant: action.variant || "outline",
      onClick: action.onClick
    },
    action.label
  )), closable && /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-shrink-0 ml-2" }, /* @__PURE__ */ import_react.default.createElement(
    Button,
    {
      variant: "ghost",
      size: "sm",
      onClick: onClose,
      className: "h-6 w-6 p-0 hover:bg-black/5",
      "aria-label": "Close alert",
      icon: /* @__PURE__ */ import_react.default.createElement(import_lucide_react2.X, { className: "h-4 w-4" })
    }
  ))));
};

// src/components/ui/alert-dialog.tsx
var React5 = __toESM(require("react"));
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_lucide_react3 = require("lucide-react");
function AlertDialog(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Root, __spreadValues({ "data-slot": "alert-dialog" }, props));
}
function AlertDialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Trigger, __spreadValues({ "data-slot": "alert-dialog-trigger" }, props));
}
function AlertDialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Portal, __spreadValues({ "data-slot": "alert-dialog-portal" }, props));
}
function AlertDialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Overlay,
    __spreadValues({
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function AlertDialogContent(_a) {
  var _b = _a, {
    className,
    showCloseIcon = false,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "showCloseIcon",
    "children"
  ]);
  return /* @__PURE__ */ React5.createElement(AlertDialogPortal, null, /* @__PURE__ */ React5.createElement(AlertDialogOverlay, null), /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Content,
    __spreadValues({
      "data-slot": "alert-dialog-content",
      className: cn(
        // Base desktop styles (preserve original behavior)
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border p-6 shadow-lg duration-200 sm:max-w-lg",
        // Mobile override: Bottom sheet
        "max-sm:bottom-0 max-sm:top-auto max-sm:left-0 max-sm:right-0 max-sm:translate-x-0 max-sm:translate-y-0 max-sm:max-w-none max-sm:rounded-t-2xl max-sm:rounded-b-none max-sm:data-[state=closed]:zoom-out-100 max-sm:data-[state=open]:zoom-in-100 max-sm:data-[state=closed]:slide-out-to-bottom max-sm:data-[state=open]:slide-in-from-bottom",
        className
      )
    }, props),
    children,
    showCloseIcon && /* @__PURE__ */ React5.createElement(AlertDialogPrimitive.Cancel, { asChild: true }, /* @__PURE__ */ React5.createElement(
      Button,
      {
        variant: "ghost",
        size: "icon",
        icon: /* @__PURE__ */ React5.createElement(import_lucide_react3.X, { className: "h-4 w-4" }),
        className: "absolute right-4 top-4",
        "aria-label": "Close dialog"
      }
    ))
  ));
}
function AlertDialogHeader(_a) {
  var _b = _a, {
    className,
    icon,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "icon",
    "children"
  ]);
  return /* @__PURE__ */ React5.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-left", className)
    }, props),
    icon && /* @__PURE__ */ React5.createElement("div", { className: "flex items-center justify-center w-12 h-12 mb-1 rounded-full bg-muted" }, icon),
    children
  );
}
function AlertDialogFooter(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    "div",
    __spreadValues({
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )
    }, props)
  );
}
function AlertDialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Title,
    __spreadValues({
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className)
    }, props)
  );
}
function AlertDialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Description,
    __spreadValues({
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-base", className)
    }, props)
  );
}
function AlertDialogAction(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Action,
    __spreadValues({
      className: cn(buttonVariants(), className)
    }, props)
  );
}
function AlertDialogCancel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    AlertDialogPrimitive.Cancel,
    __spreadValues({
      className: cn(buttonVariants({ variant: "outline" }), className)
    }, props)
  );
}

// src/components/ui/badge.tsx
var React6 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
var badgeVariants = (0, import_class_variance_authority3.cva)(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, {
    className,
    variant,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "asChild"
  ]);
  const Comp = asChild ? import_react_slot2.Slot : "span";
  return /* @__PURE__ */ React6.createElement(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}

// src/components/ui/card.tsx
var React7 = __toESM(require("react"));
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props)
  );
}

// src/components/ui/checkbox.tsx
var React8 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react4 = require("lucide-react");
var import_class_variance_authority4 = require("class-variance-authority");
var checkboxVariants = (0, import_class_variance_authority4.cva)(
  "peer shrink-0 flex-none border border-input bg-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary block",
  {
    variants: {
      size: {
        default: "h-5 w-5 min-h-5 min-w-5 max-h-5 max-w-5",
        // 20x20px fixed
        lg: "h-6 w-6 min-h-6 min-w-6 max-h-6 max-w-6"
        // 24x24px fixed
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var Checkbox = React8.forwardRef((_a, ref) => {
  var _b = _a, { className, size, indeterminate, onCheckedChange, checked } = _b, props = __objRest(_b, ["className", "size", "indeterminate", "onCheckedChange", "checked"]);
  const handleCheckedChange = (newChecked) => {
    if (indeterminate) {
      onCheckedChange == null ? void 0 : onCheckedChange(true);
    } else {
      onCheckedChange == null ? void 0 : onCheckedChange(newChecked);
    }
  };
  return /* @__PURE__ */ React8.createElement(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        checkboxVariants({ size }),
        "rounded-[4px] box-border",
        // 4px border radius with consistent box-sizing
        className
      )
    }, props), {
      checked: indeterminate ? "indeterminate" : checked,
      onCheckedChange: handleCheckedChange
    }),
    /* @__PURE__ */ React8.createElement(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current")
      },
      indeterminate ? /* @__PURE__ */ React8.createElement(import_lucide_react4.Minus, { className: cn(size === "lg" ? "h-5 w-5" : "h-4 w-4") }) : /* @__PURE__ */ React8.createElement(import_lucide_react4.Check, { className: cn(size === "lg" ? "h-5 w-5" : "h-4 w-4") })
    )
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/combobox.tsx
var React9 = __toESM(require("react"));
var import_lucide_react5 = require("lucide-react");
var import_cmdk = require("cmdk");
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var Command = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    import_cmdk.Command,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "" }, /* @__PURE__ */ React9.createElement(import_lucide_react5.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ React9.createElement(
    import_cmdk.Command.Input,
    __spreadValues({
      ref,
      className: cn(
        "flex h-11 w-full rounded-lg bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  ));
});
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    import_cmdk.Command.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
    }, props)
  );
});
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React9.forwardRef((props, ref) => /* @__PURE__ */ React9.createElement(
  import_cmdk.Command.Empty,
  __spreadValues({
    ref,
    className: "py-6 text-center text-sm"
  }, props)
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    import_cmdk.Command.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    import_cmdk.Command.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React9.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React9.createElement(
    import_cmdk.Command.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
        className
      )
    }, props)
  );
});
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
CommandShortcut.displayName = "CommandShortcut";
var Combobox = React9.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      value,
      onValueChange,
      placeholder = "Select option...",
      searchPlaceholder = "Search options...",
      emptyText = "No option found.",
      options = [],
      disabled = false,
      className
    } = _b, props = __objRest(_b, [
      "value",
      "onValueChange",
      "placeholder",
      "searchPlaceholder",
      "emptyText",
      "options",
      "disabled",
      "className"
    ]);
    const [open, setOpen] = React9.useState(false);
    const [searchValue, setSearchValue] = React9.useState("");
    const selectedOption = options.find((option) => option.value === value);
    const filteredOptions = options.filter(
      (option) => option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    return /* @__PURE__ */ React9.createElement(DialogPrimitive.Root, { open, onOpenChange: setOpen }, /* @__PURE__ */ React9.createElement(DialogPrimitive.Trigger, { asChild: true }, /* @__PURE__ */ React9.createElement(
      Button,
      __spreadValues({
        ref,
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        disabled,
        className: cn(
          "w-[200px] justify-between",
          !value && "text-muted-foreground",
          className
        )
      }, props),
      selectedOption ? selectedOption.label : placeholder,
      /* @__PURE__ */ React9.createElement(import_lucide_react5.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
    )), /* @__PURE__ */ React9.createElement(DialogPrimitive.Portal, null, /* @__PURE__ */ React9.createElement(
      DialogPrimitive.Content,
      {
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          "w-[200px] p-0"
        ),
        onPointerDownOutside: (e) => {
          e.preventDefault();
          setOpen(false);
        }
      },
      /* @__PURE__ */ React9.createElement(Command, null, /* @__PURE__ */ React9.createElement(
        CommandInput,
        {
          placeholder: searchPlaceholder,
          value: searchValue,
          onValueChange: setSearchValue
        }
      ), /* @__PURE__ */ React9.createElement(CommandList, null, /* @__PURE__ */ React9.createElement(CommandEmpty, null, emptyText), /* @__PURE__ */ React9.createElement(CommandGroup, null, filteredOptions.map((option) => /* @__PURE__ */ React9.createElement(
        CommandItem,
        {
          key: option.value,
          value: option.value,
          disabled: option.disabled,
          onSelect: (currentValue) => {
            onValueChange == null ? void 0 : onValueChange(currentValue === value ? "" : currentValue);
            setOpen(false);
            setSearchValue("");
          }
        },
        /* @__PURE__ */ React9.createElement(
          import_lucide_react5.Check,
          {
            className: cn(
              "mr-2 h-4 w-4",
              value === option.value ? "opacity-100" : "opacity-0"
            )
          }
        ),
        option.label
      )))))
    )));
  }
);
Combobox.displayName = "Combobox";

// src/hooks/use-file-input.tsx
var import_react2 = require("react");
function useFileInput({ accept, maxSize }) {
  const [fileName, setFileName] = (0, import_react2.useState)("");
  const [error, setError] = (0, import_react2.useState)("");
  const fileInputRef = (0, import_react2.useRef)(null);
  const [fileSize, setFileSize] = (0, import_react2.useState)(0);
  const handleFileSelect = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    validateAndSetFile(file);
  };
  const validateAndSetFile = (file) => {
    setError("");
    if (file) {
      if (maxSize && file.size > maxSize * 1024 * 1024) {
        setError(`File size must be less than ${maxSize}MB`);
        return;
      }
      if (accept && !file.type.match(accept.replace("/*", "/"))) {
        setError(`File type must be ${accept}`);
        return;
      }
      setFileSize(file.size);
      setFileName(file.name);
    }
  };
  const clearFile = () => {
    setFileName("");
    setError("");
    setFileSize(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return {
    fileName,
    error,
    fileInputRef,
    handleFileSelect,
    validateAndSetFile,
    clearFile,
    fileSize
  };
}

// src/components/ui/file-input.tsx
var import_lucide_react6 = require("lucide-react");
function BasicFileInput({
  accept,
  maxSize,
  onFileChange,
  className,
  disabled,
  placeholder = "Select File"
}) {
  const {
    fileName,
    error,
    fileInputRef,
    handleFileSelect,
    clearFile,
    fileSize
  } = useFileInput({
    accept,
    maxSize
  });
  const handleChange = (e) => {
    var _a;
    handleFileSelect(e);
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
    onFileChange == null ? void 0 : onFileChange(file, fileName, fileSize, error);
  };
  const handleClear = () => {
    clearFile();
    onFileChange == null ? void 0 : onFileChange(null, "", 0);
  };
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-4", className) }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 items-center" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => {
        var _a;
        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
      },
      variant: "outline",
      disabled,
      className: "relative"
    },
    /* @__PURE__ */ React.createElement(import_lucide_react6.Upload, { className: "h-4 w-4 mr-2" }),
    placeholder
  ), fileName && /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: handleClear,
      variant: "ghost",
      size: "sm",
      className: "h-8"
    },
    /* @__PURE__ */ React.createElement(import_lucide_react6.X, { className: "h-4 w-4 mr-1" }),
    "Clear"
  )), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      className: "absolute invisible pointer-events-none",
      style: { display: "none" },
      ref: fileInputRef,
      onChange: handleChange,
      accept,
      disabled
    }
  ), fileName && /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, "Selected: ", fileName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, "Size: ", (fileSize / (1024 * 1024)).toFixed(2), "MB")), error && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-destructive" }, error));
}
function ImageUploader({
  maxSize = 5,
  onFileChange,
  className,
  disabled
}) {
  const {
    fileName,
    error,
    fileInputRef,
    handleFileSelect,
    fileSize,
    clearFile
  } = useFileInput({
    accept: "image/*",
    maxSize
  });
  const handleChange = (e) => {
    var _a;
    handleFileSelect(e);
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
    onFileChange == null ? void 0 : onFileChange(file, fileName, fileSize, error);
  };
  const handleClear = () => {
    clearFile();
    onFileChange == null ? void 0 : onFileChange(null, "", 0);
  };
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-4", className) }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 items-center" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => {
        var _a;
        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
      },
      variant: "outline",
      disabled
    },
    /* @__PURE__ */ React.createElement(import_lucide_react6.Image, { className: "h-4 w-4 mr-2" }),
    "Select Image"
  ), fileName && /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: handleClear,
      variant: "ghost",
      size: "sm",
      className: "h-8"
    },
    /* @__PURE__ */ React.createElement(import_lucide_react6.X, { className: "h-4 w-4 mr-1" }),
    "Clear"
  )), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      accept: "image/*",
      className: "absolute invisible pointer-events-none",
      style: { display: "none" },
      ref: fileInputRef,
      onChange: handleChange,
      disabled
    }
  ), fileName && /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, "Selected: ", fileName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, "Size: ", (fileSize / (1024 * 1024)).toFixed(2), "MB")), error && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-destructive" }, error));
}
function DocumentUploader({
  accept = ".pdf,.doc,.docx",
  maxSize = 10,
  onFileChange,
  className,
  disabled,
  placeholder = "Click to upload or drag and drop"
}) {
  const {
    fileName,
    error,
    fileInputRef,
    handleFileSelect,
    clearFile,
    fileSize
  } = useFileInput({
    accept,
    maxSize
  });
  const handleChange = (e) => {
    var _a;
    handleFileSelect(e);
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
    onFileChange == null ? void 0 : onFileChange(file, fileName, fileSize, error);
  };
  const handleClear = (e) => {
    e.stopPropagation();
    clearFile();
    onFileChange == null ? void 0 : onFileChange(null, "", 0);
  };
  const getAcceptDescription = () => {
    if (accept.includes("pdf") && accept.includes("doc")) {
      return `PDF, DOC up to ${maxSize}MB`;
    }
    if (accept.includes("pdf")) {
      return `PDF up to ${maxSize}MB`;
    }
    return `Documents up to ${maxSize}MB`;
  };
  return /* @__PURE__ */ React.createElement("div", { className: cn("space-y-4", className) }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
        "hover:border-primary/50 cursor-pointer",
        error && "border-destructive",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "hover:bg-muted/30"
      ),
      onClick: () => {
        var _a;
        return !disabled && ((_a = fileInputRef.current) == null ? void 0 : _a.click());
      }
    },
    fileName ? /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement(import_lucide_react6.File, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium" }, fileName)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted-foreground" }, (fileSize / (1024 * 1024)).toFixed(1), " MB"), /* @__PURE__ */ React.createElement(
      Button,
      {
        onClick: handleClear,
        variant: "ghost",
        size: "sm",
        disabled
      },
      /* @__PURE__ */ React.createElement(import_lucide_react6.X, { className: "h-4 w-4 mr-1" }),
      "Remove"
    )) : /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(import_lucide_react6.Upload, { className: "h-8 w-8 mx-auto text-muted-foreground" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, placeholder), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted-foreground mt-1" }, getAcceptDescription())))
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      accept,
      className: "absolute invisible pointer-events-none",
      style: { display: "none" },
      ref: fileInputRef,
      onChange: handleChange,
      disabled
    }
  ), error && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-destructive" }, error));
}
var FileInput = BasicFileInput;

// src/components/ui/input.tsx
var React10 = __toESM(require("react"));
var import_class_variance_authority5 = require("class-variance-authority");
var inputVariants = (0, import_class_variance_authority5.cva)(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-base file:font-medium disabled:cursor-not-allowed disabled:hover:cursor-not-allowed disabled:opacity-50 placeholder:text-base",
  {
    variants: {
      size: {
        sm: "h-8 px-3 py-1 text-sm placeholder:text-sm file:text-sm file:h-6",
        default: "h-10 px-4 py-2 text-base placeholder:text-base file:text-base file:h-7",
        lg: "h-12 px-6 py-3 text-lg placeholder:text-lg file:text-lg file:h-8",
        touch: "h-11 px-6 py-3 text-base placeholder:text-base file:text-base file:h-7"
      },
      state: {
        default: "",
        error: "border-destructive aria-invalid:border-destructive",
        success: "border-green-700 dark:border-green-400",
        warning: "border-yellow-600 dark:border-yellow-400"
      }
    },
    defaultVariants: {
      size: "default",
      state: "default"
    }
  }
);
var helperTextVariants = (0, import_class_variance_authority5.cva)(
  "text-sm font-medium mt-1.5 transition-colors",
  {
    variants: {
      state: {
        default: "text-muted-foreground",
        error: "text-destructive",
        success: "text-green-700 dark:text-green-400",
        warning: "text-yellow-700 dark:text-yellow-400"
      }
    },
    defaultVariants: {
      state: "default"
    }
  }
);
var Input = React10.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type, size, state, error, helperText } = _b, props = __objRest(_b, ["className", "type", "size", "state", "error", "helperText"]);
    const actualState = error ? "error" : state || "default";
    const displayHelperText = error && typeof error === "string" ? error : helperText;
    return /* @__PURE__ */ React10.createElement("div", { className: "w-full" }, /* @__PURE__ */ React10.createElement(
      "input",
      __spreadValues({
        type,
        "data-slot": "input",
        ref,
        "aria-invalid": actualState === "error",
        className: cn(
          inputVariants({ size, state: actualState }),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          actualState === "error" && "focus-visible:border-destructive focus-visible:ring-destructive/20",
          actualState === "success" && "focus-visible:border-green-500 focus-visible:ring-green-500/20",
          actualState === "warning" && "focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20",
          className
        )
      }, props)
    ), displayHelperText && /* @__PURE__ */ React10.createElement("p", { className: cn(helperTextVariants({ state: actualState })) }, displayHelperText));
  }
);
Input.displayName = "Input";

// src/components/ui/label.tsx
var React11 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
function Label(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React11.createElement(
    LabelPrimitive.Root,
    __spreadValues({
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 leading-none font-medium select-none cursor-pointer group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )
    }, props)
  );
}

// src/components/ui/number-input.tsx
var import_lucide_react7 = require("lucide-react");
var import_react_aria_components = require("react-aria-components");
var import_react3 = require("react");

// src/components/ui/password-input.tsx
var import_lucide_react8 = require("lucide-react");
var import_react4 = require("react");
var import_class_variance_authority6 = require("class-variance-authority");
var helperTextVariants2 = (0, import_class_variance_authority6.cva)(
  "text-sm font-medium mt-1.5 transition-colors",
  {
    variants: {
      state: {
        default: "text-muted-foreground",
        error: "text-destructive",
        success: "text-green-700 dark:text-green-400",
        warning: "text-yellow-700 dark:text-yellow-400"
      }
    },
    defaultVariants: {
      state: "default"
    }
  }
);
var PasswordInput = (0, import_react4.forwardRef)((_a, ref) => {
  var _b = _a, {
    className,
    size = "default",
    state,
    error,
    helperText,
    defaultVisible = false,
    visible: controlledVisible,
    onVisibilityChange
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "state",
    "error",
    "helperText",
    "defaultVisible",
    "visible",
    "onVisibilityChange"
  ]);
  const id = (0, import_react4.useId)();
  const [internalVisible, setInternalVisible] = (0, import_react4.useState)(defaultVisible);
  const isVisible = controlledVisible !== void 0 ? controlledVisible : internalVisible;
  const actualState = error ? "error" : state || "default";
  const displayHelperText = error && typeof error === "string" ? error : helperText;
  const toggleVisibility = () => {
    const newVisible = !isVisible;
    if (controlledVisible === void 0) {
      setInternalVisible(newVisible);
    }
    onVisibilityChange == null ? void 0 : onVisibilityChange(newVisible);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "w-full" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "input",
    __spreadValues({
      ref,
      id,
      type: isVisible ? "text" : "password",
      "data-slot": "input",
      "aria-invalid": actualState === "error",
      className: cn(
        inputVariants({ size, state: actualState }),
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] pe-9",
        actualState === "error" && "focus-visible:border-destructive focus-visible:ring-destructive/20",
        actualState === "success" && "focus-visible:border-green-500 focus-visible:ring-green-500/20",
        actualState === "warning" && "focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20",
        className
      )
    }, props)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: cn(
        "absolute top-0 end-0 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        size === "sm" && "h-8",
        size === "default" && "h-10",
        size === "lg" && "h-12",
        size === "touch" && "h-11"
      ),
      type: "button",
      onClick: toggleVisibility,
      "aria-label": isVisible ? "Hide password" : "Show password",
      "aria-pressed": isVisible,
      "aria-controls": id
    },
    isVisible ? /* @__PURE__ */ React.createElement(import_lucide_react8.EyeOff, { size: 16, strokeWidth: 2, "aria-hidden": "true" }) : /* @__PURE__ */ React.createElement(import_lucide_react8.Eye, { size: 16, strokeWidth: 2, "aria-hidden": "true" })
  )), displayHelperText && /* @__PURE__ */ React.createElement("p", { className: cn(helperTextVariants2({ state: actualState })) }, displayHelperText));
});
PasswordInput.displayName = "PasswordInput";

// src/components/ui/radio-group.tsx
var React12 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_lucide_react9 = require("lucide-react");
var import_class_variance_authority7 = require("class-variance-authority");
function RadioGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React12.createElement(
    RadioGroupPrimitive.Root,
    __spreadValues({
      "data-slot": "radio-group",
      className: cn("grid gap-3", className)
    }, props)
  );
}
var radioGroupItemVariants = (0, import_class_variance_authority7.cva)(
  "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
  {
    variants: {
      size: {
        default: "size-4",
        // 16x16px
        lg: "size-5"
        // 20x20px
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function RadioGroupItem(_a) {
  var _b = _a, {
    className,
    size
  } = _b, props = __objRest(_b, [
    "className",
    "size"
  ]);
  return /* @__PURE__ */ React12.createElement(
    RadioGroupPrimitive.Item,
    __spreadValues({
      "data-slot": "radio-group-item",
      className: cn(radioGroupItemVariants({ size }), className)
    }, props),
    /* @__PURE__ */ React12.createElement(
      RadioGroupPrimitive.Indicator,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center"
      },
      /* @__PURE__ */ React12.createElement(import_lucide_react9.CircleIcon, { className: cn(
        "fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        size === "lg" ? "size-2.5" : "size-2"
      ) })
    )
  );
}

// src/components/ui/select.tsx
var React13 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react10 = require("lucide-react");
function Select(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React13.createElement(SelectPrimitive.Root, __spreadValues({ "data-slot": "select" }, props));
}
function SelectGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React13.createElement(SelectPrimitive.Group, __spreadValues({ "data-slot": "select-group" }, props));
}
function SelectValue(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React13.createElement(SelectPrimitive.Value, __spreadValues({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
  var _b = _a, {
    className,
    size = "default",
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ React13.createElement(
    SelectPrimitive.Trigger,
    __spreadValues({
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-lg border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React13.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React13.createElement(import_lucide_react10.ChevronDownIcon, { className: "size-4 opacity-50" }))
  );
}
function SelectContent(_a) {
  var _b = _a, {
    className,
    children,
    position = "popper"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "position"
  ]);
  return /* @__PURE__ */ React13.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React13.createElement(
    SelectPrimitive.Content,
    __spreadValues({
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props),
    /* @__PURE__ */ React13.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React13.createElement(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      children
    ),
    /* @__PURE__ */ React13.createElement(SelectScrollDownButton, null)
  ));
}
function SelectLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React13.createElement(
    SelectPrimitive.Label,
    __spreadValues({
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className)
    }, props)
  );
}
function SelectItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React13.createElement(
    SelectPrimitive.Item,
    __spreadValues({
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )
    }, props),
    /* @__PURE__ */ React13.createElement("span", { className: "absolute right-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React13.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React13.createElement(import_lucide_react10.CheckIcon, { className: "size-4" }))),
    /* @__PURE__ */ React13.createElement(SelectPrimitive.ItemText, null, children)
  );
}
function SelectSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React13.createElement(
    SelectPrimitive.Separator,
    __spreadValues({
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)
    }, props)
  );
}
function SelectScrollUpButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React13.createElement(
    SelectPrimitive.ScrollUpButton,
    __spreadValues({
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React13.createElement(import_lucide_react10.ChevronUpIcon, { className: "size-4" })
  );
}
function SelectScrollDownButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React13.createElement(
    SelectPrimitive.ScrollDownButton,
    __spreadValues({
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React13.createElement(import_lucide_react10.ChevronDownIcon, { className: "size-4" })
  );
}

// src/components/ui/separator.tsx
var import_react5 = __toESM(require("react"));
var separatorWidths = {
  md: "w-16",
  // 64px
  lg: "w-24",
  // 96px
  full: "w-full"
};
var separatorThicknesses = {
  thin: "h-1",
  // 4px
  thick: "h-2"
  // 8px
};
var separatorAlignments = {
  left: "mx-0",
  center: "mx-auto",
  right: "ml-auto mr-0"
};
function Separator2(_a) {
  var _b = _a, {
    alignment = "left",
    width = "md",
    thickness = "thick",
    className
  } = _b, props = __objRest(_b, [
    "alignment",
    "width",
    "thickness",
    "className"
  ]);
  return /* @__PURE__ */ import_react5.default.createElement(
    "div",
    __spreadValues({
      className: cn(
        separatorThicknesses[thickness],
        "bg-yellow-400",
        separatorWidths[width],
        separatorAlignments[alignment],
        className
      ),
      style: { height: thickness === "thin" ? "4px" : "8px" },
      role: "separator",
      "aria-orientation": "horizontal"
    }, props)
  );
}

// src/components/ui/textarea.tsx
var React15 = __toESM(require("react"));
function Textarea(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React15.createElement(
    "textarea",
    __spreadValues({
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )
    }, props)
  );
}

// src/design-tokens/colors.ts
var makoColors = {
  // Blue - Primary
  blue: {
    10: "#FBFDFE",
    25: "#F6FAFD",
    50: "#EEF6FC",
    100: "#D8ECF8",
    200: "#BADEF3",
    300: "#8ACAEA",
    400: "#56AEE1",
    500: "#2F8DDA",
    600: "#2671D9",
    700: "#265FD9",
    800: "#204DB6",
    900: "#19448F",
    950: "#051E50"
  },
  // Yellow - Primary
  yellow: {
    10: "#FFFEF5",
    25: "#FFFEF0",
    50: "#FFFEEA",
    100: "#FFF9C5",
    200: "#FFF285",
    300: "#FFE546",
    400: "#FFD700",
    500: "#FFB400",
    600: "#E28A00",
    700: "#BB6002",
    800: "#984A08",
    900: "#7C3D0B",
    950: "#481F00"
  },
  // Green - Secondary
  green: {
    10: "#FAFFFC",
    25: "#F5FEFA",
    50: "#EFFEF6",
    100: "#DBFBEC",
    200: "#BAF7DA",
    300: "#84F1BD",
    400: "#3EEA99",
    500: "#17D079",
    600: "#00C66A",
    700: "#009550",
    800: "#007B43",
    900: "#00673A",
    950: "#00341E"
  },
  // Red - Secondary
  red: {
    10: "#FEFBFB",
    25: "#FEF7F6",
    50: "#FDF4F3",
    100: "#FCE6E4",
    200: "#FBD1CD",
    300: "#F7B0AA",
    400: "#F08379",
    500: "#E55A4E",
    600: "#D23D30",
    700: "#BA3327",
    800: "#922B22",
    900: "#792A23",
    950: "#42110D"
  },
  // Purple - Secondary
  purple: {
    10: "#FAFBFF",
    25: "#F5F6FF",
    50: "#EEF0FF",
    100: "#E0E3FF",
    200: "#C7CAFE",
    300: "#A5A8FC",
    400: "#8781F8",
    500: "#7463F1",
    600: "#6748E5",
    700: "#5838CA",
    800: "#4730A3",
    900: "#3D2E81",
    950: "#251B4B"
  },
  // Neutral
  neutral: {
    10: "#FCFDFD",
    25: "#F8FAFB",
    50: "#F1F3F5",
    100: "#EBF1F4",
    200: "#DBE4EA",
    300: "#C4D2DD",
    400: "#ACBCCD",
    500: "#96A7BE",
    600: "#7F8EAC",
    700: "#78849E",
    800: "#59647A",
    900: "#4C5463",
    950: "#2C303A"
  },
  // Black & White
  black: "#1A1A1A",
  white: "#FFFFFF",
  // Semantic aliases for easier usage
  primary: {
    10: "#FBFDFE",
    25: "#F6FAFD",
    50: "#EEF6FC",
    100: "#D8ECF8",
    200: "#BADEF3",
    300: "#8ACAEA",
    400: "#56AEE1",
    500: "#2F8DDA",
    600: "#2671D9",
    700: "#265FD9",
    800: "#204DB6",
    900: "#19448F",
    950: "#051E50"
  },
  // Semantic colors using the defined palette
  success: {
    10: "#FAFFFC",
    25: "#F5FEFA",
    50: "#EFFEF6",
    100: "#DBFBEC",
    200: "#BAF7DA",
    300: "#84F1BD",
    400: "#3EEA99",
    500: "#17D079",
    600: "#00C66A",
    700: "#009550",
    800: "#007B43",
    900: "#00673A",
    950: "#00341E"
  },
  warning: {
    10: "#FFFEF5",
    25: "#FFFEF0",
    50: "#FFFEEA",
    100: "#FFF9C5",
    200: "#FFF285",
    300: "#FFE546",
    400: "#FFD700",
    500: "#FFB400",
    600: "#E28A00",
    700: "#BB6002",
    800: "#984A08",
    900: "#7C3D0B",
    950: "#481F00"
  },
  error: {
    10: "#FEFBFB",
    25: "#FEF7F6",
    50: "#FDF4F3",
    100: "#FCE6E4",
    200: "#FBD1CD",
    300: "#F7B0AA",
    400: "#F08379",
    500: "#E55A4E",
    600: "#D23D30",
    700: "#BA3327",
    800: "#922B22",
    900: "#792A23",
    950: "#42110D"
  },
  info: {
    10: "#FBFDFE",
    25: "#F6FAFD",
    50: "#EEF6FC",
    100: "#D8ECF8",
    200: "#BADEF3",
    300: "#8ACAEA",
    400: "#56AEE1",
    500: "#2F8DDA",
    600: "#2671D9",
    700: "#265FD9",
    800: "#204DB6",
    900: "#19448F",
    950: "#051E50"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  AlertBanner,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  BasicFileInput,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Combobox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  DocumentUploader,
  FileInput,
  ImageUploader,
  Input,
  Label,
  PasswordInput,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
  badgeVariants,
  buttonVariants,
  cn,
  inputVariants,
  makoColors,
  useFileInput
});
//# sourceMappingURL=index.js.map