import { useShallow } from 'zustand/react/shallow'

import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Slider } from '@/shared/ui/primitives/slider'

import { useTemplateStore } from '../stores/template'

function TemplateGridSizeField() {
  const { gridSize, setGridSize } = useTemplateStore(
    useShallow((state) => ({ gridSize: state.gridSize, setGridSize: state.setGridSize }))
  )

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="grid-size">Grid size</FieldLabel>
        <span className="text-muted-foreground tabular-nums">{gridSize} mm</span>
      </div>
      <Slider
        id="grid-size"
        aria-label="Grid size in millimetres"
        min={10}
        max={40}
        value={[gridSize]}
        onValueChange={(value) => setGridSize(Array.isArray(value) ? value[0] : value)}
      />
    </Field>
  )
}

export { TemplateGridSizeField }
