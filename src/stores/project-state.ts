import { create } from "zustand";

interface ProjectState {
  name: string;
  description: string;
  format: number;
  namespace: string;
  output_path: string;
  set_name: (name: string) => void;
  set_description: (description: string) => void;
  set_format: (format: number) => void;
  set_namespace: (namespace: string) => void;
  set_output_path: (path: string) => void;
}

export const useProjectState = create<ProjectState>((set) => ({
  name: "",
  description: "",
  format: 0,
  namespace: "",
  output_path: "",
  set_name: (name: string) => set({ name }),
  set_description: (description: string) => set({ description }),
  set_format: (format: number) => set({ format }),
  set_namespace: (namespace: string) => set({ namespace }),
  set_output_path: (path: string) => set({ output_path: path }),
}));

export default useProjectState;
