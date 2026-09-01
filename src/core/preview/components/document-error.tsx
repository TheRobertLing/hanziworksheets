import { Button } from '@/shared/ui/primitives/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/shared/ui/primitives/empty'

interface DocumentErrorProps {
  error: string
  onRetry: () => void | Promise<void>
  retryDisabled?: boolean
}

function DocumentError({ error, onRetry, retryDisabled }: DocumentErrorProps) {
  return (
    <Empty className="h-full">
      <EmptyHeader className="animate-in duration-300 fade-in-0">
        <EmptyTitle>Error</EmptyTitle>
        <EmptyDescription>{error}</EmptyDescription>
        <EmptyContent className="mt-1.5">
          <Button variant="outline" size="sm" onClick={onRetry} disabled={retryDisabled}>
            Try again
          </Button>
        </EmptyContent>
      </EmptyHeader>
    </Empty>
  )
}

export { DocumentError }
