import { Field, FieldContent, FieldLabel, FieldTitle } from '@/shared/ui/primitives/field'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/primitives/radio-group'

import { usePrintPaperSize } from '../hooks/print-paper-size'

function PrintPaperSizeField() {
  const { paper, setPaper } = usePrintPaperSize()

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
