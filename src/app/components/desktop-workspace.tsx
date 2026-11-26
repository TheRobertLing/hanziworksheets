import { DownloadWorksheetButton, GenerateWorksheetButton } from '@/core/generate'
import { WorksheetPreview } from '@/core/pdf-previewer'
import { ConfigPanel } from '@/core/config'

function DesktopWorkspace() {
  return (
    <main className="flex h-full min-h-0">
      <div className="min-w-0 flex-1 bg-muted">
        <WorksheetPreview />
      </div>
      <div className="flex w-90 shrink-0 flex-col border-s">
        <div className="min-h-0 flex-1 scrollbar-gutter-stable overflow-y-auto overscroll-none">
          <div className="h-fit min-h-full border-r p-3">
            <ConfigPanel />
          </div>
        </div>
        <div className="flex shrink-0 gap-1.5 border-t p-1.5">
          <GenerateWorksheetButton className="min-w-0 flex-1" />
          <DownloadWorksheetButton />
        </div>
      </div>
    </main>
  )
}

export { DesktopWorkspace }
