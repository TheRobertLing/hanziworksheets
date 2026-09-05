import { useShallow } from 'zustand/react/shallow'

import { useTemplateStore } from '../stores/template'

function useTemplateShowPinyin() {
  return useTemplateStore(
    useShallow((state) => ({
      showPinyin: state.showPinyin,
      setShowPinyin: state.setShowPinyin,
    }))
  )
}

export { useTemplateShowPinyin }
