import type { ReactNode } from 'react'
import { DocumentContent } from '@embedpdf/plugin-document-manager/react'

import { useWorksheetGeneration } from '@/core/generate'
import { useMinDelay } from '@/shared/hooks/use-min-delay'
import { useActiveDocument } from '../contexts/document-active'
import { useWorksheetDocumentStore } from '../stores/document'
import { DocumentEmpty } from './document-empty'
import { DocumentError } from './document-error'
import { DocumentLoading } from './document-loading'

interface DocumentProps {
  children: ReactNode
}

function Document({ children }: DocumentProps) {
  const { documentId, retry: retryDocument } = useActiveDocument()
  const { status, error, isGenerating, canGenerate, generate } = useWorksheetGeneration()
  const documentError = useWorksheetDocumentStore((state) => state.error)
  const { ready } = useMinDelay(1000, 200, documentId)

  if (status === 'error') {
    return (
      <DocumentError
        error={error ?? 'Could not generate worksheet'}
        onRetry={generate}
        retryDisabled={!canGenerate || isGenerating}
      />
    )
  }

  if (status === 'loading') {
    return <DocumentLoading description="Generating worksheet" />
  }

  if (!documentId) {
    return <DocumentEmpty />
  }

  return (
    <DocumentContent documentId={documentId}>
      {({ isLoaded, isError, isLoading }) => {
        if (isError) {
          return (
            <DocumentError
              error={documentError ?? 'Could not load specified PDF'}
              onRetry={retryDocument}
            />
          )
        }

        if (isLoading || !ready) {
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
