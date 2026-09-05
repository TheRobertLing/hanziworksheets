import { useShallow } from 'zustand/react/shallow'

import { usePrintSettingsStore } from '../stores/print'

function usePrintOrientation() {
  return usePrintSettingsStore(
    useShallow((state) => ({
      orientation: state.orientation,
      setOrientation: state.setOrientation,
    }))
  )
}

export { usePrintOrientation }
