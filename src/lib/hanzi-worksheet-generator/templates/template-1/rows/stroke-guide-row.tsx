import { View } from '@react-pdf/renderer'

import { Cell } from '../cells/cell'
import { KouCell } from '../cells/kou-cell'
import { GuideCharacter } from '../characters/guide-character'

function StrokeGuideRow({
  strokes,
  gridSize,
  rowCount,
}: {
  strokes: string[]
  gridSize: number
  rowCount: number
}) {
  const width = gridSize * rowCount
  const cellSize = gridSize / 2

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: `${width}mm` }}>
      {strokes.map((_, index) => (
        <Cell
          gridStyle={<KouCell />}
          character={<GuideCharacter strokes={strokes.slice(0, index + 1)} />}
          size={cellSize}
          key={index}
        />
      ))}
    </View>
  )
}

export { StrokeGuideRow }
