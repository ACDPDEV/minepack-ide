import { Input } from "@/components/ui/input";
import useProjectState from "@/stores/project-state";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectTab() {
  const name = useProjectState((s) => s.name);
  const description = useProjectState((s) => s.description);
  const namespace = useProjectState((s) => s.namespace);
  const output_path = useProjectState((s) => s.output_path);
  const set_name = useProjectState((s) => s.set_name);
  const set_description = useProjectState((s) => s.set_description);
  const set_namespace = useProjectState((s) => s.set_namespace);
  const set_output_path = useProjectState((s) => s.set_output_path);

  return (
    <form className="h-full w-full bg-accent border-t border-border flex flex-col p-12 gap-4">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Name</ItemTitle>
          <ItemDescription>
            The display name of your datapack. This will appear in the Minecraft
            marketplace and pack selection screen.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Input
            id="name"
            value={name}
            onChange={(e) => set_name(e.target.value)}
            placeholder="My Awesome datapack"
            className="max-w-xs"
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Description</ItemTitle>
          <ItemDescription>
            A short summary of what your datapack does. Players will see this
            when browsing or importing your pack.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => set_description(e.target.value)}
            placeholder="Adds new blocks, items, and mobs to your world..."
            className="max-w-xs"
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Namespace</ItemTitle>
          <ItemDescription>
            A unique identifier prefix used to avoid conflicts with other packs.
            Only lowercase letters, numbers, and underscores are allowed.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Input
            id="namespace"
            value={namespace}
            onChange={(e) => set_namespace(e.target.value)}
            placeholder="my_addon"
            className="max-w-xs"
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Output Path</ItemTitle>
          <ItemDescription>
            The folder where the compiled pack files will be exported. You can
            point this directly to your Minecraft development packs folder.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Input
            id="output_path"
            value={output_path}
            onChange={(e) => set_output_path(e.target.value)}
            placeholder="C:\Users\You\AppData\...\development_behavior_packs"
            className="max-w-xs"
          />
        </ItemActions>
      </Item>
    </form>
  );
}
