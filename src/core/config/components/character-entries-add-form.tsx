import { ListPlus } from 'lucide-react'

import { ButtonGroup } from '@/shared/ui/primitives/button-group'
import { TooltipButton } from '@/shared/ui/composites/tooltip-button'
import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Input } from '@/shared/ui/primitives/input'

import { useCharacterEntriesAddForm } from '../hooks/character-entries-add-form'

function CharacterEntriesAddForm() {
  const { inputValue, handleChange, handleSubmit } = useCharacterEntriesAddForm()

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <FieldLabel htmlFor="add-characters-input">Add character(s)</FieldLabel>
        <ButtonGroup className="w-full">
          <Input
            id="add-characters-input"
            placeholder="鸡你太美"
            value={inputValue}
            onChange={handleChange}
          />

          <TooltipButton
            tooltipProps={{
              side: 'top',
              children: 'Add character(s)',
            }}
            buttonProps={{
              type: 'submit',
              variant: 'outline',
              size: 'icon',
              className: 'border-input',
              'aria-label': 'Add character(s)',
              children: <ListPlus />,
            }}
          />
        </ButtonGroup>
      </Field>
    </form>
  )
}

export { CharacterEntriesAddForm }
