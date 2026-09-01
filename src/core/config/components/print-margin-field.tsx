import { useShallow } from 'zustand/react/shallow'

import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Slider } from '@/shared/ui/primitives/slider'

import { usePrintStore } from '../stores/print'

function PrintMarginField() {
  const { margin, setMargin } = usePrintStore(
    useShallow((state) => ({ margin: state.margin, setMargin: state.setMargin }))
  )

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="margin">Page margin</FieldLabel>
        <span className="text-muted-foreground tabular-nums">{margin} mm</span>
      </div>
      <Slider
        id="margin"
        aria-label="Page margin in millimetres"
        min={6}
        max={50}
        step={0.1}
        value={[margin]}
        onValueChange={(value) => setMargin(Array.isArray(value) ? value[0] : value)}
      />
    </Field>
  )
}

export { PrintMarginField }
