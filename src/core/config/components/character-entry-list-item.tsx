import { X } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { Item, ItemActions, ItemContent, ItemMedia } from '@/shared/ui/primitives/item'

import type { CharacterEntry } from '../hooks/character-entries'
import { CharacterEntryPinyinPicker } from './character-entry-pinyin-picker'

interface CharacterEntryListItemProps {
  characterEntry: CharacterEntry
  onPinyinChange: (id: string, pinyin: string) => void
  onRemoveCharacterEntry: (id: string) => void
}

function CharacterEntryListItem({
  characterEntry,
  onPinyinChange,
  onRemoveCharacterEntry,
}: CharacterEntryListItemProps) {
  return (
    <Item role="listitem" variant="muted" size="sm" className="flex-nowrap gap-2 px-2 py-1 pe-1">
      <ItemMedia>{characterEntry.character}</ItemMedia>

      <ItemContent>
        <CharacterEntryPinyinPicker
          characterEntry={characterEntry}
          onPinyinChange={onPinyinChange}
        />
      </ItemContent>

      <ItemActions>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
          aria-label={`Remove ${characterEntry.character}`}
          onClick={() => onRemoveCharacterEntry(characterEntry.id)}
        >
          <X />
        </Button>
      </ItemActions>
    </Item>
  )
}

export { CharacterEntryListItem }
