import { create } from 'zustand'

import type { Orientation, Paper } from '@/lib/hanzi-worksheet-generator'

interface PrintStore {
  paper: Paper
  orientation: Orientation
  margin: number
  setPaper: (paper: Paper) => void
  setOrientation: (orientation: Orientation) => void
  setMargin: (margin: number) => void
  reset: () => void
}

const usePrintStore = create<PrintStore>()((set) => ({
  paper: 'A4',
  orientation: 'portrait',
  margin: 12.7,

  setPaper: (paper) => set({ paper }),
  setOrientation: (orientation) => set({ orientation }),
  setMargin: (margin) => set({ margin }),
  reset: () => set({ paper: 'A4', orientation: 'portrait', margin: 12.7 }),
}))

export { usePrintStore }
