import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { TemplateGridSizeField } from './template-grid-size-field'
import { TemplateGridStyleField } from './template-grid-style-field'
import { TemplateResetButton } from './template-reset-button'
import { TemplateShowPinyinField } from './template-show-pinyin-field'
import { TemplateShowStrokeGuideField } from './template-show-stroke-guide-field'
import { TemplateChoiceField } from './template-choice-field'

function Template() {
  return (
    <FieldGroup className="gap-3 p-1">
      <TemplateChoiceField />
      <FieldSeparator />
      <TemplateShowPinyinField />
      <TemplateShowStrokeGuideField />
      <FieldSeparator />
      <TemplateGridStyleField />
      <FieldSeparator />
      <TemplateGridSizeField />
      <FieldSeparator />
      <TemplateResetButton />
    </FieldGroup>
  )
}

export { Template }
