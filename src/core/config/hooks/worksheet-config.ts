import { useMemo } from 'react'

import type { PrintConfig, TemplateConfig } from '@/lib/hanzi-worksheet-generator'
import { useCharacterEntries } from './character-entries'
import { usePrintMargin } from './print-margin'
import { usePrintOrientation } from './print-orientation'
import { usePrintPaperSize } from './print-paper-size'
import { useTemplateGridSize } from './template-grid-size'
import { useTemplateGridStyle } from './template-grid-style'
import { useTemplateShowPinyin } from './template-show-pinyin'
import { useTemplateShowStrokeGuide } from './template-show-stroke-guide'

interface WorksheetCharacterConfig {
  readonly id: string
  readonly character: string
  readonly pinyin: string
}

interface WorksheetConfig {
  readonly characters: readonly WorksheetCharacterConfig[]
  readonly template: Readonly<TemplateConfig>
  readonly print: Readonly<PrintConfig>
}

function useWorksheetConfig(): WorksheetConfig {
  const { characterEntries } = useCharacterEntries()
  const { gridSize } = useTemplateGridSize()
  const { gridStyle } = useTemplateGridStyle()
  const { showPinyin } = useTemplateShowPinyin()
  const { showStrokeGuide } = useTemplateShowStrokeGuide()
  const { paper } = usePrintPaperSize()
  const { orientation } = usePrintOrientation()
  const { margin } = usePrintMargin()

  return useMemo(
    () => ({
      characters: characterEntries.map(({ id, character, pinyin }) => ({
        id,
        character,
        pinyin,
      })),
      template: {
        template: 'template-1',
        showPinyin,
        showStrokeGuide,
        gridStyle,
        gridSize,
      },
      print: {
        paper,
        orientation,
        margin,
      },
    }),
    [characterEntries, gridSize, gridStyle, margin, orientation, paper, showPinyin, showStrokeGuide]
  )
}

export { useWorksheetConfig }
export type { WorksheetCharacterConfig, WorksheetConfig }
