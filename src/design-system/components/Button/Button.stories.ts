import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Button, Inline, Stack } from '@/design-system';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Button</Button>`,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Button, Inline, Stack },
    template: `
      <Stack gap="5">
        <Inline>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Inline>
        <Inline>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Inline>
        <Inline>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </Inline>
      </Stack>
    `,
  }),
};
