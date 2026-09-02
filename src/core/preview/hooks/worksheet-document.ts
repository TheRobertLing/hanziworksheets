import { useShallow } from 'zustand/react/shallow'

import { useWorksheetDocumentStore } from '../stores/document'

function useWorksheetDocument() {
  return useWorksheetDocumentStore(
    useShallow((state) => ({
      url: state.url,
      status: state.status,
      error: state.error,
      setUrl: state.setUrl,
      clearUrl: state.clearUrl,
      sync: state.sync,
    }))
  )
}

export { useWorksheetDocument }
