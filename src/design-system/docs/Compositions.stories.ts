import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Folder, MessageSquareQuote, PanelsTopLeft, Quote } from 'lucide-vue-next';
import { Button, Tooltip } from '@/design-system';

const meta = {
  title: 'Design System/Patterns/Compositions',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toolbar: Story = {
  render: () => ({
    components: { Button, Folder, MessageSquareQuote, PanelsTopLeft, Quote, Tooltip },
    setup() {
      const activeTool = ref('messages');

      return { activeTool };
    },
    template: `
      <main class="ds-page app-toolbar-page">
        <nav class="app-toolbar-composition" aria-label="Workspace tools">
          <Tooltip content="Canvas">
            <template #trigger>
              <Button
                class="app-toolbar-action"
                :class="{ 'app-toolbar-action--active': activeTool === 'canvas' }"
                variant="ghost"
                size="sm"
                aria-label="Canvas"
                @click="activeTool = 'canvas'"
              >
                <PanelsTopLeft :size="22" :stroke-width="2.1" />
              </Button>
            </template>
          </Tooltip>
          <Tooltip content="Messages">
            <template #trigger>
              <Button
                class="app-toolbar-action"
                :class="{ 'app-toolbar-action--active': activeTool === 'messages' }"
                variant="ghost"
                size="sm"
                aria-label="Messages"
                @click="activeTool = 'messages'"
              >
                <MessageSquareQuote :size="22" :stroke-width="2.1" />
              </Button>
            </template>
          </Tooltip>
          <Tooltip content="Files">
            <template #trigger>
              <Button
                class="app-toolbar-action"
                :class="{ 'app-toolbar-action--active': activeTool === 'files' }"
                variant="ghost"
                size="sm"
                aria-label="Files"
                @click="activeTool = 'files'"
              >
                <Folder :size="22" :stroke-width="2.1" />
              </Button>
            </template>
          </Tooltip>
          <Tooltip content="Notes">
            <template #trigger>
              <Button
                class="app-toolbar-action"
                :class="{ 'app-toolbar-action--active': activeTool === 'notes' }"
                variant="ghost"
                size="sm"
                aria-label="Notes"
                @click="activeTool = 'notes'"
              >
                <Quote :size="21" :stroke-width="2.2" />
              </Button>
            </template>
          </Tooltip>
        </nav>
      </main>
    `,
  }),
};
