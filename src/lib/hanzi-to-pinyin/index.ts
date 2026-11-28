import characterRegistry from './data/characters.json'

const registry = characterRegistry as Record<string, string[]>

function isSupportedCharacter(character: string): boolean {
  return Object.hasOwn(registry, character)
}

// Note: [] could mean the character had no pinyins or the character doesnt exist
// This is by design since theres no need to distinguish between if a character
// exists but has no pinyins or if the character isn't in the registry
function getPinyinsForCharacter(character: string): string[] {
  return registry[character] ?? []
}

const supportedCharacters = Object.keys(registry)

// Strips tone marks so "hǎo" and "hao" compare equal ("lǜ" becomes "lu")
function removeTones(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
}

const tonelessPinyinsByCharacter = new Map(
  supportedCharacters.map((character) => [character, registry[character].map(removeTones)])
)

// Matches the character itself, or any of its pinyins by prefix, ignoring tones
function matchesCharacterQuery(character: string, query: string): boolean {
  const trimmedQuery = query.trim()
  if (trimmedQuery === '') return true
  if (character === trimmedQuery) return true

  // "v" is the usual keyboard stand-in for "ü"
  const tonelessQuery = removeTones(trimmedQuery).replaceAll('v', 'u')
  const tonelessPinyins = tonelessPinyinsByCharacter.get(character) ?? []
  return tonelessPinyins.some((pinyin) => pinyin.startsWith(tonelessQuery))
}

export { isSupportedCharacter, getPinyinsForCharacter, supportedCharacters, matchesCharacterQuery }
