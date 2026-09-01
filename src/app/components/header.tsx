import { AttributionsDialog } from './attributions-dialog'
import { ReportBugButton } from './report-bug-button'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2 font-bold">
        <Logo />
        <span className="hidden lg:block">hanziworksheets</span>
      </div>
      <div className="flex items-center gap-1">
        <ReportBugButton />
        <AttributionsDialog />
        <ThemeToggle />
      </div>
    </header>
  )
}

export { Header }
