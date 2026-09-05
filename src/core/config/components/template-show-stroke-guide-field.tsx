import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Switch } from '@/shared/ui/primitives/switch'

import { useTemplateShowStrokeGuide } from '../hooks/template-show-stroke-guide'

function TemplateShowStrokeGuideField() {
  const { showStrokeGuide, setShowStrokeGuide } = useTemplateShowStrokeGuide()

  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="opt-stroke">Stroke order guide</FieldLabel>
      <Switch id="opt-stroke" checked={showStrokeGuide} onCheckedChange={setShowStrokeGuide} />
    </Field>
  )
}

export { TemplateShowStrokeGuideField }
