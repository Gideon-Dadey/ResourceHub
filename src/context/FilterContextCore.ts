import { createContext } from "react";
import type { FilterContextType } from "@/types/types";

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
