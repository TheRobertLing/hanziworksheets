import type { ReactNode } from 'react'
import { EmbedPDF } from '@embedpdf/core/react'
import { usePdfiumEngine } from '@embedpdf/engines/react'

import { pdfEnginePlugins } from '../config/pdf-engine-plugins'
import { PdfEngineError } from './pdf-engine-error'
import { PdfEngineLoading } from './pdf-engine-loading'

interface PdfEngineProps {
  children: ReactNode
}

function PdfEngine({ children }: PdfEngineProps) {
  const { engine, isLoading, error: engineError } = usePdfiumEngine()

  if (engineError) {
    return <PdfEngineError error={engineError} />
  }

  if (isLoading || !engine) {
    return <PdfEngineLoading />
  }

  return <EmbedPDF engine={engine} plugins={pdfEnginePlugins} children={children} />
}

export { PdfEngine }
