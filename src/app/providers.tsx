import { useState, type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MobileProvider } from '@/shared/providers/mobile'
import { TooltipProvider } from '@/shared/ui/primitives/tooltip'
import { Toaster } from '@/shared/ui/primitives/sonner'

interface ProvidersProps {
  children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <MobileProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </MobileProvider>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export { Providers }
