import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      done: [],
      addID: (id) =>
        set((prev) => ({ done: [id, ...prev.done.filter((i) => i !== id)] })),
      removeID: (id) =>
        set((prev) => ({ done: prev.done.filter((i) => i !== id) })),
    }),
    {
      name: "topswe100-storage",
    },
  ),
);
