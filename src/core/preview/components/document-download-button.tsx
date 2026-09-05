import { Download } from 'lucide-react'
import { useExport } from '@embedpdf/plugin-export/react'

import { TooltipButton } from '@/shared/ui/composites/tooltip-button'
import { useDocumentId } from '../contexts/active-document'

function DocumentDownloadButton() {
  const { documentId } = useDocumentId()
  const { provides: exporter } = useExport(documentId)

  return (
    <TooltipButton
      tooltipProps={{ side: 'top', children: 'Download worksheet' }}
      buttonProps={{
        variant: 'ghost',
        size: 'icon',
        'aria-label': 'Download worksheet',
        className: 'rounded-full',
        onClick: () => exporter?.download(),
        children: <Download />,
      }}
    />
  )
}

export { DocumentDownloadButton }
