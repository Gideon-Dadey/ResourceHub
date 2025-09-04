import { useContext } from "react";
import { FilterContext } from "./FilterContextCore";
import type { FilterContextType } from "@/types/types";

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
