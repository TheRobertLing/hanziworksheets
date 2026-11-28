import { Suspense, useDeferredValue } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Document, pdfjs } from 'react-pdf'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

import { PDFError } from './error'
import { PDFLoading } from './loading'
import { PDFNoData } from './no-data'
import { PDFPages } from './pages'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

interface PDFPreviewerProps {
  url: string
}

function PDFPreviewer({ url }: PDFPreviewerProps) {
  const deferredUrl = useDeferredValue(url)

  return (
    <div className="flex h-full flex-col overflow-auto bg-muted dark:bg-card">
      {deferredUrl ? (
        <ErrorBoundary resetKeys={[deferredUrl]} fallback={<PDFError />}>
          <Suspense fallback={<PDFLoading />}>
            <Document file={deferredUrl} className="p-8">
              {({ pdf }) => <PDFPages pageCount={pdf.numPages} />}
            </Document>
          </Suspense>
        </ErrorBoundary>
      ) : (
        <PDFNoData />
      )}
    </div>
  )
}

export { PDFPreviewer }
export type { PDFPreviewerProps }
