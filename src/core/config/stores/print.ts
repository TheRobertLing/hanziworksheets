import { create } from 'zustand'

import type { Orientation, Paper } from '@/lib/hanzi-worksheet-generator'

interface PrintSettingsStore {
  paper: Paper
  orientation: Orientation
  margin: number
  setPaper: (paper: Paper) => void
  setOrientation: (orientation: Orientation) => void
  setMargin: (margin: number) => void
}

const usePrintSettingsStore = create<PrintSettingsStore>()((set) => ({
  paper: 'A4',
  orientation: 'portrait',
  margin: 12.7,

  setPaper: (paper) => set({ paper }),
  setOrientation: (orientation) => set({ orientation }),
  setMargin: (margin) => set({ margin }),
}))

export { usePrintSettingsStore }
