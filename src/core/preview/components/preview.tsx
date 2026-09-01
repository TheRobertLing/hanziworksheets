import { DocumentManager } from './document-manager'
import { DocumentViewer } from './document-viewer'
import { PdfEngine } from './engine'

function Preview() {
  return (
    <PdfEngine>
      <DocumentManager>
        <DocumentViewer />
      </DocumentManager>
    </PdfEngine>
  )
}

export { Preview }
