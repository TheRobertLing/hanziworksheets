import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/primitives/accordion'
import { Characters } from './characters'
import { Print } from './print'
import { Template } from './template'

const TRIGGER_CLASS = 'rounded-t-[inherit] p-3'
const ITEM_CLASS = 'rounded-lg border'

function ConfigPanel() {
  return (
    <Accordion defaultValue={['characters']} multiple className="gap-3 rounded-none border-none">
      <AccordionItem value="characters" className={ITEM_CLASS}>
        <AccordionTrigger className={TRIGGER_CLASS}>Characters</AccordionTrigger>
        <AccordionContent className="py-2">
          <Characters />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="worksheet" className={ITEM_CLASS}>
        <AccordionTrigger className={TRIGGER_CLASS}>Template</AccordionTrigger>
        <AccordionContent className="py-2">
          <Template />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="page" className={ITEM_CLASS}>
        <AccordionTrigger className={TRIGGER_CLASS}>Print</AccordionTrigger>
        <AccordionContent className="py-2">
          <Print />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { ConfigPanel }
