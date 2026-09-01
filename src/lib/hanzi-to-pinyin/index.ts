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

export { isSupportedCharacter, getPinyinsForCharacter }
