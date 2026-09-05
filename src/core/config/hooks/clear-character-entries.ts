import { useCharacterEntriesStore } from '../stores/characters'

function useClearCharacterEntries() {
  const clearCharacterEntries = useCharacterEntriesStore((state) => state.clearCharacterEntries)

  return { clearCharacterEntries }
}

export { useClearCharacterEntries }
