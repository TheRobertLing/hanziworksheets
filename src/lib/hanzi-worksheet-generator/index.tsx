import { pdf } from '@react-pdf/renderer'

import { Template1Document } from './templates/template-1'
import type { CharacterData, PrintConfig, TemplateConfig } from './types'
import type { ReactElement } from 'react'
import type { DocumentProps } from '@react-pdf/types'

interface WorksheetOptions {
  characters: CharacterData[]
  template: TemplateConfig
  print: PrintConfig
}

async function toBlob(document: ReactElement<DocumentProps>) {
  return pdf(document).toBlob()
}

async function generateHanziWorksheet({
  characters,
  template,
  print,
}: WorksheetOptions): Promise<Blob> {
  switch (template.template) {
    case 'template-1':
      return toBlob(
        <Template1Document
          characterData={characters}
          templateConfig={template}
          printConfig={print}
        />
      )
  }
}

export { generateHanziWorksheet }
export type * from './types'
