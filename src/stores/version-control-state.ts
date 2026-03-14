import { create } from "zustand";

interface VersionControlState {
  enable_version_control: boolean;
  auto_init_repository: boolean;
  default_git_ignore: boolean;
  set_enable_version_control: (enable: boolean) => void;
  set_auto_init_repository: (auto: boolean) => void;
  set_default_git_ignore: (ignore: boolean) => void;
}

export const useVersionControlState = create<VersionControlState>((set) => ({
  enable_version_control: false,
  auto_init_repository: false,
  default_git_ignore: false,
  set_enable_version_control: (enable: boolean) =>
    set({ enable_version_control: enable }),
  set_auto_init_repository: (auto: boolean) =>
    set({ auto_init_repository: auto }),
  set_default_git_ignore: (ignore: boolean) =>
    set({ default_git_ignore: ignore }),
}));

export default useVersionControlState;
