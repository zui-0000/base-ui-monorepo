import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { ComponentProps } from "react";
import { useId } from "react";
import { cn } from "~/lib/utils";

type CheckboxProps = BaseCheckbox.Root.Props & {
  label?: string;
};

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  const checkbox = (
    <BaseCheckbox.Root
      id={checkboxId}
      nativeButton
      render={<button type="button" />}
      className={cn(
        "flex size-5 items-center justify-center rounded-sm",
        "data-[unchecked]:border data-[unchecked]:border-gray-300",
        "data-[checked]:bg-gray-900",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800",
        className,
      )}
      {...props}
    >
      <BaseCheckbox.Indicator className="flex text-gray-50 data-[unchecked]:hidden">
        <CheckIcon />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-900 select-none">
        {checkbox}
        <label htmlFor={checkboxId}>{label}</label>
      </div>
    );
  }

  return checkbox;
}

function CheckIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      aria-hidden="true"
      fill="currentcolor"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}
