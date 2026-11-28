import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'
import { Spinner } from '@/shared/ui/primitives/spinner'

function PDFLoading() {
  return (
    <Empty className="bg-card">
      <EmptyHeader>
        <EmptyTitle>
          <Spinner />
        </EmptyTitle>
        <EmptyDescription>Loading preview</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { PDFLoading }
