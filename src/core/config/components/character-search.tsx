import { useState } from 'react'
import type { ComboboxRoot } from '@base-ui/react'

import {
  getPinyinsForCharacter,
  matchesCharacterQuery,
  supportedCharacters,
} from '@/lib/hanzi-to-pinyin'
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
      <FieldLabel htmlFor="character-search">Add characters</FieldLabel>
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
