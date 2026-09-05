import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/primitives/accordion'
import { CharacterEntriesSection } from './character-entries-section'
import { PrintSettings } from './print-settings'
import { TemplateSettings } from './template-settings'

const accordionTriggerClassName = 'rounded-t-[inherit] p-3'
const accordionItemClassName = 'rounded-lg border'

function ConfigPanel() {
  return (
    <Accordion defaultValue={['characters']} multiple className="gap-3 rounded-none border-none">
      <AccordionItem value="characters" className={accordionItemClassName}>
        <AccordionTrigger className={accordionTriggerClassName}>Characters</AccordionTrigger>
        <AccordionContent className="py-2">
          <CharacterEntriesSection />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="worksheet" className={accordionItemClassName}>
        <AccordionTrigger className={accordionTriggerClassName}>Template</AccordionTrigger>
        <AccordionContent className="py-2">
          <TemplateSettings />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="page" className={accordionItemClassName}>
        <AccordionTrigger className={accordionTriggerClassName}>Print</AccordionTrigger>
        <AccordionContent className="py-2">
          <PrintSettings />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { ConfigPanel }
