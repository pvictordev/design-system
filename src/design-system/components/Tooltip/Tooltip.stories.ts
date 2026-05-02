import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Info } from 'lucide-vue-next';
import { Button, Inline, Tooltip } from '@/design-system';

const meta = {
  title: 'Design System/Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'View details',
    side: 'top',
    align: 'center',
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Button, Info, Tooltip },
    setup() {
      return { args };
    },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Tooltip v-bind="args">
            <template #trigger>
              <Button variant="secondary">
                <Info :size="16" aria-hidden="true" />
                Details
              </Button>
            </template>
          </Tooltip>
        </div>
      </main>
    `,
  }),
};

export const Placement: Story = {
  render: () => ({
    components: { Button, Inline, Tooltip },
    template: `
      <main class="ds-page">
        <div class="ds-container">
          <Inline>
            <Tooltip content="Tooltip above" side="top">
              <template #trigger>
                <Button variant="secondary">Top</Button>
              </template>
            </Tooltip>
            <Tooltip content="Tooltip right" side="right">
              <template #trigger>
                <Button variant="secondary">Right</Button>
              </template>
            </Tooltip>
            <Tooltip content="Tooltip below" side="bottom">
              <template #trigger>
                <Button variant="secondary">Bottom</Button>
              </template>
            </Tooltip>
            <Tooltip content="Tooltip left" side="left">
              <template #trigger>
                <Button variant="secondary">Left</Button>
              </template>
            </Tooltip>
          </Inline>
        </div>
      </main>
    `,
  }),
};
