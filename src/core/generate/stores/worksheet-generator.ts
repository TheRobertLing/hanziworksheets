import { create } from 'zustand'

type WorksheetGenerationStatus = 'idle' | 'loading' | 'success' | 'error'

interface WorksheetGeneratorStore {
  worksheetBlob: Blob | null
  worksheetUrl: string | null
  status: WorksheetGenerationStatus
  error: string | null
  startGeneration: () => boolean
  completeGeneration: (worksheetBlob: Blob) => void
  failGeneration: (error: string) => void
}

const useWorksheetGeneratorStore = create<WorksheetGeneratorStore>()((set, get) => ({
  worksheetBlob: null,
  worksheetUrl: null,
  status: 'idle',
  error: null,
  startGeneration: () => {
    if (get().status === 'loading') return false

    set({ status: 'loading', error: null })
    return true
  },
  completeGeneration: (worksheetBlob) => {
    const previousWorksheetUrl = get().worksheetUrl
    if (previousWorksheetUrl) URL.revokeObjectURL(previousWorksheetUrl)

    set({
      worksheetBlob,
      worksheetUrl: URL.createObjectURL(worksheetBlob),
      status: 'success',
      error: null,
    })
  },
  failGeneration: (error) => set({ status: 'error', error }),
}))

export { useWorksheetGeneratorStore }
export type { WorksheetGenerationStatus }
