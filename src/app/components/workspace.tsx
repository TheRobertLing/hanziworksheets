import { useMobile } from '@/shared/hooks/use-mobile'
import { DesktopWorkspace } from './desktop-workspace'
import { MobileWorkspace } from './mobile-workspace'

function Workspace() {
  const { isMobile } = useMobile()

  return (
    <div className="relative min-h-0 flex-1 overflow-hidden">
      {isMobile ? <MobileWorkspace /> : <DesktopWorkspace />}
    </div>
  )
}

export { Workspace }
