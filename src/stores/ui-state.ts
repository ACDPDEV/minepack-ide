import { create } from "zustand";

type ActivityTab = "files" | "git" | "search" | "none";

interface UIState {
  activity_tab: ActivityTab;
  file_bar_buffer: any[];
  active_file: string | null;
  set_activity_tab: (tab: ActivityTab) => void;
  set_file_bar_buffer: (buffer: any[]) => void;
  set_active_file: (file: string | null) => void;
}

export const useUIState = create<UIState>((set) => ({
  activity_tab: "files",
  file_bar_buffer: [],
  active_file: null,
  set_activity_tab: (tab: ActivityTab) => set({ activity_tab: tab }),
  set_file_bar_buffer: (buffer: any[]) => set({ file_bar_buffer: buffer }),
  set_active_file: (file: string | null) => set({ active_file: file }),
}));

export default useUIState;
