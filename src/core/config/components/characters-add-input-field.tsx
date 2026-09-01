import { useState } from 'react'
import { ListPlus } from 'lucide-react'
import { toast } from 'sonner'

import { ButtonGroup } from '@/shared/ui/primitives/button-group'
import { TooltipButton } from '@/shared/ui/composites/tooltip-button'
import { Field, FieldLabel } from '@/shared/ui/primitives/field'
import { Input } from '@/shared/ui/primitives/input'

import { useCharactersStore } from '../stores/characters'

function CharactersAddInputField() {
  const [value, setValue] = useState('')
  const addCharacters = useCharactersStore((state) => state.addCharactersToList)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const chars = [...value.trim()]

        if (chars.length === 0) {
          return
        }

        const rejected = addCharacters(chars)
        setValue('')

        if (rejected.length > 0) {
          toast.error(`Unsupported Characters: ${rejected.join(', ')}`)
        }
      }}
    >
      <Field>
        <FieldLabel htmlFor="add-characters-input">Add character(s)</FieldLabel>
        <ButtonGroup className="w-full">
          <Input
            id="add-characters-input"
            placeholder="鸡你太美"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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

export { CharactersAddInputField }
