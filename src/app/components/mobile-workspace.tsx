import { PencilIcon } from 'lucide-react'

import { DownloadWorksheetButton, GenerateWorksheetButton } from '@/core/generate'
import { WorksheetPreview } from '@/core/pdf-previewer'
import { ConfigPanel } from '@/core/config'
import { TooltipButton } from '@/shared/ui/composites/tooltip-button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/primitives/sheet'

function MobileWorkspace() {
  return (
    <main className="relative h-full min-h-0 bg-muted">
      <WorksheetPreview />

      <Sheet>
        <div className="absolute right-2 bottom-2 z-20">
          <TooltipButton
            tooltipProps={{ side: 'left', children: 'Edit worksheet configuration' }}
            buttonProps={{
              render: <SheetTrigger />,
              size: 'icon',
              'aria-label': 'Edit worksheet configuration',
              children: <PencilIcon />,
            }}
          />
        </div>

        <SheetContent
          side="right"
          className="bg-background data-[side=right]:w-[min(90vw,22.5rem)] sm:data-[side=right]:max-w-90"
        >
          <SheetHeader className="h-14 shrink-0 justify-center border-b px-3">
            <SheetTitle>Configuration</SheetTitle>
          </SheetHeader>

          <div className="min-h-0 flex-1">
            <ConfigPanel />
          </div>

          <SheetFooter className="shrink-0 border-t p-3">
            <div className="flex gap-2">
              <SheetClose render={<GenerateWorksheetButton className="min-w-0 flex-1" />} />
              <DownloadWorksheetButton />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </main>
  )
}

export { MobileWorkspace }
