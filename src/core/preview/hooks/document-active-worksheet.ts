import {
  useDocumentManagerCapability,
  useOpenDocuments,
} from '@embedpdf/plugin-document-manager/react'
import { useCallback, useEffect } from 'react'

import { useWorksheetGeneration } from '@/core/generate'
import { useWorksheetDocument } from './worksheet-document'

function useActiveWorksheet() {
  const { provides: documentManager } = useDocumentManagerCapability()
  const { blob } = useWorksheetGeneration()
  const [worksheet] = useOpenDocuments()
  const { url, setUrl, clearUrl, sync } = useWorksheetDocument()

  useEffect(() => {
    if (!blob) return

    const url = URL.createObjectURL(blob)
    setUrl(url)

    return () => {
      clearUrl(url)
    }
  }, [blob, clearUrl, setUrl])

  useEffect(() => {
    if (!documentManager || !url) return

    documentManager
      .openDocumentUrl({ url, name: 'worksheet.pdf', autoActivate: true })
      .toPromise()
      .catch(() => {})

    return () => {
      documentManager.closeAllDocuments()
    }
  }, [documentManager, url])

  useEffect(() => {
    if (!url) return sync('idle', null)
    if (!worksheet) return sync('loading', null)

    if (worksheet.status === 'loaded') return sync('loaded', null)
    if (worksheet.status === 'error') {
      return sync('error', worksheet.error ?? 'Failed to load document')
    }

    sync('loading', null)
  }, [sync, url, worksheet])

  const retry = useCallback(() => {
    if (documentManager && worksheet) documentManager.retryDocument(worksheet.id)
  }, [documentManager, worksheet])

  return {
    activeDocumentId: worksheet?.id ?? null,
    retry,
  }
}

export { useActiveWorksheet }
