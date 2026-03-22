import { Radio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { useId } from "react";
import { cn } from "~/lib/utils";

type RadioItem = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  items: RadioItem[];
  label?: string;
  className?: string;
} & Omit<BaseRadioGroup.Props, "children">;

export function RadioGroup({ items, label, className, ...props }: RadioGroupProps) {
  const labelId = useId();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span id={labelId} className="text-sm font-medium text-gray-900">
          {label}
        </span>
      )}
      <BaseRadioGroup
        aria-labelledby={label ? labelId : undefined}
        className="flex flex-col gap-2"
        {...props}
      >
        {items.map(({ label: itemLabel, value }) => {
          const radioId = `${labelId}-${value}`;
          return (
            <div key={value} className="flex items-center gap-2 text-sm text-gray-900 select-none">
              <Radio.Root
                value={value}
                id={radioId}
                nativeButton
                render={<button type="button" />}
                className="flex size-5 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300"
              >
                <Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden" />
              </Radio.Root>
              <label htmlFor={radioId}>{itemLabel}</label>
            </div>
          );
        })}
      </BaseRadioGroup>
    </div>
  );
}
