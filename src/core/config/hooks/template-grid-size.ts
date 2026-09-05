import { useShallow } from 'zustand/react/shallow'

import { useTemplateStore } from '../stores/template'

function useTemplateGridSize() {
  return useTemplateStore(
    useShallow((state) => ({ gridSize: state.gridSize, setGridSize: state.setGridSize }))
  )
}

export { useTemplateGridSize }
