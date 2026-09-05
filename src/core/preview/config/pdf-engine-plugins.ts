import { createPluginRegistration } from '@embedpdf/core'

import { DocumentManagerPluginPackage } from '@embedpdf/plugin-document-manager/react'
import { ExportPluginPackage } from '@embedpdf/plugin-export/react'
import { RenderPluginPackage } from '@embedpdf/plugin-render/react'
import { ScrollPluginPackage } from '@embedpdf/plugin-scroll/react'
import { ViewportPluginPackage } from '@embedpdf/plugin-viewport/react'
import { ZoomPluginPackage } from '@embedpdf/plugin-zoom/react'

const pdfEnginePlugins = [
  createPluginRegistration(DocumentManagerPluginPackage),
  createPluginRegistration(ViewportPluginPackage, { viewportGap: 64 }),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),
  createPluginRegistration(ZoomPluginPackage, {
    minZoom: 0.2,
    maxZoom: 4,
  }),
  createPluginRegistration(ExportPluginPackage, { defaultFileName: 'worksheet.pdf' }),
]

export { pdfEnginePlugins }
