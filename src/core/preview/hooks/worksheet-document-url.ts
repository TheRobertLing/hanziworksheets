import { useShallow } from 'zustand/react/shallow'

import { useWorksheetDocumentStore } from '../stores/document'

function useWorksheetDocumentUrl() {
  return useWorksheetDocumentStore(
    useShallow((state) => ({
      documentUrl: state.documentUrl,
      setDocumentUrl: state.setDocumentUrl,
      clearDocumentUrl: state.clearDocumentUrl,
    }))
  )
}

export { useWorksheetDocumentUrl }
