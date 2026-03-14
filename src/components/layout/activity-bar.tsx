import {
  IconFile,
  IconGitBranch,
  IconSearch,
  IconSettings,
  IconZeroConfig,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useUIState from "@/stores/ui-state";
import { ConfigButton } from "./config-dialog";

function ActivityButton({
  icon: Icon,
  label,
  active,
  onClick,
  onClickAgain,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
  onClickAgain: () => void;
}) {
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn("w-12 h-12 rounded-none text-muted-foreground")}
      onClick={active ? onClickAgain : onClick}
    >
      <Icon className={cn("stroke-[1.5] scale-150")} />
    </Button>
  );
}

export default function ActivityBar() {
  const activeTab = useUIState((s) => s.activity_tab);
  const setActivityTab = useUIState((s) => s.set_activity_tab);
  return (
    <nav className="flex flex-col h-full border-r border-border justify-between items-center text-muted-foreground">
      <ul className="flex flex-col">
        <ActivityButton
          icon={IconFile}
          label="Files"
          active={activeTab === "files"}
          onClick={() => setActivityTab("files")}
          onClickAgain={() => setActivityTab("none")}
        />
        <ActivityButton
          icon={IconGitBranch}
          label="Branches"
          active={activeTab === "git"}
          onClick={() => setActivityTab("git")}
          onClickAgain={() => setActivityTab("none")}
        />
        <ActivityButton
          icon={IconSearch}
          label="Search"
          active={activeTab === "search"}
          onClick={() => setActivityTab("search")}
          onClickAgain={() => setActivityTab("none")}
        />
      </ul>
      <ul className="flex flex-col">
        <ConfigButton />
      </ul>
    </nav>
  );
}
