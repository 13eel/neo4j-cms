"use client";

import type { ElementRef } from "react";
import type { EmptyObject } from "react-hook-form";
import type { Option, StrictOption, ZOptions } from "src/types";
import { forwardRef, useState } from "react";
import { Check, ChevronsUpDown, TerminalIcon } from "lucide-react";
import { set } from "react-hook-form";

import {
  Button,
  cn,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useOptions,
} from "~";

// type Base<> = [keyof TOption] extends [never] ?
// {items
//   items: TOption[];
// }
// interface BaseComboBoxProps<
//   TOption extends object,
//   T extends Option<TOption>[],
// > {
//   items: T;
//   renderItem?: (item: StrictOption) => React.ReactNode;
//   trigger?: React.ReactNode;
//   placeholder?: string;
//   children?: React.ReactNode;
//   empty?: React.ReactNode;
//   onBlur?: () => void;
//   onFocus?: () => void;
// }
// interface SingleValueComboBoxProps<TOption extends object = EmptyObject>
//   extends BaseComboBoxProps<TOption> {
//   multiple?: false;
//   onSelect?: (item: StrictOption) => void;
// }
// interface MultiValueComboBoxProps<TOption extends object = EmptyObject>
//   extends BaseComboBoxProps<TOption> {
//   multiple: true;
//   onSelect?: (items: StrictOption[]) => void;
// }
// type ComboBoxProps<TOption extends object = EmptyObject> =
//   | SingleValueComboBoxProps<TOption>
//   | MultiValueComboBoxProps<TOption>;

// const foo: Base = {
//   items: ["asd", "!"],
// };
// console.log(foo);
//          ^?
interface Props<TOptions extends ZOptions> {
  items: TOptions;
  placeholder?: string;
  empty?: string;
  onSelect?: (item: TOptions[number]) => void;
}
const ComboBox = <T extends ZOptions>(props: Props<T>) => {
  props.items;
  //     ^?
  const { placeholder, empty } = props;
  const items = useOptions(props.items);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelectItem = (selectedValue: string) => {
    setValue(selectedValue === value ? "" : selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? items.find((option) => option.value === value)?.label
            : placeholder ?? <TerminalIcon className="size-4" />}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            {empty && <CommandEmpty>{empty}</CommandEmpty>}

            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelectItem}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      item.value === value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { ComboBox };
