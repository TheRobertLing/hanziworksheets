import { useShallow } from 'zustand/react/shallow'

import { useTemplateStore } from '../stores/template'

function useTemplateGridStyle() {
  return useTemplateStore(
    useShallow((state) => ({ gridStyle: state.gridStyle, setGridStyle: state.setGridStyle }))
  )
}

export { useTemplateGridStyle }
export type { GridStyle } from '../stores/template'
