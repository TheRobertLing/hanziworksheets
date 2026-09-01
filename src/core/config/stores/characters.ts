import { create } from 'zustand'
import { getPinyinsForCharacter, isSupportedCharacter } from '@/lib/hanzi-to-pinyin'

interface CharactersEntry {
  id: string
  character: string
  pinyinOptions: string[]
  pinyinSelection: string
}

interface CharactersStore {
  characters: CharactersEntry[]
  addCharactersToList: (characters: string[]) => string[]
  updatePinyinForCharacter: (id: string, pinyin: string) => void
  removeCharacterFromList: (id: string) => void
  resetCharacterList: () => void
}

const useCharactersStore = create<CharactersStore>()((set) => ({
  characters: [],

  addCharactersToList: (characters) => {
    const supported: string[] = []
    const unsupported: string[] = []

    for (const character of characters) {
      if (isSupportedCharacter(character)) {
        supported.push(character)
      } else {
        unsupported.push(character)
      }
    }

    if (supported.length > 0) {
      set((state) => ({
        characters: [
          ...state.characters,
          ...supported.map((character) => {
            const pinyinOptions = getPinyinsForCharacter(character)
            return {
              id: crypto.randomUUID(),
              character,
              pinyinOptions,
              pinyinSelection: pinyinOptions[0] ?? '',
            }
          }),
        ],
      }))
    }

    return unsupported
  },

  updatePinyinForCharacter: (id, pinyin) =>
    set((state) => ({
      characters: state.characters.map((entry) =>
        entry.id === id ? { ...entry, pinyinSelection: pinyin } : entry
      ),
    })),

  removeCharacterFromList: (id) =>
    set((state) => ({
      characters: state.characters.filter((entry) => entry.id !== id),
    })),

  resetCharacterList: () => set({ characters: [] }),
}))

export { useCharactersStore }
export type { CharactersEntry }
