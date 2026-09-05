import { Trash2 } from 'lucide-react'

import { Button } from '@/shared/ui/primitives/button'
import { ButtonGroup, ButtonGroupText } from '@/shared/ui/primitives/button-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/primitives/select'

import type { CharacterEntry } from '../hooks/character-entries'

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
    <ButtonGroup className="w-full">
      <ButtonGroupText className="border-input font-light">
        {characterEntry.character}
      </ButtonGroupText>

      <Select
        value={characterEntry.pinyin}
        onValueChange={(value) => onPinyinChange(characterEntry.id, value as string)}
      >
        <SelectTrigger className="flex-1" aria-label={`Reading for ${characterEntry.character}`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          <SelectGroup>
            <SelectLabel>Choose pinyin</SelectLabel>
            {characterEntry.pinyinOptions.map((pinyinOption) => (
              <SelectItem key={pinyinOption} value={pinyinOption}>
                {pinyinOption}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="icon"
        className="border-input"
        aria-label={`Remove ${characterEntry.character}`}
        onClick={() => onRemoveCharacterEntry(characterEntry.id)}
      >
        <Trash2 />
      </Button>
    </ButtonGroup>
  )
}

export { CharacterEntryListItem }
