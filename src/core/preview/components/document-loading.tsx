import { Spinner } from '@/shared/ui/primitives/spinner'
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

interface DocumentLoadingProps {
  description: string
}

function DocumentLoading({ description }: DocumentLoadingProps) {
  return (
    <Empty className="h-full">
      <EmptyHeader className="animate-in duration-300 fade-in-0">
        <EmptyTitle>
          <Spinner />
        </EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { DocumentLoading }
