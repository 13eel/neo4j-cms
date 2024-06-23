"use client";

import { forwardRef, useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";

import {
  Badge,
  cn,
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~";

type TagInputOptions = (
  | string
  | {
      value: string;
      label?: string;
      color?: string;
    }
)[];

interface TagInputProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange" | "onBlur"
  > {
  allowCreate?: boolean;
  options: TagInputOptions;
  onCreate?: (value: string) => void;
  // Overwritten props
  value?: string[];
  onChange?: (selected: string[]) => void;
  onBlur?: () => void;
}

const TagInput = forwardRef<HTMLSelectElement, TagInputProps>((props, ref) => {
  const {
    className,
    allowCreate = false,
    onCreate,
    options: _options,
    value,
    onChange,
    ...rest
  } = props;
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [selected, setSelected] = useState<string[]>(value ?? []);
  const [query, setQuery] = useState("");
  const options = useMemo(() => {
    return _options.map((option) =>
      typeof option === "string"
        ? { value: option, label: option }
        : { label: option.value, ...option },
    );
  }, [_options]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
    setQuery("");
  };

  const handleCreate = (value: string) => {
    handleSelect(value);
    onCreate?.(value);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <select
        hidden
        multiple
        ref={ref}
        value={selected}
        {...rest}
        onChange={(e) => {
          console.log(e);
        }}
      />

      <div className={cn("flex flex-col gap-2 px-2 py-1", className)}>
        <div className="flex flex-wrap gap-2 px-2">
          {selected.map((tag) => (
            <Badge
              key={tag}
              className="cursor-default select-none"
              withClose
              onClose={() => handleSelect(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Command className="overflow-visible border border-input bg-transparent">
          <CommandInput
            className="ml-2 flex-1 bg-transparent placeholder:text-muted-foreground"
            placeholder="Select Labels..."
            hideIcon
            onFocus={() => setOpen(true)}
            value={query}
            onValueChange={setQuery}
          />
          {open && (
            <CommandList>
              {allowCreate &&
                query &&
                options.every((o) => o.value !== query) && (
                  <>
                    <CommandGroup heading="Create new...">
                      <CommandItem
                        className="cursor-pointer"
                        value={query}
                        onSelect={handleCreate}
                      >
                        {query}
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                  </>
                )}
              <CommandGroup>
                {options.map(({ value, label }) => (
                  <CommandItem
                    className="cursor-pointer"
                    key={value}
                    value={value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selected.includes(value) ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </div>
    </>
  );
});
TagInput.displayName = "TagInput";

export { TagInput };
