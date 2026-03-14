import { IconX } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function FileTab({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="outline" className="rounded-none text-muted-foreground">
      <span>{children}</span>
      <Button
        variant="ghost"
        size="icon"
        className={cn("p-px w-5 h-5 rounded-full")}
      >
        <IconX />
      </Button>
    </Button>
  );
}

export const FileBar = () => {
  return (
    <nav className="flex flex-row border-b border-border">
      <FileTab>index.ts</FileTab>
      <FileTab>styles.css</FileTab>
      <FileTab>vitest.config.ts</FileTab>
    </nav>
  );
};
