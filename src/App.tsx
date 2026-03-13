import Activitybar from "./components/layout/activitybar";
import { FileTree } from "./components/layout/file-tree";
import { BreadcrumbBar } from "./components/layout/breadcrumb";
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
              <div className="grid grid-rows-[auto_1fr] w-full h-full">
                <BreadcrumbBar />
                <div className="flex font-semibold w-full h-full justify-center items-center">
                  File
                </div>
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
