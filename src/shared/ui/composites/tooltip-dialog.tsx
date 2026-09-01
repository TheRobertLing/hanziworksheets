import { cn } from '@/shared/utils'
import { Button } from '@/shared/ui/primitives/button'
import { Dialog, DialogTrigger } from '@/shared/ui/primitives/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/primitives/tooltip'

interface TooltipDialogProps {
  buttonProps: Omit<React.ComponentProps<typeof Button>, 'render'>
  dialogProps?: Omit<React.ComponentProps<typeof Dialog>, 'children'>
  tooltipProps: React.ComponentProps<typeof TooltipContent>
  children: React.ReactNode
}

function TooltipDialog({ buttonProps, dialogProps, tooltipProps, children }: TooltipDialogProps) {
  const { className, ...restTooltipProps } = tooltipProps

  return (
    <Dialog {...dialogProps}>
      <Tooltip>
        <TooltipTrigger render={<Button {...buttonProps} render={<DialogTrigger />} />} />
        <TooltipContent
          className={cn('shadow-[0_0_2px_rgba(0,0,0,0.3)]', className)}
          {...restTooltipProps}
        />
      </Tooltip>
      {children}
    </Dialog>
  )
}

export { TooltipDialog }
export type { TooltipDialogProps }
