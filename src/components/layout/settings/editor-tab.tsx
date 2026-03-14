import useEditorState from "@/stores/editor-state";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function EditorTab() {
  const tab_size = useEditorState((s) => s.tab_size);
  const word_wrap = useEditorState((s) => s.word_wrap);
  const line_numbers = useEditorState((s) => s.line_numbers);
  const rulers = useEditorState((s) => s.rulers);
  const minimap = useEditorState((s) => s.minimap);
  const set_tab_size = useEditorState((s) => s.set_tab_size);
  const set_word_wrap = useEditorState((s) => s.set_word_wrap);
  const set_line_numbers = useEditorState((s) => s.set_line_numbers);
  const set_rulers = useEditorState((s) => s.set_rulers);
  const set_minimap = useEditorState((s) => s.set_minimap);

  return (
    <form className="h-full w-full bg-accent border-t border-border flex flex-col p-12 gap-4">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Tab Size</ItemTitle>
          <ItemDescription>
            Number of spaces inserted when pressing the Tab key. Common values
            are 2 for web projects and 4 for most other languages.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Input
            id="tab_size"
            type="number"
            min={1}
            max={8}
            value={tab_size}
            onChange={(e) => set_tab_size(Number(e.target.value))}
            className="max-w-xs"
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Word Wrap</ItemTitle>
          <ItemDescription>
            Wrap long lines to fit within the editor window instead of
            requiring horizontal scrolling.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="word_wrap"
            checked={word_wrap}
            onCheckedChange={set_word_wrap}
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Line Numbers</ItemTitle>
          <ItemDescription>
            Show line numbers on the left side of the editor. Useful for
            navigating large files and referencing specific lines.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="line_numbers"
            checked={line_numbers}
            onCheckedChange={set_line_numbers}
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Rulers</ItemTitle>
          <ItemDescription>
            Display vertical guide lines at a fixed column width to help keep
            your code within a consistent line length.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="rulers"
            checked={rulers}
            onCheckedChange={set_rulers}
          />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Minimap</ItemTitle>
          <ItemDescription>
            Show a condensed overview of the file on the right side of the
            editor. Useful for quickly navigating large files.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch
            id="minimap"
            checked={minimap}
            onCheckedChange={set_minimap}
          />
        </ItemActions>
      </Item>
    </form>
  );
}
