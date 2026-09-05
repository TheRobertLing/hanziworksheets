import { usePrintSettingsStore } from '../stores/print'

function usePrintReset() {
  const reset = usePrintSettingsStore((state) => state.reset)

  return { reset }
}

export { usePrintReset }
