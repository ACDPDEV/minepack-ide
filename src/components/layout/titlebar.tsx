import { Menubar } from "../ui/menubar";
import { MenuOptions } from "./menu-options";
import { WindowActions } from "./window-actions";

export default function Titlebar() {
  return (
    <Menubar className="flex flex-row h-fit w-screen items-center justify-between rounded-none">
      <div className="flex flex-row gap-4 items-center">
        <h1 className="font-bold text-sm">Minepack IDE</h1>
        <MenuOptions />
      </div>
      <WindowActions />
    </Menubar>
  );
}
