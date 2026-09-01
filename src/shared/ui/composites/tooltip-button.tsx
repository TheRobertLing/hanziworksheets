import { cn } from '@/shared/utils'
import { Button } from '@/shared/ui/primitives/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/primitives/tooltip'

interface TooltipButtonProps {
  tooltipProps: React.ComponentProps<typeof TooltipContent>
  buttonProps: React.ComponentProps<typeof Button>
}

function TooltipButton({ tooltipProps, buttonProps }: TooltipButtonProps) {
  const { className, ...restTooltipProps } = tooltipProps

  return (
    <Tooltip>
      <TooltipTrigger render={<Button {...buttonProps} />} />
      <TooltipContent
        className={cn('shadow-[0_0_2px_rgba(0,0,0,0.3)]', className)}
        {...restTooltipProps}
      />
    </Tooltip>
  )
}

export { TooltipButton }
export type { TooltipButtonProps }
