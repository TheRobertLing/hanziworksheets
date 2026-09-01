import { useShallow } from 'zustand/react/shallow'

import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Switch } from '@/shared/ui/primitives/switch'

import { useTemplateStore } from '../stores/template'

function TemplateShowPinyinField() {
  const { showPinyin, setShowPinyin } = useTemplateStore(
    useShallow((state) => ({
      showPinyin: state.showPinyin,
      setShowPinyin: state.setShowPinyin,
    }))
  )

  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="opt-pinyin">Show pinyin</FieldLabel>
      <Switch id="opt-pinyin" checked={showPinyin} onCheckedChange={setShowPinyin} />
    </Field>
  )
}

export { TemplateShowPinyinField }
