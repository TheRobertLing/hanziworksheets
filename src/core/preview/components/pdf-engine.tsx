import type { ReactNode } from 'react'
import { EmbedPDF } from '@embedpdf/core/react'
import { usePdfiumEngine } from '@embedpdf/engines/react'

import { useMinDelay } from '@/shared/hooks/use-min-delay'
import { pdfEnginePlugins } from '../config/pdf-engine-plugins'
import { PdfEngineError } from './pdf-engine-error'
import { PdfEngineLoading } from './pdf-engine-loading'

interface PdfEngineProps {
  children: ReactNode
}

function PdfEngine({ children }: PdfEngineProps) {
  const { engine, isLoading, error: engineError } = usePdfiumEngine()
  const { ready: isReady } = useMinDelay(3000)

  if (engineError) {
    return <PdfEngineError error={engineError} />
  }

  if (isLoading || !engine || !isReady) {
    return <PdfEngineLoading />
  }

  return <EmbedPDF engine={engine} plugins={pdfEnginePlugins} children={children} />
}

export { PdfEngine }
