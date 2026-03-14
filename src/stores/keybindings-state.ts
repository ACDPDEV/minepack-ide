import { create } from "zustand";

interface KeybindingsState {}

export const useKeybindingsState = create<KeybindingsState>((set) => ({}));

export default useKeybindingsState;
