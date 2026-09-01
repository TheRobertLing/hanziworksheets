import { useEffect, useState, type ReactNode } from 'react'

import { MobileContext } from '@/shared/contexts/mobile'

interface MobileProviderProps {
  children: ReactNode
}

const MOBILE_MEDIA_QUERY = '(width < 1024px)'

function MobileProvider({ children }: MobileProviderProps) {
  const [isMobile, setMobile] = useState(() => window.matchMedia(MOBILE_MEDIA_QUERY).matches)

  useEffect(() => {
    const query = window.matchMedia(MOBILE_MEDIA_QUERY)
    const onChange = (event: MediaQueryListEvent) => setMobile(event.matches)

    query.addEventListener('change', onChange)

    return () => query.removeEventListener('change', onChange)
  }, [])

  return <MobileContext value={{ isMobile }}>{children}</MobileContext>
}

export { MobileProvider }
