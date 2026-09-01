import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { pinyin } from 'pinyin-pro'

const res = await fetch(
  'https://api.github.com/repos/chanind/hanzi-writer-data/git/trees/master?recursive=1'
)

if (!res.ok) {
  throw new Error(`GitHub API returned ${res.status} ${res.statusText}`)
}

const body = await res.json()

const characters = {}

for (const item of body.tree) {
  const match = item.path.match(/^data\/(.+)\.json$/)
  if (!match || match[1] === 'all') continue

  const char = match[1]
  const readings = pinyin(char, { multiple: true, type: 'array' })

  characters[char] = readings.length === 1 && readings[0] === char ? [] : readings
}

const outputPath = join(dirname(fileURLToPath(import.meta.url)), '../data/characters.json')

writeFileSync(outputPath, JSON.stringify(characters, null, 2))
