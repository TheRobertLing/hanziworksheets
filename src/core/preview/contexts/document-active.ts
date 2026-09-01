import { createContext, use } from 'react'

interface ActiveDocumentValue {
  documentId: string | null
  retry: () => void
}

const ActiveDocumentContext = createContext<ActiveDocumentValue | null>(null)

function useActiveDocument() {
  const value = use(ActiveDocumentContext)

  if (!value) {
    throw new Error('useActiveDocument must be used within an ActiveDocumentProvider')
  }

  return value
}

function useDocumentId() {
  const { documentId } = useActiveDocument()

  if (!documentId) {
    throw new Error('useDocumentId must be used within a loaded document')
  }

  return documentId
}

export { ActiveDocumentContext, useActiveDocument, useDocumentId }
export type { ActiveDocumentValue }
