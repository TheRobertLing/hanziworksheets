import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

function CharacterEntryListEmptyState() {
  return (
    <Empty className="border-none">
      <EmptyHeader>
        <EmptyTitle>No characters added yet</EmptyTitle>
        <EmptyDescription>Add characters using the input field above</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { CharacterEntryListEmptyState }
