import {
  IconAlertTriangle,
  IconBrandGithub,
  IconCircleX,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

export default function StatusBar() {
  return (
    <div className="flex flex-row gap-2 px-2 py-1 w-full h-fit items-center border-t border-border [&>div]:flex [&>div]:flex-row [&>div]:gap-2 [&>div]:items-center [&>div>span]:flex [&>div>span]:flex-row justify-between text-muted-foreground">
      <div>
        <Button variant="outline">
          <IconBrandGithub /> main
        </Button>
        <span>
          <ButtonGroup>
            <Button variant="alert">
              <IconAlertTriangle data-icon="inñine-start" /> 1
            </Button>
            <Button variant="destructive">
              <IconCircleX data-icon="inline-start" /> 2
            </Button>
          </ButtonGroup>
        </span>
      </div>
      <div>
        <Button variant="outline">L,C: 9,38</Button>
        <Button variant="outline">Spaces: 4</Button>
        <Button variant="outline">UTF-8</Button>
        <Button variant="outline">MCfunction</Button>
      </div>
    </div>
  );
}
