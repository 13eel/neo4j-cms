import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { Button, cn } from "~";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
      withClose: {
        true: "pr-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  onClose?: () => void;
}

function Badge({
  className,
  children,
  variant,
  withClose = false,
  onClose,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, withClose }), className)}
      {...props}
    >
      {children}
      {withClose && (
        <Button
          variant="ghost:destructive"
          size="icon:sm"
          round
          onClick={onClose}
        >
          <X className="size-3" />
        </Button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };
