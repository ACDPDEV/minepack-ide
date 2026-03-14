import useVersionControlState from "@/stores/version-control-state";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Switch } from "@/components/ui/switch";

export default function VersionControlTab() {
  const enable_version_control = useVersionControlState((s) => s.enable_version_control);
  const auto_init_repository = useVersionControlState((s) => s.auto_init_repository);
  const default_git_ignore = useVersionControlState((s) => s.default_git_ignore);
  const set_enable_version_control = useVersionControlState((s) => s.set_enable_version_control);
  const set_auto_init_repository = useVersionControlState((s) => s.set_auto_init_repository);
  const set_default_git_ignore = useVersionControlState((s) => s.set_default_git_ignore);

  return (
    <form className="h-full w-full bg-accent border-t border-border flex flex-col p-12 gap-4">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Enable Version Control</ItemTitle>
          <ItemDescription>
            Track changes to your datapack files using Git. Enables branching,
            commit history, and rollback support for your project.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="enable_version_control"
            checked={enable_version_control}
            onCheckedChange={set_enable_version_control}
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Auto Init Repository</ItemTitle>
          <ItemDescription>
            Automatically run <code>git init</code> when creating a new project.
            Skips the manual setup step so version control is ready from the start.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="auto_init_repository"
            checked={auto_init_repository}
            onCheckedChange={set_auto_init_repository}
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Default .gitignore</ItemTitle>
          <ItemDescription>
            Add a preconfigured <code>.gitignore</code> file to new projects,
            excluding build artifacts and editor-specific files from being tracked.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="default_git_ignore"
            checked={default_git_ignore}
            onCheckedChange={set_default_git_ignore}
          />
        </ItemActions>
      </Item>
    </form>
  );
}
