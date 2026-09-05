import { DocumentDownloadButton } from './document-download-button'
import { DocumentZoomControls } from './document-zoom-controls'

function DocumentToolbar() {
  return (
    <div
      role="toolbar"
      aria-label="Worksheet preview controls"
      className="absolute bottom-4 left-1/2 -translate-x-1/2"
    >
      <div className="flex animate-in items-center gap-2 duration-300 fade-in-0">
        <div className="flex items-center rounded-full border border-border bg-popover/70 shadow-lg backdrop-blur-sm">
          <DocumentZoomControls />
        </div>
        <div className="flex items-center rounded-full border border-border bg-popover/70 shadow-lg backdrop-blur-sm">
          <DocumentDownloadButton />
        </div>
      </div>
    </div>
  )
}

export { DocumentToolbar }
