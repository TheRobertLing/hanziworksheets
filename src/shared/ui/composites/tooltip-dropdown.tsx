import { cn } from '@/shared/utils'
import { Button } from '@/shared/ui/primitives/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/primitives/tooltip'
import { DropdownMenuTrigger } from '@/shared/ui/primitives/dropdown-menu'

interface TooltipDropdownProps {
  buttonProps: Omit<React.ComponentProps<typeof Button>, 'render'>
  tooltipProps: React.ComponentProps<typeof TooltipContent>
  rootProps?: React.ComponentProps<typeof Tooltip>
}

/** A dropdown menu trigger button with a tooltip. Place it inside a DropdownMenu. */
function TooltipDropdown({ buttonProps, tooltipProps, rootProps }: TooltipDropdownProps) {
  const { className, ...restTooltipProps } = tooltipProps

  return (
    <Tooltip {...rootProps}>
      <TooltipTrigger render={<Button {...buttonProps} render={<DropdownMenuTrigger />} />} />
      <TooltipContent
        className={cn('shadow-[0_0_2px_rgba(0,0,0,0.3)]', className)}
        {...restTooltipProps}
      />
    </Tooltip>
  )
}

export { TooltipDropdown }
export type { TooltipDropdownProps }
