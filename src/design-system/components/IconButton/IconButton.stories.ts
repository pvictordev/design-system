import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconButton, Inline, Stack } from '@/design-system';

const meta = {
  title: 'Design System/Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    label: 'Create item',
    variant: 'secondary',
    size: 'md',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args };
    },
    template: `<IconButton v-bind="args"><span aria-hidden="true">+</span></IconButton>`,
  }),
};

export const States: Story = {
  render: () => ({
    components: { IconButton, Inline, Stack },
    template: `
      <Stack gap="5">
        <Inline>
          <IconButton label="Add" variant="primary"><span aria-hidden="true">+</span></IconButton>
          <IconButton label="Edit" variant="secondary"><span aria-hidden="true">E</span></IconButton>
          <IconButton label="More" variant="ghost"><span aria-hidden="true">...</span></IconButton>
          <IconButton label="Delete" variant="danger"><span aria-hidden="true">x</span></IconButton>
        </Inline>
        <Inline>
          <IconButton label="Small" size="sm"><span aria-hidden="true">S</span></IconButton>
          <IconButton label="Medium" size="md"><span aria-hidden="true">M</span></IconButton>
          <IconButton label="Large" size="lg"><span aria-hidden="true">L</span></IconButton>
          <IconButton label="Disabled" disabled><span aria-hidden="true">D</span></IconButton>
        </Inline>
      </Stack>
    `,
  }),
};
