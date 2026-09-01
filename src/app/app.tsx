import { Header } from './components/header'
import { Workspace } from './components/workspace'
import { Providers } from './providers'

function App() {
  return (
    <Providers>
      <div className="flex h-dvh flex-col">
        <Header />
        <Workspace />
      </div>
    </Providers>
  )
}

export { App }
