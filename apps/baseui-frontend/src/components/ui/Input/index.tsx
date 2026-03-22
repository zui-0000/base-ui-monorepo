import { Input as BaseInput } from "@base-ui/react/input";
import { cn } from "~/lib/utils";

type InputProps = BaseInput.Props;

export function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      className={cn(
        "h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 text-base text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800",
        "data-[disabled]:cursor-not-allowed data-[disabled]:bg-gray-50 data-[disabled]:text-gray-400",
        "data-[invalid]:border-red-500 data-[invalid]:focus:outline-red-500",
        className,
      )}
      {...props}
    />
  );
}
