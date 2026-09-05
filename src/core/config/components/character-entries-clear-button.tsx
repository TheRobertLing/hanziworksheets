import { RotateCcw } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { Field } from '@/shared/ui/primitives/field'

import { useClearCharacterEntries } from '../hooks/clear-character-entries'

function CharacterEntriesClearButton() {
  const { clearCharacterEntries } = useClearCharacterEntries()

  return (
    <Field orientation="horizontal">
      <Button
        type="button"
        variant="destructive"
        className="flex-1"
        onClick={clearCharacterEntries}
      >
        <RotateCcw />
        Reset
      </Button>
    </Field>
  )
}

export { CharacterEntriesClearButton }
