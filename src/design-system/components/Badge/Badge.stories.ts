import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Badge, Inline, Stack } from '@/design-system';

const meta = {
  title: 'Design System/Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'info'],
    },
    variant: { control: 'select', options: ['subtle', 'solid', 'outline'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: {
    tone: 'neutral',
    variant: 'subtle',
    size: 'md',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Badge</Badge>`,
  }),
};

export const Matrix: Story = {
  render: () => ({
    components: { Badge, Inline, Stack },
    template: `
      <Stack gap="4">
        <Inline>
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="danger">Danger</Badge>
          <Badge tone="info">Info</Badge>
        </Inline>
        <Inline>
          <Badge variant="subtle">Subtle</Badge>
          <Badge variant="solid" tone="info">Solid</Badge>
          <Badge variant="outline" tone="success">Outline</Badge>
        </Inline>
      </Stack>
    `,
  }),
};
