import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Switch } from '@/shared/ui/primitives/switch'

import { useTemplateShowPinyin } from '../hooks/template-show-pinyin'

function TemplateShowPinyinField() {
  const { showPinyin, setShowPinyin } = useTemplateShowPinyin()

  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="opt-pinyin">Show pinyin</FieldLabel>
      <Switch id="opt-pinyin" checked={showPinyin} onCheckedChange={setShowPinyin} />
    </Field>
  )
}

export { TemplateShowPinyinField }
