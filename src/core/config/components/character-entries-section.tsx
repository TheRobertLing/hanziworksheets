import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { CharacterEntriesAddForm } from './character-entries-add-form'
import { CharacterEntryList } from './character-entry-list'

function CharacterEntriesSection() {
  return (
    <FieldGroup className="gap-3 p-1">
      <CharacterEntriesAddForm />
      <FieldSeparator />
      <CharacterEntryList />
    </FieldGroup>
  )
}

export { CharacterEntriesSection }
