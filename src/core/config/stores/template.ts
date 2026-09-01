import type { GridStyle } from '@/lib/hanzi-worksheet-generator'
import { create } from 'zustand'

interface TemplateStore {
  showPinyin: boolean
  showStrokeGuide: boolean
  gridStyle: GridStyle
  gridSize: number
  setShowPinyin: (showPinyin: boolean) => void
  setShowStrokeGuide: (showStrokeGuide: boolean) => void
  setGridStyle: (gridStyle: GridStyle) => void
  setGridSize: (gridSize: number) => void
  reset: () => void
}

const useTemplateStore = create<TemplateStore>()((set) => ({
  showPinyin: true,
  showStrokeGuide: true,
  gridStyle: 'tian',
  gridSize: 20,

  setShowPinyin: (showPinyin) => set({ showPinyin }),
  setShowStrokeGuide: (showStrokeGuide) => set({ showStrokeGuide }),
  setGridStyle: (gridStyle) => set({ gridStyle }),
  setGridSize: (gridSize) => set({ gridSize }),
  reset: () =>
    set({
      showPinyin: true,
      showStrokeGuide: true,
      gridStyle: 'tian',
      gridSize: 20,
    }),
}))

export { useTemplateStore }
export type { GridStyle }
