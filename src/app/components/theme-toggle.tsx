import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { TooltipButton } from '@/shared/ui/composites/tooltip-button'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <TooltipButton
      buttonProps={{
        variant: 'ghost',
        size: 'icon',
        'aria-label': 'Toggle theme',
        onClick: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
        children: (
          <>
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
          </>
        ),
      }}
      tooltipProps={{ side: 'bottom', align: 'end', children: 'Toggle theme' }}
    />
  )
}

export { ThemeToggle }
