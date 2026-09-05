import type { CharacterEntry } from '../hooks/character-entries'
import { CharacterEntryListItem } from './character-entry-list-item'

interface CharacterEntryListItemsProps {
  characterEntries: CharacterEntry[]
  onPinyinChange: (id: string, pinyin: string) => void
  onRemoveCharacterEntry: (id: string) => void
}

function CharacterEntryListItems({
  characterEntries,
  onPinyinChange,
  onRemoveCharacterEntry,
}: CharacterEntryListItemsProps) {
  return characterEntries.map((characterEntry) => (
    <CharacterEntryListItem
      key={characterEntry.id}
      characterEntry={characterEntry}
      onPinyinChange={onPinyinChange}
      onRemoveCharacterEntry={onRemoveCharacterEntry}
    />
  ))
}

export { CharacterEntryListItems }
