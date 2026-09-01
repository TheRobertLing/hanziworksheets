import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

interface EngineErrorProps {
  error: Error | string
}

function EngineError({ error }: EngineErrorProps) {
  return (
    <Empty className="h-full">
      <EmptyHeader className="animate-in duration-300 fade-in-0">
        <EmptyTitle>Error</EmptyTitle>
        <EmptyDescription>{typeof error === 'string' ? error : error.message}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { EngineError }
