import { Download } from 'lucide-react'

import { TooltipButton } from '@/shared/ui/composites/tooltip-button'

interface WorksheetToolbarProps {
  url: string
}

function WorksheetToolbar({ url }: WorksheetToolbarProps) {
  return (
    <div
      role="toolbar"
      aria-label="Worksheet preview controls"
      className="absolute bottom-4 left-1/2 -translate-x-1/2"
    >
      <div className="flex animate-in items-center gap-2 duration-300 fade-in-0">
        <div className="flex items-center rounded-full border border-border bg-popover/70 shadow-lg backdrop-blur-sm">
          <TooltipButton
            tooltipProps={{ side: 'top', children: 'Download worksheet' }}
            buttonProps={{
              render: <a href={url} download="worksheet.pdf" />,
              nativeButton: false,
              variant: 'ghost',
              size: 'icon',
              'aria-label': 'Download worksheet',
              className: 'rounded-full',
              children: <Download />,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export { WorksheetToolbar }
