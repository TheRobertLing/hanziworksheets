import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { CharactersAddInputField } from './characters-add-input-field'
import { CharactersEntriesList } from './characters-entries-list'
import { CharactersResetButton } from './characters-reset-button'

function Characters() {
  return (
    <FieldGroup className="gap-3 p-1">
      <CharactersAddInputField />
      <FieldSeparator />
      <CharactersEntriesList />
      <FieldSeparator />
      <CharactersResetButton />
    </FieldGroup>
  )
}

export { Characters }
