import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toaster } from '@/shared/ui/primitives/sonner'

import { useCharacterEntriesStore } from '../stores/characters'
import { usePrintSettingsStore } from '../stores/print'
import { useTemplateStore } from '../stores/template'
import { CharacterEntriesSection } from './character-entries-section'
import { ConfigPanel } from './config-panel'
import { PrintSettings } from './print-settings'
import { TemplateSettings } from './template-settings'

// The stores are global, so reset them before each story to keep stories independent.
function resetStores() {
  useCharacterEntriesStore.setState(useCharacterEntriesStore.getInitialState())
  usePrintSettingsStore.setState(usePrintSettingsStore.getInitialState())
  useTemplateStore.setState(useTemplateStore.getInitialState())
}

// Includes 行 and 长 because they have more than one pinyin reading.
function seedCharacters() {
  useCharacterEntriesStore.getState().addCharacterEntries([...'你好中国行长'])
}

const meta = {
  title: 'Config/ConfigPanel',
  component: ConfigPanel,
  parameters: {
    layout: 'centered',
  },
  beforeEach: resetStores,
  decorators: [
    // Matches the sidebar width in desktop-workspace.tsx (w-90).
    (Story) => (
      <div className="w-90 border">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof ConfigPanel>

type Story = StoryObj<typeof meta>

const Empty: Story = {}

const WithCharacters: Story = {
  beforeEach: seedCharacters,
}

const CharactersSection: Story = {
  render: () => <CharacterEntriesSection />,
  beforeEach: seedCharacters,
}

const TemplateSection: Story = {
  render: () => <TemplateSettings />,
}

const PrintSection: Story = {
  render: () => <PrintSettings />,
}

export default meta
export { Empty, WithCharacters, CharactersSection, TemplateSection, PrintSection }
