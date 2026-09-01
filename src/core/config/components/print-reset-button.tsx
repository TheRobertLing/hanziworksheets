import { RotateCcw } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { Field } from '@/shared/ui/primitives/field'

import { usePrintStore } from '../stores/print'

function PrintResetButton() {
  const reset = usePrintStore((state) => state.reset)

  return (
    <Field orientation="horizontal">
      <Button type="button" variant="destructive" className="flex-1" onClick={reset}>
        <RotateCcw />
        Reset
      </Button>
    </Field>
  )
}

export { PrintResetButton }
