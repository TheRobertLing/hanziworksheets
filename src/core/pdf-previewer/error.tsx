import { Button } from '@/shared/ui/primitives/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/shared/ui/primitives/empty'

interface PDFErrorProps {
  description?: string
  onRetry?: () => void | Promise<void>
  retryDisabled?: boolean
}

function PDFError({
  description = 'Could not show preview',
  onRetry,
  retryDisabled,
}: PDFErrorProps) {
  return (
    <Empty className="bg-muted">
      <EmptyHeader>
        <EmptyTitle>Error</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
        {onRetry && (
          <EmptyContent className="mt-1.5">
            <Button variant="outline" size="sm" onClick={onRetry} disabled={retryDisabled}>
              Try again
            </Button>
          </EmptyContent>
        )}
      </EmptyHeader>
    </Empty>
  )
}

export { PDFError }
export type { PDFErrorProps }
