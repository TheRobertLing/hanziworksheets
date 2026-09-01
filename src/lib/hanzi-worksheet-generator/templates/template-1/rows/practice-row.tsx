import type { GridStyle } from '@/lib/hanzi-worksheet-generator/types'
import { View } from '@react-pdf/renderer'

import { Cell } from '../cells/cell'
import { KouCell } from '../cells/kou-cell'
import { TianCell } from '../cells/tian-cell'
import { MiCell } from '../cells/mi-cell'
import { PracticeCharacter } from '../characters/practice-character'

function PracticeRow({
  strokes,
  gridSize,
  gridStyle,
  rowCount,
}: {
  strokes: string[]
  gridSize: number
  gridStyle: GridStyle
  rowCount: number
}) {
  const width = gridSize * rowCount
  const cellSize = gridSize

  const grid = gridStyle === 'tian' ? <TianCell /> : gridStyle === 'mi' ? <MiCell /> : <KouCell />

  return (
    // Don't add flex wrap style here, for some reason it wraps for no reason on 16 and 32mm
    <View style={{ flexDirection: 'row', width: `${width}mm` }}>
      {Array.from({ length: rowCount }, (_, index) => (
        <View
          style={{
            width: `${cellSize}mm`,
            height: `${cellSize}mm`,
            borderRight: index === rowCount - 1 ? undefined : '1px solid black',
          }}
          key={index}
        >
          <Cell
            gridStyle={grid}
            character={index === 0 ? <PracticeCharacter strokes={strokes} /> : undefined}
          />
        </View>
      ))}
    </View>
  )
}

export { PracticeRow }
