import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Grid, Input, Stack } from '@/design-system';

const meta = {
  title: 'Design System/Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: {
      control: 'select',
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
  },
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
    size: 'md',
    type: 'email',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `<Input v-bind="args" v-model="value" />`,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Grid, Input, Stack },
    setup() {
      const normal = ref('');
      const invalid = ref('bad-email');
      return { normal, invalid };
    },
    template: `
      <Grid columns="auto" gap="4">
        <Input v-model="normal" label="Default" placeholder="Enter a value" />
        <Input label="Disabled" model-value="Unavailable" disabled />
        <Input v-model="invalid" label="Invalid" error="Enter a valid email address." />
        <Stack gap="3">
          <Input size="sm" label="Small" placeholder="Small" />
          <Input size="md" label="Medium" placeholder="Medium" />
          <Input size="lg" label="Large" placeholder="Large" />
        </Stack>
      </Grid>
    `,
  }),
};
