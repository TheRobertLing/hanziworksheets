import { useMobile } from '@/shared/hooks/use-mobile'
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/shared/ui/primitives/empty'

function DocumentEmpty() {
  const { isMobile } = useMobile()

  return (
    <Empty className="h-full">
      <EmptyHeader className="animate-in duration-300 fade-in-0">
        <EmptyTitle>
          Welcome to <span className="font-bold">hanziworksheets</span>{' '}
        </EmptyTitle>
        <EmptyDescription>
          {isMobile
            ? 'To get started, open the configuration panel using the edit button at the bottom-right.'
            : 'To get started, create a worksheet using the configuration panel on the right.'}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { DocumentEmpty }
