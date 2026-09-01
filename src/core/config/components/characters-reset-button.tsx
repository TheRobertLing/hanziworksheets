import { RotateCcw } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { Field } from '@/shared/ui/primitives/field'

import { useCharactersStore } from '../stores/characters'

function CharactersResetButton() {
  const reset = useCharactersStore((state) => state.resetCharacterList)

  return (
    <Field orientation="horizontal">
      <Button type="button" variant="destructive" className="flex-1" onClick={reset}>
        <RotateCcw />
        Reset
      </Button>
    </Field>
  )
}

export { CharactersResetButton }
