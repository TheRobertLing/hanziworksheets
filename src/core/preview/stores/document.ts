import { create } from 'zustand'

type WorksheetDocumentStatus = 'idle' | 'loading' | 'loaded' | 'error'

interface WorksheetDocumentStore {
  documentUrl: string | null
  status: WorksheetDocumentStatus
  error: string | null
  setDocumentUrl: (documentUrl: string) => void
  clearDocumentUrl: (documentUrl: string) => void
  syncDocumentStatus: (status: WorksheetDocumentStatus, error: string | null) => void
}

const useWorksheetDocumentStore = create<WorksheetDocumentStore>()((set, get) => ({
  documentUrl: null,
  status: 'idle',
  error: null,

  setDocumentUrl: (documentUrl) => {
    const previousDocumentUrl = get().documentUrl
    if (previousDocumentUrl) URL.revokeObjectURL(previousDocumentUrl)

    set({ documentUrl, status: 'loading', error: null })
  },

  clearDocumentUrl: (documentUrl) => {
    if (get().documentUrl !== documentUrl) return

    URL.revokeObjectURL(documentUrl)
    set({ documentUrl: null, status: 'idle', error: null })
  },
  syncDocumentStatus: (status, error) => set({ status, error }),
}))

export { useWorksheetDocumentStore }
export type { WorksheetDocumentStatus }
