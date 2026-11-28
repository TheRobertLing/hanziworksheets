import { useShallow } from 'zustand/react/shallow'

import { useWorksheetGeneratorStore } from '../stores/worksheet-generator'

function useGeneratedWorksheet() {
  return useWorksheetGeneratorStore(
    useShallow((state) => ({
      worksheetBlob: state.worksheetBlob,
      worksheetUrl: state.worksheetUrl,
    }))
  )
}

export { useGeneratedWorksheet }
