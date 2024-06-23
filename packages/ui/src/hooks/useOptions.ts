import { useMemo } from "react";

import type { Option, StrictOption } from "~";

export function useOptions(options?: Option[]) {
  return useMemo<StrictOption[]>(() => {
    if (!options) {
      return [];
    }
    return options.map((option): StrictOption => {
      if (typeof option === "string") {
        return { value: option, label: option };
      }
      return {
        value: option.value,
        label: option.label ?? option.value,
      };
    });
  }, [options]);
}
