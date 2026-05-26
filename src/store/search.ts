import { create } from "zustand";

type SearchState = {
  query: string;
  isOpen: boolean;
  setQuery: (q: string) => void;
  setOpen: (open: boolean) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  isOpen: false,
  setQuery: (query) => set({ query }),
  setOpen: (isOpen) => set({ isOpen, ...(isOpen ? {} : { query: "" }) }),
}));