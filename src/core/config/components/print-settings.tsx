import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { PrintMarginField } from './print-margin-field'
import { PrintOrientationField } from './print-orientation-field'
import { PrintPaperSizeField } from './print-paper-size-field'

function PrintSettings() {
  return (
    <FieldGroup className="gap-3 p-1">
      <PrintPaperSizeField />
      <FieldSeparator />
      <PrintOrientationField />
      <FieldSeparator />
      <PrintMarginField />
    </FieldGroup>
  )
}

export { PrintSettings }
