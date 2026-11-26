import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/primitives/tabs'
import { CharacterEntriesSection } from './character-entries-section'
import { PrintSettings } from './print-settings'
import { TemplateSettings } from './template-settings'

// The list has no background, so give the active tab a fill in light mode too.
// Dark mode keeps the default active style.
const tabsTriggerClassName = 'data-active:bg-muted'

function ConfigPanel() {
  return (
    <Tabs defaultValue="characters" className="gap-0">
      <TabsList className="w-full rounded-none border-b bg-transparent p-1.5 group-data-horizontal/tabs:h-10">
        <TabsTrigger value="characters" className={tabsTriggerClassName}>
          Characters
        </TabsTrigger>
        <TabsTrigger value="template" className={tabsTriggerClassName}>
          Template
        </TabsTrigger>
        <TabsTrigger value="print" className={tabsTriggerClassName}>
          Print
        </TabsTrigger>
      </TabsList>

      <TabsContent value="characters" className="p-3">
        <CharacterEntriesSection />
      </TabsContent>

      <TabsContent value="template" className="p-3">
        <TemplateSettings />
      </TabsContent>

      <TabsContent value="print" className="p-3">
        <PrintSettings />
      </TabsContent>
    </Tabs>
  )
}

export { ConfigPanel }
