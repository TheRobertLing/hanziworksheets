import { useShallow } from 'zustand/react/shallow'

import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Switch } from '@/shared/ui/primitives/switch'

import { useTemplateStore } from '../stores/template'

function TemplateShowStrokeGuideField() {
  const { showStrokeGuide, setShowStrokeGuide } = useTemplateStore(
    useShallow((state) => ({
      showStrokeGuide: state.showStrokeGuide,
      setShowStrokeGuide: state.setShowStrokeGuide,
    }))
  )

  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="opt-stroke">Stroke order guide</FieldLabel>
      <Switch id="opt-stroke" checked={showStrokeGuide} onCheckedChange={setShowStrokeGuide} />
    </Field>
  )
}

export { TemplateShowStrokeGuideField }
