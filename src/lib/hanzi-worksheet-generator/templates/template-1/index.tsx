import type {
  CharacterData,
  PrintConfig,
  TemplateConfig,
} from '@/lib/hanzi-worksheet-generator/types'

import { PageLayout } from './page/page-layout'
import { WorksheetRow } from './rows/worksheet-row'

function Template1Document({
  characterData,
  templateConfig,
  printConfig,
}: {
  characterData: CharacterData[]
  templateConfig: TemplateConfig
  printConfig: PrintConfig
}) {
  return (
    <PageLayout printConfig={printConfig}>
      {characterData.map((entry) => (
        <WorksheetRow
          key={entry.id}
          characterData={entry}
          templateConfig={templateConfig}
          printConfig={printConfig}
        />
      ))}
    </PageLayout>
  )
}

export { Template1Document }
