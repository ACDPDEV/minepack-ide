import useAppearanceState from "@/stores/appearance-state";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/stores/theme-provider";

export default function AppearanceTab() {
  const { theme, setTheme } = useTheme();

  return (
    <form className="h-full w-full bg-accent border-t border-border flex flex-col p-12 gap-4">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Theme</ItemTitle>
          <ItemDescription>
            Choose the color theme for the editor. System will automatically
            match your operating system's light or dark preference.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="max-w-xs">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </ItemActions>
      </Item>
    </form>
  );
}
