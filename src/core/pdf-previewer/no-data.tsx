import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

function PDFNoData() {
  return (
    <Empty className="bg-card">
      <EmptyHeader>
        <EmptyTitle>No PDF</EmptyTitle>
        <EmptyDescription>There is no PDF to show</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { PDFNoData }
