import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  IconBrush,
  IconFile,
  IconFolder,
  IconGitBranch,
  IconKeyboard,
  IconSettings,
} from "@tabler/icons-react";
import { Input } from "../ui/input";
import { useState } from "react";
import ProjectTab from "./settings/project-tab";
import AppearanceTab from "./settings/appearance-tab";
import EditorTab from "./settings/editor-tab";
import VersionControlTab from "./settings/version-control-tab";
import KeybindingsTab from "./settings/keybindings-tab";

type SettingTab = "project" | "appearance" | "editor" | "keybindings" | "git";

const tabs = [
  { label: "Project", icon: IconFolder },
  { label: "Appearance", icon: IconBrush },
  { label: "Editor", icon: IconFile },
  { label: "Keybindings", icon: IconKeyboard },
  { label: "Git", icon: IconGitBranch },
];

function SettingButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn(
        "text-muted-foreground flex flex-row gap-2 justify-start items-center",
      )}
      onClick={active ? () => null : onClick}
    >
      <Icon />
      <span>{label}</span>
    </Button>
  );
}

export function ConfigButton() {
  const [tab, setTab] = useState<SettingTab>("project");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={cn("w-12 h-12 rounded-none text-muted-foreground")}
        >
          <IconSettings className={cn("stroke-[1.5] scale-150")} />
        </Button>
      </DialogTrigger>
      <DialogContent className="grid grid-rows-[auto_1fr] max-w-4xl! max-h-8/10! w-full h-full p-0 gap-0">
        <div className="w-full h-10 flex items-center justify-start px-4">
          <span>Settings</span>
        </div>
        <div className="grid grid-cols-[auto_1fr]">
          <div className="h-full bg-background border-t border-border p-4 flex flex-col gap-4">
            <Input />
            <ul className="flex flex-col">
              {tabs.map((t) => (
                <SettingButton
                  key={t.label}
                  icon={t.icon}
                  label={t.label}
                  active={tab === (t.label.toLowerCase() as SettingTab)}
                  onClick={() => setTab(t.label.toLowerCase() as SettingTab)}
                />
              ))}
            </ul>
          </div>
          {tab === "project" && <ProjectTab />}
          {tab === "appearance" && <AppearanceTab />}
          {tab === "editor" && <EditorTab />}
          {tab === "keybindings" && <KeybindingsTab />}
          {tab === "git" && <VersionControlTab />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
