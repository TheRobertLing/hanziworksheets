import { useWorksheetGeneratorStore } from '../stores/worksheet-generator'

function useGeneratedWorksheet() {
  const worksheetBlob = useWorksheetGeneratorStore((state) => state.worksheetBlob)

  return { worksheetBlob }
}

export { useGeneratedWorksheet }
