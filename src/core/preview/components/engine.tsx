import type { ReactNode } from 'react'
import { EmbedPDF } from '@embedpdf/core/react'
import { usePdfiumEngine } from '@embedpdf/engines/react'

import { useMinDelay } from '@/shared/hooks/use-min-delay'
import { plugins } from '../config/engine-plugins'
import { EngineError } from './engine-error'
import { EngineLoading } from './engine-loading'

interface PdfEngineProps {
  children: ReactNode
}

function PdfEngine({ children }: PdfEngineProps) {
  const { engine, isLoading, error } = usePdfiumEngine()
  const { ready } = useMinDelay(3000)

  if (error) {
    return <EngineError error={error} />
  }

  if (isLoading || !engine || !ready) {
    return <EngineLoading />
  }

  return <EmbedPDF engine={engine} plugins={plugins} children={children} />
}

export { PdfEngine }
