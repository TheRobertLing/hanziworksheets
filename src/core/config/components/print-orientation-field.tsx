import { useShallow } from 'zustand/react/shallow'

import { Field, FieldContent, FieldLabel, FieldTitle } from '@/shared/ui/primitives/field'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/primitives/radio-group'

import { usePrintStore } from '../stores/print'

import type { Orientation } from '@/lib/hanzi-worksheet-generator/types'

function PrintOrientationField() {
  const { orientation, setOrientation } = usePrintStore(
    useShallow((state) => ({
      orientation: state.orientation,
      setOrientation: state.setOrientation,
    }))
  )

  return (
    <Field>
      <FieldLabel>Orientation</FieldLabel>
      <RadioGroup
        value={orientation}
        onValueChange={(value) => setOrientation(value as Orientation)}
      >
        <FieldLabel htmlFor="orient-portrait">
          <Field orientation="horizontal">
            <RadioGroupItem id="orient-portrait" value="portrait" />
            <FieldContent>
              <FieldTitle>Portrait</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="orient-landscape">
          <Field orientation="horizontal">
            <RadioGroupItem id="orient-landscape" value="landscape" />
            <FieldContent>
              <FieldTitle>Landscape</FieldTitle>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </Field>
  )
}

export { PrintOrientationField }
