import Activitybar from "./components/layout/activitybar";
import { FileTree } from "./components/layout/file-tree";
import { Navigationbar } from "./components/layout/navigationbar";
import Titlebar from "./components/layout/titlebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

export default function App() {
  return (
    <main className="w-screen h-screen grid grid-rows-[auto_1fr]">
      <Titlebar />
      <ResizablePanelGroup
        orientation="horizontal"
        className="w-full h-full border"
      >
        <ResizablePanel defaultSize="25%">
          <div className="grid grid-cols-[auto_1fr] h-full">
            <Activitybar />
            <FileTree />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="25%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">File</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="75%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Terminal</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
