import type { ReactNode } from 'react'

import { ActiveDocumentContext } from '../contexts/active-document'
import { useActiveWorksheetDocument } from '../hooks/active-worksheet-document'
import { Document } from './document'

interface DocumentManagerProps {
  children: ReactNode
}

function DocumentManager({ children }: DocumentManagerProps) {
  const { activeDocumentId, retryDocument } = useActiveWorksheetDocument()

  return (
    <ActiveDocumentContext value={{ documentId: activeDocumentId, retryDocument }}>
      <Document>{children}</Document>
    </ActiveDocumentContext>
  )
}

export { DocumentManager }
