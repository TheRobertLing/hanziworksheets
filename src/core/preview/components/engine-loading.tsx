import { Spinner } from '@/shared/ui/primitives/spinner'
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

function EngineLoading() {
  return (
    <Empty className="h-full">
      <EmptyHeader className="animate-in duration-300 fade-in-0">
        <EmptyTitle>
          <Spinner />
        </EmptyTitle>
        <EmptyDescription>Loading preview panel</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { EngineLoading }
