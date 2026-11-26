import { Page } from 'react-pdf'

const PAGE_WIDTH = 800

interface PDFPagesProps {
  pageCount: number
}

function PDFPages({ pageCount }: PDFPagesProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {Array.from({ length: pageCount }, (_, index) => (
        <Page
          key={index}
          pageNumber={index + 1}
          width={PAGE_WIDTH}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="max-w-full shadow-sm [&_canvas]:h-auto! [&_canvas]:max-w-full"
        />
      ))}
    </div>
  )
}

export { PDFPages }
