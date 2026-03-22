import { Select as BaseSelect } from "@base-ui/react/select";
import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

type SelectItem = {
  label: string;
  value: string;
};

type SelectProps = Omit<BaseSelect.Root.Props<string, false>, "children" | "items"> & {
  items: SelectItem[];
  label?: string;
  placeholder?: string;
  className?: string;
};

export function Select({
  items,
  label,
  placeholder = "選択してください",
  className,
  ...props
}: SelectProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <BaseSelect.Root items={items} {...props}>
        {label && (
          <BaseSelect.Label className="cursor-default text-sm font-medium text-gray-900">
            {label}
          </BaseSelect.Label>
        )}
        <BaseSelect.Trigger className="flex h-10 min-w-40 items-center justify-between gap-3 rounded-md border border-gray-300 bg-transparent px-3 text-base text-gray-900 select-none hover:bg-gray-50 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-50">
          <BaseSelect.Value
            className="data-[placeholder]:text-gray-400"
            placeholder={placeholder}
          />
          <BaseSelect.Icon className="flex">
            <ChevronUpDownIcon />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner className="z-50 outline-hidden select-none" sideOffset={8}>
            <BaseSelect.Popup className="min-w-[var(--anchor-width)] origin-[var(--transform-origin)] rounded-md border border-gray-200 bg-white py-1 shadow-lg transition-[transform,scale,opacity] data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[ending-style]:scale-90 data-[ending-style]:opacity-0">
              <BaseSelect.List className="max-h-60 overflow-y-auto scroll-py-1">
                {items.map(({ label, value }) => (
                  <BaseSelect.Item
                    key={value}
                    value={value}
                    className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 px-3 py-2 text-sm outline-hidden select-none data-[highlighted]:bg-gray-100"
                  >
                    <BaseSelect.ItemIndicator className="col-start-1">
                      <CheckIcon />
                    </BaseSelect.ItemIndicator>
                    <BaseSelect.ItemText className="col-start-2">{label}</BaseSelect.ItemText>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  );
}

function ChevronUpDownIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      aria-hidden="true"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
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
