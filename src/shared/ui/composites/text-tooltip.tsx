import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'
import { buttonVariants } from '@/shared/ui/primitives/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/primitives/tooltip'

interface TextTooltipProps {
  tooltipProps: React.ComponentProps<typeof TooltipContent>
  textProps: React.ComponentProps<'span'> & VariantProps<typeof buttonVariants>
}

function TextTooltip({ tooltipProps, textProps }: TextTooltipProps) {
  const { className: tooltipClassName, ...restTooltipProps } = tooltipProps
  const { className, variant, size, ...restTextProps } = textProps

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span className={buttonVariants({ variant, size, className })} {...restTextProps} />
        }
      />
      <TooltipContent
        className={cn('shadow-[0_0_2px_rgba(0,0,0,0.3)]', tooltipClassName)}
        {...restTooltipProps}
      />
    </Tooltip>
  )
}

export { TextTooltip }
export type { TextTooltipProps }
