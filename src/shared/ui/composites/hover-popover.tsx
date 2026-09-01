import { Button } from '@/shared/ui/primitives/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/primitives/popover'

interface HoverPopoverProps {
  popoverProps: React.ComponentProps<typeof PopoverContent>
  buttonProps: React.ComponentProps<typeof Button>
}

function HoverPopover({ popoverProps, buttonProps }: HoverPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger openOnHover delay={50} closeDelay={50} render={<Button {...buttonProps} />} />
      <PopoverContent {...popoverProps} />
    </Popover>
  )
}

export { HoverPopover }
export type { HoverPopoverProps }
