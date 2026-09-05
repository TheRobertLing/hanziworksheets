import { useShallow } from 'zustand/react/shallow'

import { useTemplateStore } from '../stores/template'

function useTemplateShowStrokeGuide() {
  return useTemplateStore(
    useShallow((state) => ({
      showStrokeGuide: state.showStrokeGuide,
      setShowStrokeGuide: state.setShowStrokeGuide,
    }))
  )
}

export { useTemplateShowStrokeGuide }
