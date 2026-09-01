import { createContext } from 'react'

interface MobileContextValue {
  isMobile: boolean
}

const MobileContext = createContext<MobileContextValue | null>(null)

export { MobileContext }
