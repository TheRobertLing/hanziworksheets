import { useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'

import type { PrintConfig, TemplateConfig } from '@/lib/hanzi-worksheet-generator'
import { useCharactersStore } from '../stores/characters'
import { usePrintStore } from '../stores/print'
import { useTemplateStore } from '../stores/template'

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
  const characters = useCharactersStore((state) => state.characters)
  const { showPinyin, showStrokeGuide, gridStyle, gridSize } = useTemplateStore(
    useShallow((state) => ({
      showPinyin: state.showPinyin,
      showStrokeGuide: state.showStrokeGuide,
      gridStyle: state.gridStyle,
      gridSize: state.gridSize,
    }))
  )
  const { paper, orientation, margin } = usePrintStore(
    useShallow((state) => ({
      paper: state.paper,
      orientation: state.orientation,
      margin: state.margin,
    }))
  )

  return useMemo(
    () => ({
      characters: characters.map(({ id, character, pinyinSelection }) => ({
        id,
        character,
        pinyin: pinyinSelection,
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
    [characters, gridSize, gridStyle, margin, orientation, paper, showPinyin, showStrokeGuide]
  )
}

export { useWorksheetConfig }
export type { WorksheetCharacterConfig, WorksheetConfig }
