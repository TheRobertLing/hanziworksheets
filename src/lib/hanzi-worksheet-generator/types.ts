import type { PageSize, Orientation } from '@react-pdf/types'

interface CharacterData {
  id: string
  character: string
  pinyin: string
  strokes: string[]
}

type GridStyle = 'tian' | 'mi' | 'blank'

type TemplateConfig = {
  template: 'template-1'
  showPinyin: boolean
  showStrokeGuide: boolean
  gridStyle: GridStyle
  gridSize: number // mm
}

type Paper = Extract<PageSize, 'A4' | 'LETTER'>

interface PrintConfig {
  paper: Paper
  orientation: Orientation
  margin: number
}

export type { CharacterData, GridStyle, TemplateConfig, Paper, PrintConfig, Orientation }
