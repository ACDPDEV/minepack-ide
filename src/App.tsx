import ActivityBar from "./components/layout/activity-bar";
import { FileTree } from "./components/layout/file-tree";
import { BreadcrumbBar } from "./components/layout/breadcrumb";
import TitleBar from "./components/layout/title-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import StatusBar from "./components/layout/status-bar";
import { FileBar } from "./components/layout/file-bar";

export default function App() {
  return (
    <main className="w-screen h-screen grid grid-rows-[auto_1fr_auto]">
      <TitleBar />
      <ResizablePanelGroup
        orientation="horizontal"
        className="w-full h-full border"
      >
        <ResizablePanel defaultSize="25%">
          <div className="grid grid-cols-[auto_1fr] h-full">
            <ActivityBar />
            <FileTree />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="25%">
              <div className="grid grid-rows-[auto_auto_1fr] w-full h-full">
                <FileBar />
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
      <StatusBar />
    </main>
  );
}
