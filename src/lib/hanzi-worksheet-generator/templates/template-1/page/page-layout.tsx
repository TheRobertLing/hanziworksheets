import type { PrintConfig } from '@/lib/hanzi-worksheet-generator/types'
import { Document, Font, Page, View } from '@react-pdf/renderer'
import type { ReactNode } from 'react'

// react-pdf (fontkit) cannot embed WOFF2 fonts into PDFs, so this font must stay TTF
Font.register({ family: 'Pinyin', src: '/fonts/pinyin.ttf' })

interface PageLayoutProps {
  printConfig: PrintConfig
  children: ReactNode
}

function PageLayout({ printConfig, children }: PageLayoutProps) {
  const { paper, orientation, margin } = printConfig

  return (
    <Document title="hanziworksheets worksheet">
      <Page
        size={paper}
        orientation={orientation}
        style={{
          fontFamily: 'Pinyin',
          padding: `${margin}mm`,
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center', gap: '12mm' }} wrap>
          {children}
        </View>
      </Page>
    </Document>
  )
}

export { PageLayout }
