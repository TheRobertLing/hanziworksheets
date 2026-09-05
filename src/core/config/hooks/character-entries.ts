import { useShallow } from 'zustand/react/shallow'

import { useCharacterEntriesStore } from '../stores/characters'

function useCharacterEntries() {
  return useCharacterEntriesStore(
    useShallow((state) => ({
      characterEntries: state.characterEntries,
      addCharacterEntries: state.addCharacterEntries,
      setCharacterEntryPinyin: state.setCharacterEntryPinyin,
      removeCharacterEntry: state.removeCharacterEntry,
    }))
  )
}

export { useCharacterEntries }
export type { CharacterEntry } from '../stores/characters'
