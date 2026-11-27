import { InfoIcon } from 'lucide-react'

import { TooltipDialog } from '@/shared/ui/composites/tooltip-dialog'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/primitives/dialog'

const LINK_CLASS = 'font-medium underline underline-offset-3 hover:text-foreground'

function AttributionsDialog() {
  return (
    <TooltipDialog
      buttonProps={{
        variant: 'ghost',
        size: 'icon',
        'aria-label': 'View attributions',
        children: <InfoIcon />,
      }}
      tooltipProps={{ side: 'bottom', children: 'Attributions' }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Attributions</DialogTitle>
          <DialogDescription>
            hanziworksheets uses open data from the following sources.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 text-muted-foreground">
          <section className="grid gap-1">
            <h3 className="font-medium text-foreground">Character data</h3>
            <p>
              Stroke-order graphics from{' '}
              <a
                href="https://github.com/skishore/makemeahanzi"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Make Me a Hanzi
              </a>{' '}
              by Scott Kishore and contributors, available under the{' '}
              <a
                href="https://github.com/skishore/makemeahanzi/blob/master/APL"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Arphic Public License
              </a>
              .
            </p>
          </section>
        </div>
      </DialogContent>
    </TooltipDialog>
  )
}

export { AttributionsDialog }
