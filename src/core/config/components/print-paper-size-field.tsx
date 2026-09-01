import { useShallow } from 'zustand/react/shallow'

import { Field, FieldContent, FieldLabel, FieldTitle } from '@/shared/ui/primitives/field'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/primitives/radio-group'

import { usePrintStore } from '../stores/print'

function PrintPaperSizeField() {
  const { paper, setPaper } = usePrintStore(
    useShallow((state) => ({ paper: state.paper, setPaper: state.setPaper }))
  )

  return (
    <Field>
      <FieldLabel>Paper size</FieldLabel>
      <RadioGroup value={paper} onValueChange={(value) => setPaper(value)}>
        <FieldLabel htmlFor="paper-a4">
          <Field orientation="horizontal">
            <RadioGroupItem id="paper-a4" value="A4" />
            <FieldContent>
              <FieldTitle>A4</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>

        <FieldLabel htmlFor="paper-letter">
          <Field orientation="horizontal">
            <RadioGroupItem id="paper-letter" value="LETTER" />
            <FieldContent>
              <FieldTitle>Letter</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </Field>
  )
}

export { PrintPaperSizeField }
