import type { Meta, StoryObj } from '@storybook/react-vite'
import { PDFLoading } from './loading'

const meta = {
  component: PDFLoading,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="flex h-dvh flex-col">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PDFLoading>

type Story = StoryObj<typeof meta>

const Default: Story = {}

export default meta
export { Default }
