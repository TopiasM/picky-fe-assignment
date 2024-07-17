import { create } from "zustand";

interface StoreState {
  upvoteCount: number;
  search: string;
}

export const useStore = create<StoreState>()((set) => ({
  upvoteCount: 2050,
  search: "",
}));
