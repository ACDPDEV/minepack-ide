import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  IconChevronCompactDown,
  IconMaximize,
  IconX,
} from "@tabler/icons-react";

export function WindowActions() {
  return (
    <ButtonGroup orientation="horizontal" className="h-fit">
      <Button variant="ghost" size="icon">
        <IconChevronCompactDown />
      </Button>
      <Button variant="ghost" size="icon">
        <IconMaximize />
      </Button>
      <Button variant="ghost" size="icon">
        <IconX />
      </Button>
    </ButtonGroup>
  );
}
