import { cn } from '@/shared/utils'
import { Toggle } from '@/shared/ui/primitives/toggle'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/primitives/tooltip'

interface TooltipToggleProps {
  tooltipProps: React.ComponentProps<typeof TooltipContent>
  toggleProps: React.ComponentProps<typeof Toggle>
  rootProps?: React.ComponentProps<typeof Tooltip>
}

function TooltipToggle({ tooltipProps, toggleProps, rootProps }: TooltipToggleProps) {
  const { className, ...restTooltipProps } = tooltipProps

  return (
    <Tooltip {...rootProps}>
      <TooltipTrigger render={<Toggle {...toggleProps} />} />
      <TooltipContent
        className={cn('shadow-[0_0_2px_rgba(0,0,0,0.3)]', className)}
        {...restTooltipProps}
      />
    </Tooltip>
  )
}

export { TooltipToggle }
export type { TooltipToggleProps }
