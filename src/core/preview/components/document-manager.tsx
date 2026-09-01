import type { ReactNode } from 'react'

import { ActiveDocumentContext } from '../contexts/document-active'
import { useActiveWorksheet } from '../hooks/document-active-worksheet'
import { Document } from './document'

interface DocumentManagerProps {
  children: ReactNode
}

function DocumentManager({ children }: DocumentManagerProps) {
  const { activeDocumentId, retry } = useActiveWorksheet()

  return (
    <ActiveDocumentContext value={{ documentId: activeDocumentId, retry }}>
      <Document>{children}</Document>
    </ActiveDocumentContext>
  )
}

export { DocumentManager }
