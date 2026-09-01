import { useShallow } from 'zustand/react/shallow'

import { Field } from '@/shared/ui/primitives/field'
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

import { CharactersEntry } from './characters-entry'
import { useCharactersStore } from '../stores/characters'
import type { CharactersEntry as CharactersEntryData } from '../stores/characters'

interface CharactersEntriesProps {
  entries: CharactersEntryData[]
  onReadingChange: (id: string, reading: string) => void
  onRemove: (id: string) => void
}

function CharactersEntries({ entries, onReadingChange, onRemove }: CharactersEntriesProps) {
  return entries.map((entry) => (
    <CharactersEntry
      key={entry.id}
      entry={entry}
      onReadingChange={onReadingChange}
      onRemove={onRemove}
    />
  ))
}

function CharactersEntriesEmpty() {
  return (
    <Empty className="border-none">
      <EmptyHeader>
        <EmptyTitle>No characters added yet</EmptyTitle>
        <EmptyDescription>Add characters using the input field above</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

function CharactersEntriesList() {
  const { entries, setReading, removeEntry } = useCharactersStore(
    useShallow((state) => ({
      entries: state.characters,
      setReading: state.updatePinyinForCharacter,
      removeEntry: state.removeCharacterFromList,
    }))
  )

  return (
    <Field className="min-h-40">
      {entries.length === 0 ? (
        <CharactersEntriesEmpty />
      ) : (
        <CharactersEntries entries={entries} onReadingChange={setReading} onRemove={removeEntry} />
      )}
    </Field>
  )
}

export { CharactersEntriesList }
