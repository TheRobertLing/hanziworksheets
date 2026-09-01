import type {
  CharacterData,
  PrintConfig,
  TemplateConfig,
} from '@/lib/hanzi-worksheet-generator/types'
import { View } from '@react-pdf/renderer'

import { StrokeGuideRow } from './stroke-guide-row'
import { PinyinRow } from './pinyin-row'
import { PracticeRow } from './practice-row'

function WorksheetRow({
  characterData,
  templateConfig,
  printConfig,
}: {
  characterData: CharacterData
  templateConfig: TemplateConfig
  printConfig: PrintConfig
}) {
  const { pinyin, strokes } = characterData
  const { showStrokeGuide, showPinyin, gridStyle, gridSize } = templateConfig
  const { paper, orientation, margin } = printConfig

  const [shortSide, longSide] = paper === 'A4' ? [210, 297] : [216, 279]
  const contentWidth = (orientation === 'landscape' ? longSide : shortSide) - margin * 2
  const rowCount = Math.max(1, Math.floor(contentWidth / gridSize))

  const strokeGuideRow = showStrokeGuide ? (
    <View style={{ borderBottom: '1px solid black' }}>
      <StrokeGuideRow strokes={strokes} gridSize={gridSize} rowCount={rowCount} />
    </View>
  ) : null

  const pinyinRow = showPinyin ? (
    <View style={{ borderBottom: '1px solid black' }}>
      <PinyinRow pinyin={pinyin} gridSize={gridSize} rowCount={rowCount} />
    </View>
  ) : null

  const practiceRow = (
    <View>
      <PracticeRow
        strokes={strokes}
        gridSize={gridSize}
        gridStyle={gridStyle}
        rowCount={rowCount}
      />
    </View>
  )

  return (
    <View style={{ flexDirection: 'column', border: '1px solid black' }} wrap={false}>
      {strokeGuideRow}
      {pinyinRow}
      {practiceRow}
    </View>
  )
}

export { WorksheetRow }
