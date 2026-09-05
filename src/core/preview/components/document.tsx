import type { ReactNode } from 'react'
import { DocumentContent } from '@embedpdf/plugin-document-manager/react'

import { useWorksheetGeneration } from '@/core/generate'
import { useMinDelay } from '@/shared/hooks/use-min-delay'
import { useActiveDocument } from '../contexts/active-document'
import { useWorksheetDocumentStatus } from '../hooks/worksheet-document-status'
import { DocumentEmpty } from './document-empty'
import { DocumentError } from './document-error'
import { DocumentLoading } from './document-loading'

interface DocumentProps {
  children: ReactNode
}

function Document({ children }: DocumentProps) {
  const { documentId, retryDocument } = useActiveDocument()
  const {
    error: generationError,
    isGenerating,
    isGenerationError,
    canGenerate,
    generate,
  } = useWorksheetGeneration()
  const { error: documentError } = useWorksheetDocumentStatus()
  const { ready: isReady } = useMinDelay(1000, 200, documentId)

  if (!documentId) {
    return <DocumentEmpty />
  }

  return (
    <DocumentContent documentId={documentId}>
      {({ isLoaded, isError, isLoading }) => {
        if (isError || isGenerationError) {
          return (
            <DocumentError
              error={
                isGenerationError
                  ? (generationError ?? 'Could not generate worksheet')
                  : (documentError ?? 'Could not load specified PDF')
              }
              onRetry={isGenerationError ? generate : retryDocument}
              retryDisabled={isGenerationError && (!canGenerate || isGenerating)}
            />
          )
        }

        if (isLoading || isGenerating || !isReady) {
          return <DocumentLoading description="Loading worksheet preview" />
        }

        if (isLoaded) {
          return children
        }

        return null
      }}
    </DocumentContent>
  )
}

export { Document }
