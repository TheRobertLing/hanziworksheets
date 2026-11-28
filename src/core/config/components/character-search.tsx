import { useState } from 'react'
import type { ComboboxRoot } from '@base-ui/react'
import { CircleQuestionMark } from 'lucide-react'

import {
  getPinyinsForCharacter,
  matchesCharacterQuery,
  supportedCharacters,
} from '@/lib/hanzi-to-pinyin'
import { HoverPopover } from '@/shared/ui/composites/hover-popover'
import { ComboboxContent, ComboboxEmpty, ComboboxInput } from '@/shared/ui/primitives/combobox'
import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import {
  VirtualizedCombobox,
  VirtualizedComboboxList,
} from '@/shared/ui/primitives/virtualized-combobox'

import { useCharacterEntries } from '../hooks/character-entries'

function CharacterSearch() {
  const [query, setQuery] = useState('')
  const { addCharacterEntries } = useCharacterEntries()

  const handleValueChange = (character: string | null) => {
    if (!character) return
    addCharacterEntries([character])
    setQuery('')
  }

  const handleInputValueChange: ComboboxRoot.Props<string>['onInputValueChange'] = (
    value,
    { reason }
  ) => {
    if (reason === 'item-press') return
    setQuery(value)
  }

  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="character-search">Add characters</FieldLabel>
        <HoverPopover
          buttonProps={{
            variant: 'ghost',
            size: 'icon-sm',
            className: 'text-muted-foreground',
            'aria-label': 'Search help',
            children: <CircleQuestionMark />,
          }}
          popoverProps={{
            align: 'end',
            children: (
              <ul className="list-disc space-y-1 ps-4 text-xs/relaxed text-muted-foreground">
                <li>Type a character (好) or its pinyin (hao) to search.</li>
                <li>Tones are optional, and "v" works for "ü".</li>
                <li>Scroll the results to see more matches.</li>
                <li>Press Enter or click a result to add it to the list.</li>
                <li>Click a reading in the list to choose the pinyin for the worksheet.</li>
              </ul>
            ),
          }}
        />
      </div>
      <VirtualizedCombobox
        items={supportedCharacters}
        filter={matchesCharacterQuery}
        autoHighlight
        value={null}
        onValueChange={handleValueChange}
        inputValue={query}
        onInputValueChange={handleInputValueChange}
      >
        <ComboboxInput
          id="character-search"
          placeholder="Search for character to add"
          showTrigger={false}
        />
        <ComboboxContent>
          <ComboboxEmpty>No characters found</ComboboxEmpty>
          <VirtualizedComboboxList<string>>
            {(character) => (
              <>
                <span>{character}</span>
                <span className="text-muted-foreground">
                  {getPinyinsForCharacter(character).join(' / ')}
                </span>
              </>
            )}
          </VirtualizedComboboxList>
        </ComboboxContent>
      </VirtualizedCombobox>
    </Field>
  )
}

export { CharacterSearch }
