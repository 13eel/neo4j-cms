"use client";

import { forwardRef } from "react";
import { TextInput } from "@ui";
import { cn } from "@ui/lib/utils";

export interface TagInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const TagInput = forwardRef<HTMLSelectElement, TagInputProps>((props, ref) => {
  const { className, options, ...rest } = props;

  return (
    <>
      <select hidden multiple ref={ref} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            option
          </option>
        ))}
      </select>
      <TextInput className={cn("w-full", className)} />
    </>
  );
});

TagInput.displayName = "TagInput";

export { TagInput };
