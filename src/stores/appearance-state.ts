import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface AppearanceState {
  theme: Theme;
  set_theme: (theme: Theme) => void;
}

export const useAppearanceState = create<AppearanceState>((set) => ({
  theme: "system",
  set_theme: (theme: Theme) => set({ theme }),
}));

export default useAppearanceState;
