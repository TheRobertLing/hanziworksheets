import { useShallow } from 'zustand/react/shallow'

import { useWorksheetGeneratorStore } from '../stores/worksheet-generator'

function useWorksheetGenerationStatus() {
  return useWorksheetGeneratorStore(
    useShallow((state) => ({
      status: state.status,
      error: state.error,
      startGeneration: state.startGeneration,
      completeGeneration: state.completeGeneration,
      failGeneration: state.failGeneration,
    }))
  )
}

export { useWorksheetGenerationStatus }
