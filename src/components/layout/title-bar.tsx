import { Menubar } from "../ui/menubar";
import { MenuOptions } from "./menu-options";
import { WindowActions } from "./window-actions";

export default function TitleBar() {
  return (
    <Menubar className="flex pl-3 flex-row h-fit w-screen items-center justify-between rounded-none">
      <div className="flex flex-row gap-4 items-center">
        <img src="/logo.svg" className="w-4 h-4" />
        <MenuOptions />
      </div>
      <WindowActions />
    </Menubar>
  );
}
