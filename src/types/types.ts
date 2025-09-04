export type DocumentType = "DOC" | "Link" | "PDF" | "Video";

export interface Resource {
  id: string;
  title: string;
  topic: string;
  principles: string[];
  documentType: DocumentType;
  categories: string[];
  color?: "red" | "green" | "orange" | "yellow" | "blue";
  icon?: string;
}

export interface FilterState {
  principles: string[];
  documentTypes: DocumentType[];
  categories: string[];
  searchQuery: string;
}

export interface FilterContextType {
  filterState: FilterState;
  resources: Resource[];
  filteredResources: Resource[];

  togglePrinciple: (principle: string) => void;
  toggleDocumentType: (docType: DocumentType) => void;
  toggleCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  clearAllFilters: () => void;

  getActiveFilterCount: () => number;
  hasActiveFilters: () => boolean;
}
