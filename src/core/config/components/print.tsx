import { FieldGroup, FieldSeparator } from '@/shared/ui/primitives/field'

import { PrintMarginField } from './print-margin-field'
import { PrintOrientationField } from './print-orientation-field'
import { PrintPaperSizeField } from './print-paper-size-field'
import { PrintResetButton } from './print-reset-button'

function Print() {
  return (
    <FieldGroup className="gap-3 p-1">
      <PrintPaperSizeField />
      <FieldSeparator />
      <PrintOrientationField />
      <FieldSeparator />
      <PrintMarginField />
      <FieldSeparator />
      <PrintResetButton />
    </FieldGroup>
  )
}

export { Print }
