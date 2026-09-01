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

import type { CharactersEntry as CharactersEntryData } from '../stores/characters'

interface CharactersEntryProps {
  entry: CharactersEntryData
  onReadingChange: (id: string, reading: string) => void
  onRemove: (id: string) => void
}

function CharactersEntry({ entry, onReadingChange, onRemove }: CharactersEntryProps) {
  return (
    <ButtonGroup className="w-full">
      <ButtonGroupText className="border-input font-light">{entry.character}</ButtonGroupText>

      <Select
        value={entry.pinyinSelection}
        onValueChange={(value) => onReadingChange(entry.id, value as string)}
      >
        <SelectTrigger className="flex-1" aria-label={`Reading for ${entry.character}`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          <SelectGroup>
            <SelectLabel>Choose pinyin</SelectLabel>
            {entry.pinyinOptions.map((pinyin) => (
              <SelectItem key={pinyin} value={pinyin}>
                {pinyin}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="icon"
        className="border-input"
        aria-label={`Remove ${entry.character}`}
        onClick={() => onRemove(entry.id)}
      >
        <Trash2 />
      </Button>
    </ButtonGroup>
  )
}

export { CharactersEntry }
