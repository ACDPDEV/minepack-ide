import { create } from "zustand";

interface EditorState {
  tab_size: number;
  word_wrap: boolean;
  line_numbers: boolean;
  rulers: boolean;
  minimap: boolean;
  set_tab_size: (size: number) => void;
  set_word_wrap: (wrap: boolean) => void;
  set_line_numbers: (show: boolean) => void;
  set_rulers: (show: boolean) => void;
  set_minimap: (show: boolean) => void;
}

export const useEditorState = create<EditorState>((set) => ({
  tab_size: 4,
  word_wrap: false,
  line_numbers: true,
  rulers: false,
  minimap: true,
  set_tab_size: (size: number) => set({ tab_size: size }),
  set_word_wrap: (wrap: boolean) => set({ word_wrap: wrap }),
  set_line_numbers: (show: boolean) => set({ line_numbers: show }),
  set_rulers: (show: boolean) => set({ rulers: show }),
  set_minimap: (show: boolean) => set({ minimap: show }),
}));

export default useEditorState;
