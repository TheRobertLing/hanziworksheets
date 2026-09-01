import { ZoomIn, ZoomOut } from 'lucide-react'

import { TextTooltip } from '@/shared/ui/composites/text-tooltip'
import { TooltipButton } from '@/shared/ui/composites/tooltip-button'
import { useWorksheetZoom } from '../hooks/document-zoom'

function DocumentZoomControls() {
  const { zoomLevel, zoomIn, zoomOut } = useWorksheetZoom()

  return (
    <div className="flex items-center">
      <TooltipButton
        tooltipProps={{ side: 'top', children: 'Zoom out' }}
        buttonProps={{
          variant: 'ghost',
          size: 'icon',
          'aria-label': 'Zoom out',
          className: 'rounded-l-full rounded-r-none',
          onClick: zoomOut,
          children: <ZoomOut className="translate-x-px" />,
        }}
      />
      <TextTooltip
        tooltipProps={{ side: 'top', children: 'Zoom' }}
        textProps={{
          variant: 'ghost',
          className: 'w-14 rounded-none tabular-nums',
          children: `${Math.round(zoomLevel * 100)}%`,
        }}
      />

      <TooltipButton
        tooltipProps={{ side: 'top', children: 'Zoom in' }}
        buttonProps={{
          variant: 'ghost',
          size: 'icon',
          'aria-label': 'Zoom in',
          className: 'rounded-r-full rounded-l-none',
          onClick: zoomIn,
          children: <ZoomIn className="-translate-x-px" />,
        }}
      />
    </div>
  )
}

export { DocumentZoomControls }
