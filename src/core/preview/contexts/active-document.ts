import { createContext, use } from 'react'

interface ActiveDocumentContextValue {
  documentId: string | null
  retryDocument: () => void
}

const ActiveDocumentContext = createContext<ActiveDocumentContextValue | null>(null)

function useActiveDocument() {
  const contextValue = use(ActiveDocumentContext)

  if (!contextValue) {
    throw new Error('useActiveDocument must be used within an ActiveDocumentProvider')
  }

  return contextValue
}

function useDocumentId() {
  const { documentId } = useActiveDocument()

  if (!documentId) {
    throw new Error('useDocumentId must be used within a loaded document')
  }

  return { documentId }
}

export { ActiveDocumentContext, useActiveDocument, useDocumentId }
export type { ActiveDocumentContextValue }
