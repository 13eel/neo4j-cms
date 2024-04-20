import * as React from "react";
import { Input } from "@ui/components/ui/input";
import { cn } from "@ui/lib/utils";

export type TextInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => {
    return <Input type="text" className={cn(className)} ref={ref} {...props} />;
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
