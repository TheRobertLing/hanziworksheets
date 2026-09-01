import { useContext } from 'react'

import { MobileContext } from '@/shared/contexts/mobile'

function useMobile() {
  const context = useContext(MobileContext)

  if (!context) {
    throw new Error('useMobile must be used within a MobileProvider')
  }

  return context
}

export { useMobile }
