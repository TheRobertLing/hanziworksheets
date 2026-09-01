import { create } from 'zustand'

type WorksheetPDFStatus = 'idle' | 'loading' | 'loaded' | 'error'

interface WorksheetDocumentStore {
  url: string | null
  status: WorksheetPDFStatus
  error: string | null
  setUrl: (url: string) => void
  clearUrl: (url: string) => void
  sync: (status: WorksheetPDFStatus, error: string | null) => void
}

const useWorksheetDocumentStore = create<WorksheetDocumentStore>()((set, get) => ({
  url: null,
  status: 'idle',
  error: null,

  setUrl: (url) => {
    const previousUrl = get().url
    if (previousUrl) URL.revokeObjectURL(previousUrl)

    set({ url, status: 'loading', error: null })
  },

  clearUrl: (url) => {
    if (get().url !== url) return

    URL.revokeObjectURL(url)
    set({ url: null, status: 'idle', error: null })
  },
  sync: (status, error) => set({ status, error }),
}))

export { useWorksheetDocumentStore }
export type { WorksheetPDFStatus }
