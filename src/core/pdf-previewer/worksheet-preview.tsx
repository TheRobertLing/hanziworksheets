import { useWorksheetGeneration } from '@/core/generate'
import { PDFError } from './error'
import { PDFLoading } from './loading'
import { PDFPreviewer } from './previewer'
import { WorksheetToolbar } from './worksheet-toolbar'
import { WorksheetWelcome } from './worksheet-welcome'

function WorksheetPreview() {
  const { worksheetUrl, error, isGenerating, isGenerationError, canGenerate, generate } =
    useWorksheetGeneration()

  if (isGenerationError) {
    return (
      <div className="flex h-full flex-col">
        <PDFError
          description={error ?? 'Could not generate worksheet'}
          onRetry={generate}
          retryDisabled={!canGenerate || isGenerating}
        />
      </div>
    )
  }

  if (!worksheetUrl) {
    return (
      <div className="flex h-full flex-col">
        {isGenerating ? <PDFLoading /> : <WorksheetWelcome />}
      </div>
    )
  }

  return (
    <div className="relative h-full">
      <PDFPreviewer url={worksheetUrl} />
      <WorksheetToolbar url={worksheetUrl} />
    </div>
  )
}

export { WorksheetPreview }
