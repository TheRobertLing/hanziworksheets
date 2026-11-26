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
        <div className="absolute right-4 bottom-4 z-20 flex items-center rounded-full bg-popover/70 shadow-lg backdrop-blur-sm">
          <TooltipButton
            tooltipProps={{ side: 'left', children: 'Edit worksheet configuration' }}
            buttonProps={{
              render: <SheetTrigger />,
              variant: 'outline',
              size: 'icon',
              className: 'rounded-full',
              'aria-label': 'Edit worksheet configuration',
              children: <PencilIcon />,
            }}
          />
        </div>

        <SheetContent
          side="right"
          className="data-[side=right]:w-[min(90vw,22.5rem)] sm:data-[side=right]:max-w-90"
        >
          <SheetHeader className="h-14 shrink-0 justify-center border-b">
            <SheetTitle>Configuration</SheetTitle>
          </SheetHeader>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="h-fit min-h-full border-r">
              <ConfigPanel />
            </div>
          </div>

          <SheetFooter className="shrink-0 border-t p-1.5">
            <div className="flex gap-1.5">
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
