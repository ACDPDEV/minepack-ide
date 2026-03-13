import {
  IconFile,
  IconGitBranch,
  IconSearch,
  IconSettings,
  IconZeroConfig,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ActivityBar() {
  return (
    <nav className="flex flex-col h-full border-r border-border justify-between items-center text-muted-foreground">
      <ul className="flex flex-col">
        <Button variant="ghost" className={cn("w-12 h-12 rounded-none")}>
          <IconFile className={cn("stroke-[1.5] scale-150")} />
        </Button>
        <Button variant="ghost" className={cn("w-12 h-12 rounded-none")}>
          <IconGitBranch className={cn("stroke-[1.5] scale-150")} />
        </Button>
        <Button variant="ghost" className={cn("w-12 h-12 rounded-none")}>
          <IconSearch className={cn("stroke-[1.5] scale-150")} />
        </Button>
      </ul>
      <ul className="flex flex-col">
        <Button variant="ghost" className={cn("w-12 h-12 rounded-none")}>
          <IconSettings className={cn("stroke-[1.5] scale-150")} />
        </Button>
      </ul>
    </nav>
  );
}
