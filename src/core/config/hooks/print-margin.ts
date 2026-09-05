import { useShallow } from 'zustand/react/shallow'

import { usePrintSettingsStore } from '../stores/print'

function usePrintMargin() {
  return usePrintSettingsStore(
    useShallow((state) => ({ margin: state.margin, setMargin: state.setMargin }))
  )
}

export { usePrintMargin }
