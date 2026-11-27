import { Fragment } from 'react'
import { Radio } from '@base-ui/react/radio'

import { RadioGroup } from '@/shared/ui/primitives/radio-group'
import { cn } from '@/shared/utils'

import type { CharacterEntry } from '../hooks/character-entries'

const radioClassName = cn(
  'cursor-pointer rounded-md border border-transparent px-2 py-0.5 text-xs font-medium text-muted-foreground transition-colors outline-none',
  'data-checked:border-border data-checked:bg-foreground/5 data-checked:text-foreground dark:data-checked:bg-foreground/10',
  'not-data-checked:hover:bg-input/40 not-data-checked:hover:text-foreground',
  'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'
)

interface CharacterEntryPinyinPickerProps {
  characterEntry: CharacterEntry
  onPinyinChange: (id: string, pinyin: string) => void
}

function CharacterEntryPinyinPicker({
  characterEntry,
  onPinyinChange,
}: CharacterEntryPinyinPickerProps) {
  const { id, character, pinyin, pinyinOptions } = characterEntry

  if (pinyinOptions.length === 0) {
    return <span className="text-xs text-muted-foreground">No pinyin available</span>
  }

  return (
    <RadioGroup
      aria-label={`Reading for ${character}`}
      value={pinyin}
      onValueChange={(value) => onPinyinChange(id, value as string)}
      className="flex flex-wrap items-center gap-1"
    >
      {pinyinOptions.map((pinyinOption, index) => (
        <Fragment key={pinyinOption}>
          {index > 0 && (
            <span aria-hidden className="text-muted-foreground/50">
              /
            </span>
          )}
          <Radio.Root value={pinyinOption} className={radioClassName}>
            {pinyinOption}
          </Radio.Root>
        </Fragment>
      ))}
    </RadioGroup>
  )
}

export { CharacterEntryPinyinPicker }
