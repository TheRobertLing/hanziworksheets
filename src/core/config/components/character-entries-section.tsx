import { FieldGroup } from '@/shared/ui/primitives/field'

import { CharacterSearch } from './character-search'
import { CharacterEntryList } from './character-entry-list'

function CharacterEntriesSection() {
  return (
    <FieldGroup className="flex-1">
      <CharacterSearch />
      <CharacterEntryList />
    </FieldGroup>
  )
}

export { CharacterEntriesSection }
