import { RotateCcwIcon } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { ItemGroup } from '@/shared/ui/primitives/item'

import { useCharacterEntries } from '../hooks/character-entries'
import { CharacterEntryListItems } from './character-entry-list-items'
import { CharacterEntryListEmptyState } from './character-entry-list-empty-state'

function CharacterEntryList() {
  const { characterEntries, setCharacterEntryPinyin, removeCharacterEntry, clearCharacterEntries } =
    useCharacterEntries()
  const count = characterEntries.length

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-xs text-muted-foreground">
          {count} {count === 1 ? 'character' : 'characters'}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          disabled={count === 0}
          onClick={clearCharacterEntries}
        >
          <RotateCcwIcon data-icon="inline-start" />
          Reset
        </Button>
      </div>

      <div className="flex min-h-40 flex-1 flex-col">
        {count === 0 ? (
          <CharacterEntryListEmptyState />
        ) : (
          <ItemGroup className="gap-2 has-data-[size=sm]:gap-2">
            <CharacterEntryListItems
              characterEntries={characterEntries}
              onPinyinChange={setCharacterEntryPinyin}
              onRemoveCharacterEntry={removeCharacterEntry}
            />
          </ItemGroup>
        )}
      </div>
    </div>
  )
}

export { CharacterEntryList }
