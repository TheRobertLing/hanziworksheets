import { useTemplateStore } from '../stores/template'

function useTemplateReset() {
  const reset = useTemplateStore((state) => state.reset)

  return { reset }
}

export { useTemplateReset }
