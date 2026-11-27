import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { TemplateGridSizeField } from './template-grid-size-field'
import { TemplateGridStyleField } from './template-grid-style-field'
import { TemplateShowPinyinField } from './template-show-pinyin-field'
import { TemplateShowStrokeGuideField } from './template-show-stroke-guide-field'
import { TemplateSelectionField } from './template-selection-field'

function TemplateSettings() {
  return (
    <FieldGroup>
      <TemplateSelectionField />
      <FieldSeparator />
      <TemplateShowPinyinField />
      <TemplateShowStrokeGuideField />
      <FieldSeparator />
      <TemplateGridStyleField />
      <FieldSeparator />
      <TemplateGridSizeField />
    </FieldGroup>
  )
}

export { TemplateSettings }
