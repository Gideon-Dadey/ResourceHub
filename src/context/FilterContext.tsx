import React, { useReducer, useMemo } from "react";
import type { ReactNode } from "react";
import type {
  FilterState,
  FilterContextType,
  DocumentType,
} from "@/types/types";
import { mockResources } from "@/data/mockData";
import { FilterContext } from "./FilterContextCore";

const initialFilterState: FilterState = {
  principles: [],
  documentTypes: [],
  categories: [],
  searchQuery: "",
};

type FilterAction =
  | { type: "TOGGLE_PRINCIPLE"; payload: string }
  | { type: "TOGGLE_DOCUMENT_TYPE"; payload: DocumentType }
  | { type: "TOGGLE_CATEGORY"; payload: string }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "CLEAR_ALL_FILTERS" };

const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "TOGGLE_PRINCIPLE":
      return {
        ...state,
        principles: state.principles.includes(action.payload)
          ? state.principles.filter((p: string) => p !== action.payload)
          : [...state.principles, action.payload],
      };

    case "TOGGLE_DOCUMENT_TYPE":
      return {
        ...state,
        documentTypes: state.documentTypes.includes(action.payload)
          ? state.documentTypes.filter(
              (dt: DocumentType) => dt !== action.payload
            )
          : [...state.documentTypes, action.payload],
      };

    case "TOGGLE_CATEGORY":
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter((c: string) => c !== action.payload)
          : [...state.categories, action.payload],
      };

    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "CLEAR_ALL_FILTERS":
      return initialFilterState;

    default:
      return state;
  }
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);
  const resources = mockResources;

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      if (filterState.searchQuery) {
        const searchLower = filterState.searchQuery.toLowerCase();
        const matchesSearch =
          resource.title.toLowerCase().includes(searchLower) ||
          resource.topic.toLowerCase().includes(searchLower);

        if (!matchesSearch) return false;
      }

      if (filterState.principles.length > 0) {
        const matchesPrinciples = filterState.principles.some(
          (principle: string) => resource.principles.includes(principle)
        );
        if (!matchesPrinciples) return false;
      }

      if (filterState.documentTypes.length > 0) {
        if (!filterState.documentTypes.includes(resource.documentType)) {
          return false;
        }
      }

      if (filterState.categories.length > 0) {
        const matchesCategories = filterState.categories.some(
          (category: string) => resource.categories.includes(category)
        );
        if (!matchesCategories) return false;
      }

      return true;
    });
  }, [resources, filterState]);

  const togglePrinciple = (principle: string) => {
    dispatch({ type: "TOGGLE_PRINCIPLE", payload: principle });
  };

  const toggleDocumentType = (docType: DocumentType) => {
    dispatch({ type: "TOGGLE_DOCUMENT_TYPE", payload: docType });
  };

  const toggleCategory = (category: string) => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: category });
  };

  const setSearchQuery = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const clearAllFilters = () => {
    dispatch({ type: "CLEAR_ALL_FILTERS" });
  };

  const getActiveFilterCount = (): number => {
    return (
      filterState.principles.length +
      filterState.documentTypes.length +
      filterState.categories.length +
      (filterState.searchQuery ? 1 : 0)
    );
  };

  const hasActiveFilters = (): boolean => {
    return getActiveFilterCount() > 0;
  };

  const value: FilterContextType = {
    filterState,
    resources,
    filteredResources,
    togglePrinciple,
    toggleDocumentType,
    toggleCategory,
    setSearchQuery,
    clearAllFilters,
    getActiveFilterCount,
    hasActiveFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
