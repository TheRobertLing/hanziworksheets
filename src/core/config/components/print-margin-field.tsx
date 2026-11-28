import { RotateCcwIcon } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Slider } from '@/shared/ui/primitives/slider'

import { usePrintMargin } from '../hooks/print-margin'

function PrintMarginField() {
  const { margin, setMargin, isDefaultMargin, resetMargin } = usePrintMargin()

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="margin">Page margin</FieldLabel>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          disabled={isDefaultMargin}
          onClick={resetMargin}
        >
          <RotateCcwIcon data-icon="inline-start" />
          Reset
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-14 shrink-0 text-muted-foreground tabular-nums">{margin} mm</span>
        <Slider
          id="margin"
          aria-label="Page margin in millimetres"
          className="flex-1"
          min={6}
          max={50}
          step={0.1}
          value={[margin]}
          onValueChange={(value) => setMargin(Array.isArray(value) ? value[0] : value)}
        />
      </div>
    </Field>
  )
}

export { PrintMarginField }
