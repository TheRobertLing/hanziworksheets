import {
  useDocumentManagerCapability,
  useOpenDocuments,
} from '@embedpdf/plugin-document-manager/react'
import { useCallback, useEffect } from 'react'

import { useGeneratedWorksheet } from '@/core/generate'
import { useWorksheetDocumentStatus } from './worksheet-document-status'
import { useWorksheetDocumentUrl } from './worksheet-document-url'

function useActiveWorksheetDocument() {
  const { provides: documentManager } = useDocumentManagerCapability()
  const { worksheetBlob } = useGeneratedWorksheet()
  const [activeDocument] = useOpenDocuments()
  const { documentUrl, setDocumentUrl, clearDocumentUrl } = useWorksheetDocumentUrl()
  const { syncDocumentStatus } = useWorksheetDocumentStatus()

  useEffect(() => {
    if (!worksheetBlob) return

    const documentUrl = URL.createObjectURL(worksheetBlob)
    setDocumentUrl(documentUrl)

    return () => {
      clearDocumentUrl(documentUrl)
    }
  }, [clearDocumentUrl, setDocumentUrl, worksheetBlob])

  useEffect(() => {
    if (!documentManager || !documentUrl) return

    documentManager
      .openDocumentUrl({ url: documentUrl, name: 'worksheet.pdf', autoActivate: true })
      .toPromise()
      .catch(() => {})

    return () => {
      documentManager.closeAllDocuments()
    }
  }, [documentManager, documentUrl])

  useEffect(() => {
    if (!documentUrl) return syncDocumentStatus('idle', null)
    if (!activeDocument) return syncDocumentStatus('loading', null)

    if (activeDocument.status === 'loaded') return syncDocumentStatus('loaded', null)
    if (activeDocument.status === 'error') {
      return syncDocumentStatus('error', activeDocument.error ?? 'Failed to load document')
    }

    syncDocumentStatus('loading', null)
  }, [activeDocument, documentUrl, syncDocumentStatus])

  const retryDocument = useCallback(() => {
    if (documentManager && activeDocument) documentManager.retryDocument(activeDocument.id)
  }, [activeDocument, documentManager])

  return {
    activeDocumentId: activeDocument?.id ?? null,
    retryDocument,
  }
}

export { useActiveWorksheetDocument }
