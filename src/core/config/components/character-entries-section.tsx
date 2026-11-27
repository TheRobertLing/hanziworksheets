import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { CharacterEntriesInstructions } from './character-entries-instructions'
import { CharacterSearch } from './character-search'
import { CharacterEntryList } from './character-entry-list'

function CharacterEntriesSection() {
  return (
    <FieldGroup className="flex-1">
      <CharacterEntriesInstructions />
      <FieldSeparator />
      <div className="flex flex-1 flex-col gap-4">
        <CharacterSearch />
        <CharacterEntryList />
      </div>
    </FieldGroup>
  )
}

export { CharacterEntriesSection }
