import { PencilIcon } from 'lucide-react'

import { GenerateWorksheetButton } from '@/core/generate'
import { Preview } from '@/core/preview'
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
      <Preview />

      <Sheet>
        <div className="absolute right-4 bottom-4 z-20 flex items-center rounded-full bg-popover/70 shadow-lg backdrop-blur-sm">
          <TooltipButton
            tooltipProps={{ side: 'left', children: 'Edit worksheet configuration' }}
            buttonProps={{
              render: <SheetTrigger />,
              variant: 'ghost',
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

          <div className="min-h-0 flex-1 scrollbar-gutter-stable overflow-y-auto">
            <div className="h-fit min-h-full border-r p-3">
              <ConfigPanel />
            </div>
          </div>

          <SheetFooter className="shrink-0 border-t p-3">
            <SheetClose render={<GenerateWorksheetButton />} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </main>
  )
}

export { MobileWorkspace }
