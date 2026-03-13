import { create } from "zustand";

// ─── Types ────────────────────────────────────────────────────────────────────

type Theme = "light" | "dark";
type BuildStatus = "idle" | "building" | "success" | "error";
type SidebarPanel = "explorer" | "search" | "extensions";
type NotificationType = "info" | "warn" | "error";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}

interface CursorPosition {
  line: number;
  column: number;
}

interface ProjectProperties {
  name: string;
  description: string;
  author: string;
  version: string;
  format: number;
}

// ─── State Interface ──────────────────────────────────────────────────────────

interface AppState {
  // ── Existing ──────────────────────────────────────────────────────────────
  theme: Theme;
  project_route: string;
  file_buffer: string[];
  project_properties: ProjectProperties;

  setProjectProperties: (props: Partial<ProjectProperties>) => void;
  addFileBuffer: (file: string) => void;
  removeFileBuffer: (file: string) => void;
  setTheme: (theme: Theme) => void;
  setProjectRoute: (route: string) => void;

  // ── Editor State ──────────────────────────────────────────────────────────
  /** Ruta del archivo actualmente abierto en el editor principal */
  active_file: string | null;
  /** Posición del cursor para sincronizar el editor y el panel de goto-line */
  cursor_position: CursorPosition;
  /** Rutas de archivos con cambios sin guardar (muestra • en la tab) */
  unsaved_files: Set<string>;

  setActiveFile: (path: string | null) => void;
  setCursorPosition: (pos: CursorPosition) => void;
  markUnsaved: (path: string) => void;
  markSaved: (path: string) => void;

  // ── Minecraft / Datapack ──────────────────────────────────────────────────
  /** Versión de Minecraft objetivo, ej. "1.21.4". Sirve para validaciones y sugerencias de comandos */
  mc_version: string;
  /** Namespaces declarados en el proyecto, ej. ["mynamespace"] */
  namespaces: string[];
  /**
   * Mapa de tags de función/bloque hacia sus entradas.
   * Ej. { "minecraft:tick": ["mynamespace:loop"], "minecraft:load": ["mynamespace:setup"] }
   * Se usa para autocompletado y para el árbol de tags en el sidebar.
   */
  loaded_tags: Record<string, string[]>;

  setMcVersion: (version: string) => void;
  addNamespace: (namespace: string) => void;
  removeNamespace: (namespace: string) => void;
  setLoadedTags: (tags: Record<string, string[]>) => void;
  addTagEntry: (tag: string, entry: string) => void;
  removeTagEntry: (tag: string, entry: string) => void;

  // ── Terminal / Build ──────────────────────────────────────────────────────
  /** Líneas de output del proceso de build / exportación */
  terminal_output: string[];
  /** Estado del pipeline de build */
  build_status: BuildStatus;
  /** Ruta de destino del .zip exportado */
  output_path: string;

  appendTerminalOutput: (line: string) => void;
  clearTerminal: () => void;
  setBuildStatus: (status: BuildStatus) => void;
  setOutputPath: (path: string) => void;

  // ── UI / UX ───────────────────────────────────────────────────────────────
  /** Panel activo en el sidebar izquierdo */
  sidebar_panel: SidebarPanel;
  /** Texto de búsqueda global en archivos del proyecto */
  search_query: string;
  /** Cola de notificaciones tipo toast */
  notifications: Notification[];

  setSidebarPanel: (panel: SidebarPanel) => void;
  setSearchQuery: (query: string) => void;
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useAppState = create<AppState>((set) => ({
  // ── Existing ───────────────────────────────────────────────────────────────
  theme: "light",
  project_route: "",
  file_buffer: [],
  project_properties: {
    name: "",
    description: "",
    author: "",
    version: "",
    format: 0,
  },

  setProjectProperties: (props) =>
    set((state) => ({
      project_properties: { ...state.project_properties, ...props },
    })),

  addFileBuffer: (file) =>
    set((state) => ({
      file_buffer: [...state.file_buffer, file],
    })),

  removeFileBuffer: (file) =>
    set((state) => ({
      file_buffer: state.file_buffer.filter((f) => f !== file),
    })),

  setTheme: (theme) => set({ theme }),

  setProjectRoute: (route) => set({ project_route: route }),

  // ── Editor State ───────────────────────────────────────────────────────────
  active_file: null,
  cursor_position: { line: 1, column: 1 },
  unsaved_files: new Set(),

  setActiveFile: (path) => set({ active_file: path }),

  setCursorPosition: (pos) => set({ cursor_position: pos }),

  markUnsaved: (path) =>
    set((state) => ({
      unsaved_files: new Set(state.unsaved_files).add(path),
    })),

  markSaved: (path) =>
    set((state) => {
      const next = new Set(state.unsaved_files);
      next.delete(path);
      return { unsaved_files: next };
    }),

  // ── Minecraft / Datapack ───────────────────────────────────────────────────
  mc_version: "1.21.4",
  namespaces: [],
  loaded_tags: {},

  setMcVersion: (version) => set({ mc_version: version }),

  addNamespace: (namespace) =>
    set((state) => ({
      namespaces: state.namespaces.includes(namespace)
        ? state.namespaces
        : [...state.namespaces, namespace],
    })),

  removeNamespace: (namespace) =>
    set((state) => ({
      namespaces: state.namespaces.filter((ns) => ns !== namespace),
    })),

  setLoadedTags: (tags) => set({ loaded_tags: tags }),

  addTagEntry: (tag, entry) =>
    set((state) => {
      const current = state.loaded_tags[tag] ?? [];
      if (current.includes(entry)) return {};
      return {
        loaded_tags: { ...state.loaded_tags, [tag]: [...current, entry] },
      };
    }),

  removeTagEntry: (tag, entry) =>
    set((state) => {
      const current = state.loaded_tags[tag] ?? [];
      return {
        loaded_tags: {
          ...state.loaded_tags,
          [tag]: current.filter((e) => e !== entry),
        },
      };
    }),

  // ── Terminal / Build ───────────────────────────────────────────────────────
  terminal_output: [],
  build_status: "idle",
  output_path: "",

  appendTerminalOutput: (line) =>
    set((state) => ({
      terminal_output: [...state.terminal_output, line],
    })),

  clearTerminal: () => set({ terminal_output: [] }),

  setBuildStatus: (status) => set({ build_status: status }),

  setOutputPath: (path) => set({ output_path: path }),

  // ── UI / UX ────────────────────────────────────────────────────────────────
  sidebar_panel: "explorer",
  search_query: "",
  notifications: [],

  setSidebarPanel: (panel) => set({ sidebar_panel: panel }),

  setSearchQuery: (query) => set({ search_query: query }),

  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: crypto.randomUUID() },
      ],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clearNotifications: () => set({ notifications: [] }),
}));
