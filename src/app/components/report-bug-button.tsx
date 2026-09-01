import { BugIcon } from 'lucide-react'

import { TooltipButton } from '@/shared/ui/composites/tooltip-button'

function ReportBugButton() {
  return (
    <TooltipButton
      buttonProps={{
        render: (
          <a
            href="https://github.com/TheRobertLing/hanziworksheets/issues/new"
            target="_blank"
            rel="noreferrer"
          />
        ),
        variant: 'ghost',
        size: 'icon',
        'aria-label': 'Report a bug',
        children: <BugIcon />,
      }}
      tooltipProps={{ side: 'bottom', children: 'Report a bug' }}
    />
  )
}

export { ReportBugButton }
