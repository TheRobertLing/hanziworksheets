import { useShallow } from 'zustand/react/shallow'

import { useTemplateStore } from '../stores/template'

const DEFAULT_GRID_SIZE = useTemplateStore.getInitialState().gridSize

function useTemplateGridSize() {
  const { gridSize, setGridSize } = useTemplateStore(
    useShallow((state) => ({ gridSize: state.gridSize, setGridSize: state.setGridSize }))
  )

  return {
    gridSize,
    setGridSize,
    isDefaultGridSize: gridSize === DEFAULT_GRID_SIZE,
    resetGridSize: () => setGridSize(DEFAULT_GRID_SIZE),
  }
}

export { useTemplateGridSize }
