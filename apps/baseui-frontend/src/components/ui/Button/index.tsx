import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "~/lib/utils";

const variantStyles = {
  primary:
    "bg-gray-900 text-gray-50 hover:bg-gray-800 active:bg-gray-950 data-[disabled]:bg-gray-300 data-[disabled]:text-gray-500",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 data-[disabled]:bg-gray-100 data-[disabled]:text-gray-400",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 data-[disabled]:bg-red-300",
  outline:
    "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 active:bg-gray-100 data-[disabled]:text-gray-400 data-[disabled]:border-gray-200",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 data-[disabled]:text-gray-400",
} as const;

const sizeStyles = {
  sm: "h-8 px-3 text-sm rounded-md",
  md: "h-10 px-4 text-sm rounded-md",
  lg: "h-12 px-6 text-base rounded-lg",
} as const;

type ButtonProps = BaseButton.Props & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(
        "inline-flex items-center justify-center font-medium select-none transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800",
        "data-[disabled]:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
