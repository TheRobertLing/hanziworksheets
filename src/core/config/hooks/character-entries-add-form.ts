import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import { toast } from 'sonner'

import { useCharacterEntries } from './character-entries'

function useCharacterEntriesAddForm() {
  const [inputValue, setInputValue] = useState('')
  const { addCharacterEntries } = useCharacterEntries()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const charactersToAdd = [...inputValue.trim()]

    if (charactersToAdd.length === 0) return

    const unsupportedCharacters = addCharacterEntries(charactersToAdd)
    setInputValue('')

    if (unsupportedCharacters.length > 0) {
      toast.error(`Unsupported Characters: ${unsupportedCharacters.join(', ')}`)
    }
  }

  return { inputValue, handleChange, handleSubmit }
}

export { useCharacterEntriesAddForm }
