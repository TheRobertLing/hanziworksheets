import { create } from 'zustand'
import { getPinyinsForCharacter, isSupportedCharacter } from '@/lib/hanzi-to-pinyin'

interface CharacterEntry {
  id: string
  character: string
  pinyinOptions: string[]
  pinyin: string
}

interface CharacterEntriesStore {
  characterEntries: CharacterEntry[]
  addCharacterEntries: (charactersToAdd: string[]) => string[]
  setCharacterEntryPinyin: (id: string, pinyin: string) => void
  removeCharacterEntry: (id: string) => void
  clearCharacterEntries: () => void
}

const useCharacterEntriesStore = create<CharacterEntriesStore>()((set) => ({
  characterEntries: [],

  addCharacterEntries: (charactersToAdd) => {
    const supported: string[] = []
    const unsupported: string[] = []

    for (const character of charactersToAdd) {
      if (isSupportedCharacter(character)) {
        supported.push(character)
      } else {
        unsupported.push(character)
      }
    }

    if (supported.length > 0) {
      set((state) => ({
        characterEntries: [
          ...state.characterEntries,
          ...supported.map((character) => {
            const pinyinOptions = getPinyinsForCharacter(character)
            return {
              id: crypto.randomUUID(),
              character,
              pinyinOptions,
              pinyin: pinyinOptions[0] ?? '',
            }
          }),
        ],
      }))
    }

    return unsupported
  },

  setCharacterEntryPinyin: (id, pinyin) =>
    set((state) => ({
      characterEntries: state.characterEntries.map((characterEntry) =>
        characterEntry.id === id ? { ...characterEntry, pinyin } : characterEntry
      ),
    })),

  removeCharacterEntry: (id) =>
    set((state) => ({
      characterEntries: state.characterEntries.filter((characterEntry) => characterEntry.id !== id),
    })),

  clearCharacterEntries: () => set({ characterEntries: [] }),
}))

export { useCharacterEntriesStore }
export type { CharacterEntry }
