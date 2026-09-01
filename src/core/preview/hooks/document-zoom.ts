import { useZoom } from '@embedpdf/plugin-zoom/react'
import { useDocumentId } from '../contexts/document-active'

function useWorksheetZoom() {
  const documentId = useDocumentId()
  const { state, provides: zoom } = useZoom(documentId)

  return {
    zoomLevel: state.currentZoomLevel,
    zoomIn: () => zoom?.zoomIn(),
    zoomOut: () => zoom?.zoomOut(),
  }
}

export { useWorksheetZoom }
