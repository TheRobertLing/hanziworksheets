import { Viewport } from '@embedpdf/plugin-viewport/react'
import { Scroller } from '@embedpdf/plugin-scroll/react'
import { RenderLayer } from '@embedpdf/plugin-render/react'

import { useDocumentId } from '../contexts/document-active'

function DocumentSurface() {
  const documentId = useDocumentId()

  return (
    <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
      <Viewport
        documentId={documentId}
        className="h-full scrollbar-gutter-both rounded-none border border-transparent bg-muted outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-inset"
      >
        <Scroller
          documentId={documentId}
          renderPage={({ pageIndex }) => (
            <RenderLayer
              documentId={documentId}
              pageIndex={pageIndex}
              className="animate-in duration-500 slide-in-from-bottom-4"
            />
          )}
        />
      </Viewport>
    </div>
  )
}

export { DocumentSurface }
