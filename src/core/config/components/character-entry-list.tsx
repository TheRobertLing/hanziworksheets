import { Field } from '@/shared/ui/primitives/field'

import { useCharacterEntries } from '../hooks/character-entries'
import { CharacterEntryListItems } from './character-entry-list-items'
import { CharacterEntryListEmptyState } from './character-entry-list-empty-state'

function CharacterEntryList() {
  const { characterEntries, setCharacterEntryPinyin, removeCharacterEntry } = useCharacterEntries()

  return (
    <Field className="min-h-40">
      {characterEntries.length === 0 ? (
        <CharacterEntryListEmptyState />
      ) : (
        <CharacterEntryListItems
          characterEntries={characterEntries}
          onPinyinChange={setCharacterEntryPinyin}
          onRemoveCharacterEntry={removeCharacterEntry}
        />
      )}
    </Field>
  )
}

export { CharacterEntryList }
