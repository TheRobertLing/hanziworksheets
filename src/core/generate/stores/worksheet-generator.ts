import { create } from 'zustand'

type WorksheetGenerationStatus = 'idle' | 'loading' | 'success' | 'error'

interface WorksheetGeneratorStore {
  blob: Blob | null
  status: WorksheetGenerationStatus
  error: string | null
  begin: () => boolean
  succeed: (blob: Blob) => void
  fail: (error: string) => void
}

const useWorksheetGeneratorStore = create<WorksheetGeneratorStore>()((set, get) => ({
  blob: null,
  status: 'idle',
  error: null,
  begin: () => {
    if (get().status === 'loading') return false

    set({ status: 'loading', error: null })
    return true
  },
  succeed: (blob) => set({ blob, status: 'success', error: null }),
  fail: (error) => set({ status: 'error', error }),
}))

export { useWorksheetGeneratorStore }
export type { WorksheetGenerationStatus }
