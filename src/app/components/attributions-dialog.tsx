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
            hanziworksheets uses open data, typefaces, and colours from the following sources.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 text-muted-foreground">
          <section>
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

          <section>
            <h3 className="font-medium text-foreground">Typefaces</h3>
            <p>
              <a
                href="https://www.hanyi.com.cn/weixin/h5/CustomizedFont/OPPOSans.php"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                OPPO Sans
              </a>{' '}
              by OPPO, Hanyi Fonts, and Pentagram.
            </p>
            <p>
              <a
                href="https://github.com/notofonts/NotoSans"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Noto Sans
              </a>{' '}
              by the Noto project, licensed under the SIL Open Font License 1.1.
            </p>
          </section>
          <section>
            <h3 className="font-medium text-foreground">Colours</h3>
            <p>
              Transport mode colours from{' '}
              <a
                href="https://opendata.transport.nsw.gov.au/developers/resources"
                target="_blank"
                rel="noreferrer"
                className={LINK_CLASS}
              >
                Transport for NSW
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
