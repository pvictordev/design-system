import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Button, Dialog, Input, Stack, Text } from '@/design-system';

const meta = {
  title: 'Design System/Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    title: 'Invite teammate',
    description: 'Dialog behavior is provided by Reka UI and styled by design-system tokens.',
    size: 'md',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFlow: Story = {
  render: (args) => ({
    components: { Button, Dialog, Input, Stack, Text },
    setup() {
      return { args };
    },
    template: `
      <Dialog v-bind="args">
        <template #trigger>
          <Button>Open dialog</Button>
        </template>

        <Stack gap="4">
          <Text>Send an invitation to a new workspace member.</Text>
          <Input label="Email" type="email" placeholder="name@example.com" />
        </Stack>

        <template #footer>
          <Button variant="secondary">Cancel</Button>
          <Button>Send invite</Button>
        </template>
      </Dialog>
    `,
  }),
};
