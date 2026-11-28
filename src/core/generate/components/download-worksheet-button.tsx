import { Download } from 'lucide-react'

import { TooltipButton } from '@/shared/ui/composites/tooltip-button'
import { useWorksheetGeneration } from '../hooks/worksheet-generation'

function DownloadWorksheetButton() {
  const { worksheetUrl, isGenerating } = useWorksheetGeneration()
  const canDownload = Boolean(worksheetUrl) && !isGenerating

  return (
    <TooltipButton
      tooltipProps={{ side: 'top', children: 'Download worksheet' }}
      buttonProps={{
        ...(canDownload && worksheetUrl
          ? {
              render: <a href={worksheetUrl} download="worksheet.pdf" />,
              nativeButton: false,
            }
          : { disabled: true }),
        variant: 'outline',
        size: 'icon',
        'aria-label': 'Download worksheet',
        className: 'shrink-0',
        children: <Download />,
      }}
    />
  )
}

export { DownloadWorksheetButton }
