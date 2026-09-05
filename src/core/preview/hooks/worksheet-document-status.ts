import { useShallow } from 'zustand/react/shallow'

import { useWorksheetDocumentStore } from '../stores/document'

function useWorksheetDocumentStatus() {
  return useWorksheetDocumentStore(
    useShallow((state) => ({
      status: state.status,
      error: state.error,
      syncDocumentStatus: state.syncDocumentStatus,
    }))
  )
}

export { useWorksheetDocumentStatus }
