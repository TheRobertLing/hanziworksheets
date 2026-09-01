import { useShallow } from 'zustand/react/shallow'

import { Field, FieldContent, FieldLabel, FieldTitle } from '@/shared/ui/primitives/field'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/primitives/radio-group'

import { useTemplateStore, type GridStyle } from '../stores/template'

function TemplateGridStyleField() {
  const { gridStyle, setGridStyle } = useTemplateStore(
    useShallow((state) => ({ gridStyle: state.gridStyle, setGridStyle: state.setGridStyle }))
  )

  return (
    <Field>
      <FieldLabel>Grid style</FieldLabel>
      <RadioGroup value={gridStyle} onValueChange={(value) => setGridStyle(value as GridStyle)}>
        <FieldLabel htmlFor="grid-tian">
          <Field orientation="horizontal">
            <RadioGroupItem id="grid-tian" value="tian" />
            <FieldContent>
              <FieldTitle>田</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>

        <FieldLabel htmlFor="grid-mi">
          <Field orientation="horizontal">
            <RadioGroupItem id="grid-mi" value="mi" />
            <FieldContent>
              <FieldTitle>米</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>

        <FieldLabel htmlFor="grid-blank">
          <Field orientation="horizontal">
            <RadioGroupItem id="grid-blank" value="blank" />
            <FieldContent>
              <FieldTitle>口</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </Field>
  )
}

export { TemplateGridStyleField }
