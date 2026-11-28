import { RotateCcwIcon } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Slider } from '@/shared/ui/primitives/slider'

import { useTemplateGridSize } from '../hooks/template-grid-size'

function TemplateGridSizeField() {
  const { gridSize, setGridSize, isDefaultGridSize, resetGridSize } = useTemplateGridSize()

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="grid-size">Grid size</FieldLabel>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          disabled={isDefaultGridSize}
          onClick={resetGridSize}
        >
          <RotateCcwIcon data-icon="inline-start" />
          Reset
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-14 shrink-0 text-muted-foreground tabular-nums">{gridSize} mm</span>
        <Slider
          id="grid-size"
          aria-label="Grid size in millimetres"
          className="flex-1"
          min={10}
          max={40}
          value={[gridSize]}
          onValueChange={(value) => setGridSize(Array.isArray(value) ? value[0] : value)}
        />
      </div>
    </Field>
  )
}

export { TemplateGridSizeField }
