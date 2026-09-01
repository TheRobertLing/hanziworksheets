import { Button } from '@/shared/ui/primitives/button'
import { cn } from '@/shared/utils'
import { useWorksheetGeneration } from '../hooks/worksheet-generation'

function GenerateWorksheetButton({
  className,
  disabled,
  onClick,
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'children'>) {
  const { generate, canGenerate, isGenerating } = useWorksheetGeneration()

  return (
    <Button
      {...props}
      onClick={(event) => {
        generate()
        onClick?.(event)
      }}
      disabled={disabled || !canGenerate || isGenerating}
      className={cn('w-full', className)}
    >
      Generate Worksheet
    </Button>
  )
}

export { GenerateWorksheetButton }
