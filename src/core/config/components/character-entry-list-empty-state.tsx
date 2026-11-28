import { Empty, EmptyDescription, EmptyHeader } from '@/shared/ui/primitives/empty'

function CharacterEntryListEmptyState() {
  return (
    <Empty className="border-none">
      <EmptyHeader>
        <EmptyDescription>No characters added yet</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { CharacterEntryListEmptyState }
