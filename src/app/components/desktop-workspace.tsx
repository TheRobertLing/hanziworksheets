import { GenerateWorksheetButton } from '@/core/generate'
import { WorksheetPreview } from '@/core/preview'
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
        <div className="shrink-0 border-t p-3">
          <GenerateWorksheetButton />
        </div>
      </div>
    </main>
  )
}

export { DesktopWorkspace }
