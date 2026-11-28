import type { Meta, StoryObj } from '@storybook/react-vite'

import { PDFPreviewer } from './previewer'
import samplePdf from './pdf-sample.pdf?url'

const meta = {
  component: PDFPreviewer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-dvh">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PDFPreviewer>

type Story = StoryObj<typeof meta>

const Default: Story = {
  args: { url: samplePdf },
}

const LoadError: Story = {
  name: 'Error',
  args: { url: 'blob:http://localhost/does-not-exist' },
}

const NoData: Story = {
  args: { url: '' },
}

export default meta
export { Default, LoadError, NoData }
