import { DocumentManager } from './document-manager'
import { DocumentViewer } from './document-viewer'
import { PdfEngine } from './pdf-engine'

function WorksheetPreview() {
  return (
    <PdfEngine>
      <DocumentManager>
        <DocumentViewer />
      </DocumentManager>
    </PdfEngine>
  )
}

export { WorksheetPreview }
