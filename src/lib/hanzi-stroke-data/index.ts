import svgpath from 'svgpath'

interface HanziData {
  strokes: string[]
  medians: number[][][]
}

async function fetchStrokes(character: string) {
  const response = await fetch(
    `https://raw.githubusercontent.com/chanind/hanzi-writer-data/master/data/${encodeURIComponent(character)}.json`
  )

  if (!response.ok) {
    throw new Error(`No stroke data for ${character}`)
  }

  const data = (await response.json()) as HanziData
  return data.strokes.map((stroke) =>
    svgpath(stroke).scale(1, -1).translate(0, 900).round(2).toString()
  )
}

export { fetchStrokes }
export type { HanziData }
