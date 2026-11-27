import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/primitives/tabs'
import { CharacterEntriesSection } from './character-entries-section'
import { PrintSettings } from './print-settings'
import { TemplateSettings } from './template-settings'

const TAB_CONTENT_CLASS = 'flex min-h-0 flex-col overflow-y-auto ps-3 scrollbar-gutter-stable'
const TAB_BODY_CLASS = 'flex flex-1 flex-col border-e py-3 pe-3'

function ConfigPanel() {
  return (
    <Tabs defaultValue="characters" className="h-full min-h-0 gap-0">
      <TabsList className="w-full shrink-0 gap-1 rounded-none border-b bg-transparent p-3 group-data-horizontal/tabs:h-auto *:data-[slot=tabs-trigger]:h-7">
        <TabsTrigger value="characters">Characters</TabsTrigger>
        <TabsTrigger value="template">Template</TabsTrigger>
        <TabsTrigger value="print">Print</TabsTrigger>
      </TabsList>

      <TabsContent value="characters" className={TAB_CONTENT_CLASS}>
        <div className={TAB_BODY_CLASS}>
          <CharacterEntriesSection />
        </div>
      </TabsContent>

      <TabsContent value="template" className={TAB_CONTENT_CLASS}>
        <div className={TAB_BODY_CLASS}>
          <TemplateSettings />
        </div>
      </TabsContent>

      <TabsContent value="print" className={TAB_CONTENT_CLASS}>
        <div className={TAB_BODY_CLASS}>
          <PrintSettings />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export { ConfigPanel }
