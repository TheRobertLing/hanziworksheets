import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/primitives/select'

function TemplateSelectionField() {
  return (
    <Field>
      <FieldLabel htmlFor="opt-template">Template</FieldLabel>
      <Select defaultValue="template-1" disabled>
        <SelectTrigger id="opt-template" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="template-1">Template 1</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  )
}

export { TemplateSelectionField }
