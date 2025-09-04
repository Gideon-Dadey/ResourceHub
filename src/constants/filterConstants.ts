import type { DocumentType } from "@/types/types";

export const PRINCIPLES = [
  "Secure Base",
  "Sense of Appreciation",
  "Learning Organisation",
  "Mission and Vision",
  "Wellbeing",
] as const;

export const DOCUMENT_TYPES: DocumentType[] = [
  "DOC",
  "Link",
  "PDF",
  "Video",
] as const;

export const CATEGORIES = ["Sample"] as const;
