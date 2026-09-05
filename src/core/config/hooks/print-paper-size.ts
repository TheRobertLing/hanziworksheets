import { useShallow } from 'zustand/react/shallow'

import { usePrintSettingsStore } from '../stores/print'

function usePrintPaperSize() {
  return usePrintSettingsStore(
    useShallow((state) => ({ paper: state.paper, setPaper: state.setPaper }))
  )
}

export { usePrintPaperSize }
