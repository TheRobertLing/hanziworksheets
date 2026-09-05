import type { ReactNode } from 'react'
import { DocumentContent } from '@embedpdf/plugin-document-manager/react'

import { useWorksheetGeneration } from '@/core/generate'
import { useMinDelay } from '@/shared/hooks/use-min-delay'
import { useActiveDocument } from '../contexts/document-active'
import { useWorksheetDocument } from '../hooks/worksheet-document'
import { DocumentEmpty } from './document-empty'
import { DocumentError } from './document-error'
import { DocumentLoading } from './document-loading'

interface DocumentProps {
  children: ReactNode
}

function Document({ children }: DocumentProps) {
  const { documentId, retry: retryDocument } = useActiveDocument()
  const { error, isGenerating, isGenerationError, canGenerate, generate } = useWorksheetGeneration()
  const { error: documentError } = useWorksheetDocument()
  const { ready } = useMinDelay(1000, 200, documentId)

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
                  ? (error ?? 'Could not generate worksheet')
                  : (documentError ?? 'Could not load specified PDF')
              }
              onRetry={isGenerationError ? generate : retryDocument}
              retryDisabled={isGenerationError && (!canGenerate || isGenerating)}
            />
          )
        }

        if (isLoading || isGenerating || !ready) {
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
