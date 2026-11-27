import { useShallow } from 'zustand/react/shallow'

import { usePrintSettingsStore } from '../stores/print'

const DEFAULT_MARGIN = usePrintSettingsStore.getInitialState().margin

function usePrintMargin() {
  const { margin, setMargin } = usePrintSettingsStore(
    useShallow((state) => ({ margin: state.margin, setMargin: state.setMargin }))
  )

  return {
    margin,
    setMargin,
    isDefaultMargin: margin === DEFAULT_MARGIN,
    resetMargin: () => setMargin(DEFAULT_MARGIN),
  }
}

export { usePrintMargin }
