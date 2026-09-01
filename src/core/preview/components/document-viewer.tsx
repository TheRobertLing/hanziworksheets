import { DocumentSurface } from './document-surface'
import { DocumentToolbar } from './document-toolbar'

function DocumentViewer() {
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <DocumentSurface />
      <DocumentToolbar />
    </div>
  )
}

export { DocumentViewer }
